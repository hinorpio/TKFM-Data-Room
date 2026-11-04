import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { createReadStream, existsSync, mkdtempSync, rmSync } from 'node:fs'
import { readFile, stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { tmpdir } from 'node:os'
import path from 'node:path'

const distDir = path.resolve('dist')

if (!existsSync(distDir)) {
  throw new Error('dist/ not found. Run npm run generate before this check.')
}

const mimeTypes = {
  '.css': 'text/css',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.webmanifest': 'application/manifest+json',
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function waitForExit(process, timeoutMs) {
  if (process.exitCode !== null || process.signalCode !== null) return Promise.resolve(true)

  return new Promise((resolve) => {
    const timeout = setTimeout(() => resolve(false), timeoutMs)
    process.once('exit', () => {
      clearTimeout(timeout)
      resolve(true)
    })
  })
}

async function getFreePort() {
  const server = createServer()
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  const port = server.address().port
  await new Promise((resolve) => server.close(resolve))
  return port
}

async function waitForJson(url, timeoutMs = 10000) {
  const startedAt = Date.now()

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(url)
      if (response.ok) return response.json()
    } catch {
      // Chrome may need a moment before the debugging endpoint is ready.
    }

    await wait(200)
  }

  throw new Error(`Timed out waiting for ${url}`)
}

function createDistServer() {
  return createServer(async (request, response) => {
    try {
      const url = new URL(request.url, 'http://127.0.0.1')
      let filePath = path.join(distDir, decodeURIComponent(url.pathname))

      if (!filePath.startsWith(distDir)) {
        response.writeHead(403)
        response.end('Forbidden')
        return
      }

      if (existsSync(filePath) && (await stat(filePath)).isDirectory()) {
        filePath = path.join(filePath, 'index.html')
      }

      if (!existsSync(filePath)) {
        filePath = path.join(distDir, '200.html')
      }

      if (!existsSync(filePath)) {
        response.writeHead(404)
        response.end('Not found')
        return
      }

      response.writeHead(200, {
        'Content-Type': mimeTypes[path.extname(filePath)] ?? 'application/octet-stream',
      })
      createReadStream(filePath).pipe(response)
    } catch (error) {
      response.writeHead(500)
      response.end(error.message)
    }
  })
}

function callCdp(socket) {
  let id = 0
  const pending = new Map()

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data)
    if (!message.id || !pending.has(message.id)) return

    const { resolve, reject, timeout } = pending.get(message.id)
    clearTimeout(timeout)
    pending.delete(message.id)

    if (message.error) {
      reject(new Error(`${message.error.message}: ${message.error.data ?? ''}`))
      return
    }

    resolve(message)
  }

  return (method, params = {}) => new Promise((resolve, reject) => {
    const callId = ++id
    const timeout = setTimeout(() => {
      pending.delete(callId)
      reject(new Error(`Timed out during CDP call ${method}`))
    }, 20000)

    pending.set(callId, { resolve, reject, timeout })
    socket.send(JSON.stringify({ id: callId, method, params }))
  })
}

async function inspectWithChrome(url, cdpPort, userDataDir) {
  const chrome = spawn('google-chrome-stable', [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--noerrdialogs',
    '--no-first-run',
    '--remote-debugging-address=127.0.0.1',
    `--remote-debugging-port=${cdpPort}`,
    `--user-data-dir=${userDataDir}`,
    'about:blank',
  ], { stdio: ['ignore', 'ignore', 'ignore'] })

  try {
    const tabs = await waitForJson(`http://127.0.0.1:${cdpPort}/json/list`)
    const tab = tabs.find((candidate) => candidate.type === 'page') ?? tabs[0]
    const socket = new WebSocket(tab.webSocketDebuggerUrl)
    await new Promise((resolve) => socket.addEventListener('open', resolve, { once: true }))

    try {
      const cdp = callCdp(socket)

      await cdp('Page.enable')
      await cdp('Runtime.enable')
      socket.send(JSON.stringify({
        id: 999999,
        method: 'Runtime.evaluate',
        params: { expression: `location.href = ${JSON.stringify(url)}` },
      }))
      await wait(8000)

      const pageState = await cdp('Runtime.evaluate', {
        expression: `({
          href: location.href,
          manifestLinks: Array.from(document.querySelectorAll('link[rel="manifest"]')).map((link) => link.href)
        })`,
        returnByValue: true,
      })
      const appManifest = await cdp('Page.getAppManifest')
      const installability = await cdp('Page.getInstallabilityErrors')

      return {
        pageUrl: pageState.result.result.value.href,
        manifestLinks: pageState.result.result.value.manifestLinks,
        manifestUrl: appManifest.result.url,
        installabilityErrors: installability.result.installabilityErrors,
      }
    } finally {
      socket.close()
    }
  } finally {
    if (chrome.exitCode === null && chrome.signalCode === null) {
      chrome.kill('SIGTERM')
      const exited = await waitForExit(chrome, 2000)

      if (!exited) {
        chrome.kill('SIGKILL')
        await waitForExit(chrome, 2000)
      }
    }
  }
}

const server = createDistServer()
const userDataDir = mkdtempSync(path.join(tmpdir(), 'tkfm-pwa-check-'))

try {
  const httpPort = await getFreePort()
  const cdpPort = await getFreePort()

  await new Promise((resolve) => server.listen(httpPort, '127.0.0.1', resolve))

  const result = await inspectWithChrome(`http://127.0.0.1:${httpPort}/`, cdpPort, userDataDir)

  assert.equal(result.manifestLinks.length, 1, `page must expose exactly one web app manifest: ${JSON.stringify(result)}`)
  assert.ok(!result.manifestUrl.includes('/favicon/site.webmanifest'), `Chrome must use the Nuxt PWA generated manifest: ${JSON.stringify(result)}`)
  assert.deepEqual(result.installabilityErrors, [], `Chrome must report no PWA installability errors: ${JSON.stringify(result)}`)

  const manifest = JSON.parse(await readFile(path.join(distDir, result.manifestUrl.replace(/^https?:\/\/[^/]+\//, '')), 'utf8'))
  assert.equal(manifest.name, 'TKFM Data Room')
  assert.equal(manifest.short_name, 'TKFM Data Room')
  assert.equal(manifest.start_url, '/')
  assert.equal(manifest.scope, '/')
  assert.equal(manifest.display, 'standalone')
} finally {
  await new Promise((resolve) => server.close(resolve))
  rmSync(userDataDir, { recursive: true, force: true, maxRetries: 10, retryDelay: 200 })
}
