import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'tkfm-data-room',
    title: 'tkfm-data-room',
    htmlAttrs: {
      lang: 'tc'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/utils/util.ts", mode: "client", ssr:false },
  ],
  router:{
    base: '/TKFM-Data-Room',
    // base: '/',
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      "nuxt-i18n",
      {
          strategy: "prefix_and_default",
          detectBrowserLanguage: {
              alwaysRedirect: false,
              useCookie: true,
              cookieKey: "locale",
          },
          locales: [{
                name: "English",
                code: "en",
                iso: "en",
                file: "en.js",
            },
            {
                name: "繁體中文",
                code: "tc",
                iso: "tc",
                file: "tc.js",
            },
            {
                name: "簡體中文",
                code: "sc",
                iso: "sc",
                file: "sc.js",
            },
            {
              name: "日本語",
              code: "jp",
              iso: "jp",
              file: "jp.js",
            },
            {
              name: "한국어",
              code: "kr",
              iso: "kr",
              file: "kr.js",
            },
          ],
          langDir: "lang/",
          lazy: true,
          defaultLocale: "tc",
      },
    ],
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          background: '#424242',
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
