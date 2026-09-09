const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const cache = new Map();

// Evaluate the real feature modules, including Nuxt aliases and directory barrels.
function loadModule(filename, source = fs.readFileSync(filename, 'utf8')) {
    if (cache.has(filename)) return cache.get(filename);
    const { outputText, diagnostics } = ts.transpileModule(source, {
        fileName: filename,
        reportDiagnostics: true,
        compilerOptions: {
            target: ts.ScriptTarget.ES2018,
            module: ts.ModuleKind.CommonJS,
            esModuleInterop: true,
            experimentalDecorators: true,
        },
    });
    assert.deepEqual(diagnostics, [], `Compile ${filename}`);
    const module = { exports: {} };
    const localRequire = request => {
        const alias = request.startsWith('@/') || request.startsWith('~/');
        if (!alias && !request.startsWith('.')) return require(request);
        const resolved = alias
            ? path.join(root, request.slice(2))
            : path.resolve(path.dirname(filename), request);
        return resolved.endsWith('.vue')
            ? loadComponent(resolved)
            : loadModule(path.extname(resolved) ? resolved
                : fs.existsSync(`${resolved}.ts`) ? `${resolved}.ts` : path.join(resolved, 'index.ts'));
    };
    new Function('require', 'module', 'exports', outputText)(localRequire, module, module.exports);
    cache.set(filename, module.exports);
    return module.exports;
}

// Independent expected routing from the approved plan, never derived from IDs or catalog metadata.
const professions = {
    ATTACKER: [[40501, 40502], [40523, 40524, 40525]],
    PROTECTOR: [[40503, 40504], [40526, 40527, 40528]],
    HEALER: [[40505, 40506], [40529, 40530, 40531]],
    SUPPORTER: [[40507, 40508], [40532, 40533, 40534]],
    OBSTRUCTER: [[40509, 40510], [40535, 40536, 40537]],
};
const elements = {
    FIRE: [40513, 40514],
    WATER: [40515, 40516],
    WIND: [40517, 40518],
    LIGHT: [40519, 40520],
    DARK: [40521, 40522],
};
const keys = ['profession1', 'common', 'element', 'profession2'];
const locales = ['tc', 'sc', 'en', 'jp', 'kr'];
const catalogPath = path.join(root, 'static/data/unit/limitBreak.ts');
assert.ok(fs.existsSync(catalogPath), 'Shared limit-break catalog must exist');
const { limitBreakSkills, getLimitBreakSkillGroups } = loadModule(catalogPath);
const { Position, Element, Locale, ItemCode, ItemType } = loadModule(path.join(root, 'plugins/utils/enums.ts'));
assert.deepEqual(Object.values(Position).sort(), Object.keys(professions).sort());
assert.deepEqual(Object.values(Element).sort(), Object.keys(elements).sort());
assert.deepEqual(Object.values(Locale).sort(), [...locales].sort());
const allIds = Array.from({ length: 37 }, (_, index) => 40501 + index);
assert.deepEqual(limitBreakSkills.map(skill => skill.id).sort((a, b) => a - b), allIds);
const byId = new Map(limitBreakSkills.map(skill => [skill.id, skill]));
const reached = new Set();
for (const [position, [first, second]] of Object.entries(professions)) {
    for (const [element, elemental] of Object.entries(elements)) {
        const groups = getLimitBreakSkillGroups(Position[position], Element[element]);
        const context = `${position}/${element}`;
        assert.deepEqual(groups.map(group => group.key), keys, context);
        assert.deepEqual(groups.map(group => group.skills.length), [2, 2, 2, 3], context);
        assert.deepEqual(groups.map(group => group.skills.map(skill => skill.id)),
            [first, [40511, 40512], elemental, second], context);
        const skills = groups.flatMap(group => group.skills);
        assert.equal(new Set(skills.map(skill => skill.id)).size, 9, context);
        for (const group of groups) {
            for (const skill of group.skills) {
                reached.add(skill.id);
                assert.equal(skill, byId.get(skill.id), 'Return shared catalog entries');
                assert.equal(skill.group, group.key);
                assert.equal(skill.position, group.key.startsWith('profession') ? position : undefined);
                assert.equal(skill.element, group.key === 'element' ? element : undefined);
            }
        }
    }
}
assert.deepEqual([...reached].sort((a, b) => a - b), allIds);
for (const skill of limitBreakSkills) {
    assert.deepEqual(Object.keys(skill.skill).sort(), [...locales].sort(), `${skill.id} locales`);
    for (const locale of locales) {
        for (const field of ['name', 'description']) {
            assert.equal(typeof skill.skill[locale][field], 'string');
            assert.ok(skill.skill[locale][field].trim(), `${skill.id}/${locale}/${field}`);
        }
    }
}
for (const invalid of [undefined, null, '', 'UNKNOWN', 0, 'attacker']) {
    assert.deepEqual(getLimitBreakSkillGroups(invalid, Element.FIRE), [], 'Invalid position');
    assert.deepEqual(getLimitBreakSkillGroups(Position.ATTACKER, invalid), [], 'Invalid element');
    assert.deepEqual(getLimitBreakSkillGroups(invalid, invalid), [], 'Invalid pair');
}
const anchors = {
    40507: '我方全體造成傷害增加5.4%',
    40508: '攻擊時，觸發「以自身攻擊力3%使我方全體攻擊力增加(1回合)」',
    40511: '最大HP增加5%',
    40512: '攻擊力增加10%',
    40536: '每Wave第1回合時，觸發「使敵方全體受到普攻傷害7.5%(最多5層)」',
};
for (const [id, description] of Object.entries(anchors)) {
    assert.equal(byId.get(Number(id)).skill.tc.description, description, `Source anchor ${id}`);
}
for (const locale of locales) {
    assert.equal(byId.get(40503).skill[locale].name, byId.get(40526).skill[locale].name);
    assert.notEqual(byId.get(40503).skill[locale].description, byId.get(40526).skill[locale].description);
}
console.log('PASS catalog: 37 stable IDs, 5 locales, 25 exact mappings (2/2/2/3), shared entries, invalid inputs and source anchors');

const ItemService = loadModule(path.join(root, 'plugins/utils/components/Items.ts')).default;
const { ItemIcon } = loadModule(path.join(root, 'static/const/index.ts'));
// Exercise the real service/barrel before asserting missing additions, so RED is not a loader error.
assert.equal(ItemService.getItem(ItemCode.NAMELESS).name.en, 'Nameless Memory Crystal');
assert.equal(ItemService.getItemIcon(ItemCode.NAMELESS), 'https://cdn.tkfmdata.com/item/IP28002.png');
assert.equal(ItemService.isItemCode('NOT_AN_ITEM'), false);
assert.equal(ItemService.getItemIcon('NOT_AN_ITEM'), undefined);
assert.throws(() => ItemService.getItem('NOT_AN_ITEM'), /ITEM_NOT_FOUND/);
const expectedItems = {
    WORLD_TREE_PETAL: ['世界樹的花瓣', '世界树的花瓣', "World Tree's Petal", '世界樹の花びら', '위그드라실의 꽃잎'],
    WORLD_TREE_FLOWER: ['世界樹的花朵', '世界树的花朵', "World Tree's Flower", '世界樹の花', '위그드라실의 꽃'],
    MEMORY_CRYSTAL: ['記憶寶珠', '记忆宝珠', 'Memory Crystal', '記憶の宝玉', '기억의 보주'],
};
for (const [code, names] of Object.entries(expectedItems)) {
    assert.equal(ItemCode[code], code, `Shared item code ${code} must exist`);
    assert.equal(ItemService.isItemCode(code), true);
    const item = ItemService.getItem(code);
    assert.equal(item.type, ItemType.GENERAL);
    assert.equal(item.code, code);
    const icon = `https://cdn.tkfmdata.com/general/${code.toLowerCase()}.png`;
    assert.equal(ItemIcon[code], icon);
    assert.equal(ItemService.getItemIcon(code), icon);
    assert.equal(item.icon, icon);
    assert.deepEqual(item.name, Object.fromEntries(locales.map((locale, index) => [locale, names[index]])));
    assert.deepEqual(Object.keys(item).sort(), ['code', 'icon', 'name', 'type']);
    assert.equal(ItemService.getAllItems().filter(entry => entry.code === code).length, 1);
}
console.log('PASS items: 3 uppercase codes, GENERAL records, 15 exact source names, /general/ icons and real ItemService behavior');

const Vue = require('vue');
const Vuetify = require('vuetify');
const VueI18n = require('vue-i18n');
const compiler = require('vue-template-compiler');
const renderer = require('vue-server-renderer').createRenderer();
Vue.use(Vuetify);
Vue.use(VueI18n);
const warnings = [];
Vue.config.warnHandler = message => warnings.push(message);

function loadComponent(filename) {
    if (cache.has(filename)) return cache.get(filename);
    assert.ok(fs.existsSync(filename), 'Limit-break tab component must exist');
    const descriptor = compiler.parseComponent(fs.readFileSync(filename, 'utf8'));
    assert.deepEqual(compiler.compile(descriptor.template.content).errors, [], `Template ${filename}`);
    const component = loadModule(`${filename}.ts`, descriptor.script.content).default;
    Object.assign(component.options, compiler.compileToFunctions(descriptor.template.content));
    cache.set(filename, component);
    return component;
}

function nodes(node) {
    return node && node.type === 1 ? [node, ...node.children.flatMap(nodes)] : [];
}
function textContent(node) {
    return node.type === 1 ? node.children.map(textContent).join('') : node.text || '';
}
function parseHtml(html) {
    return compiler.compile(html, { whitespace: 'preserve' }).ast;
}

const componentPath = path.join(root, 'components/Unit/UnitTab/LimitBreakTab.vue');
const groupCardPath = path.join(root, 'components/Unit/UnitTab/LimitBreak/LimitBreakGroupCard.vue');
const skillCardPath = path.join(root, 'components/Unit/UnitTab/LimitBreak/LimitBreakSkillCard.vue');
assert.ok(fs.existsSync(groupCardPath), 'Display-only outer group card must exist');
assert.ok(fs.existsSync(skillCardPath), 'Display-only inner skill card must exist');
const LimitBreakTab = loadComponent(componentPath);
const messages = Object.fromEntries(locales.map(locale => [locale,
    loadModule(path.join(root, `lang/${locale}.js`)).default]));
for (const locale of locales) {
    for (const key of ['title', ...keys, 'empty']) {
        assert.equal(typeof messages[locale].limitBreak?.[key], 'string', `${locale}/limitBreak.${key}`);
        assert.ok(messages[locale].limitBreak[key].trim());
    }
}
assert.deepEqual(locales.map(locale => messages[locale].limitBreak.title),
    ['限界突破', '限界突破', 'Quantum Leap', '限界突破', '한계 돌파']);

function assertContent(html, position, element, locale) {
    const tree = typeof html === 'string' ? parseHtml(html) : html;
    const rendered = nodes(tree);
    const groups = rendered.filter(node => node.tag === 'section');
    assert.equal(groups.length, 4);
    assert.equal(rendered.filter(node => node.tag === 'h2').length, 4);
    assert.equal(rendered.filter(node => node.tag === 'h3').length, 9);
    const cards = rendered.filter(node => node.tag === 'article');
    assert.equal(cards.length, 9, 'Nine inner trait cards');
    for (const card of [...groups, ...cards]) {
        assert.ok(card.attrsMap.class.split(' ').includes('v-card'), 'Outer and inner Vuetify cards');
    }
    const expected = [professions[position][0], [40511, 40512], elements[element], professions[position][1]];
    groups.forEach((group, index) => {
        const children = nodes(group);
        assert.equal(textContent(children.find(node => node.tag === 'h2')).trim(), messages[locale].limitBreak[keys[index]]);
        assert.deepEqual(children.filter(node => node.tag === 'h3').map(node => textContent(node).trim()),
            expected[index].map(id => byId.get(id).skill[locale].name));
        assert.deepEqual(children.filter(node => node.tag === 'p').map(node => textContent(node).trim()),
            expected[index].map(id => byId.get(id).skill[locale].description));
        const icon = index === 1 ? 'world_tree_petal'
            : index === 2 ? `element_${element.toLowerCase()}` : `position_${position.toLowerCase()}`;
        assert.deepEqual(children.filter(node => node.tag === 'img').map(node => node.attrsMap.src),
            ['world_tree_flower', ...expected[index].map(() => icon)].map(name => `https://cdn.tkfmdata.com/general/${name}.png`));
        assert.equal(children.filter(node => node.tag === 'header').length, expected[index].length + 1);
        const groupHeading = children.find(node => node.tag === 'h2');
        assert.equal(groupHeading.parent.tag, 'header');
        for (const heading of children.filter(node => node.tag === 'h3')) {
            assert.equal(heading.parent.tag, 'header');
            assert.match(heading.parent.attrsMap.style, /background-color:\s*#f0b023/);
        }
    });
    const images = rendered.filter(node => node.tag === 'img');
    assert.equal(images.length, 13);
    for (const image of images) {
        assert.equal(image.attrsMap.alt, '');
        assert.equal(image.attrsMap['aria-hidden'], 'true');
        assert.equal(image.attrsMap.width, '24');
        assert.equal(image.attrsMap.height, '24');
        assert.match(image.attrsMap.style, /object-fit:\s*contain/);
    }
    assert.ok(!rendered.some(node => ['button', 'input', 'select', 'a', 'details'].includes(node.tag)), 'Static, expanded content');
    assert.ok(!rendered.some(node => ['button', 'radio', 'checkbox'].includes(node.attrsMap.role)), 'No equip-like controls');
    assert.ok(!/\b405\d{2}\b|Lv\.?\s*\d|\bunlock\b|\bequip\b/i.test(textContent(tree)), 'No debug IDs or speculative game UI');
}

async function checkUI() {
    const i18n = new VueI18n({ locale: 'tc', fallbackLocale: 'tc', messages });
    const vuetify = new Vuetify();
    const vm = new LimitBreakTab({ i18n, vuetify, propsData: { unit: { position: 'ATTACKER', element: 'FIRE' } } });
    // Reuse the same instance so cached options or locale text cannot pass as reactive behavior.
    for (const [index, position] of Object.keys(professions).entries()) {
        const element = Object.keys(elements)[index];
        // In Nuxt the owning page supplies an observed unit through this prop.
        vm.unit = Vue.observable({ position, element });
        for (const locale of locales) {
            i18n.locale = locale;
            await Vue.nextTick();
            assertContent(await renderer.renderToString(vm), position, element, locale);
        }
    }
    vm.unit.position = 'ATTACKER';
    vm.unit.element = 'FIRE';
    await Vue.nextTick();
    assertContent(await renderer.renderToString(vm), 'ATTACKER', 'FIRE', 'kr');
    for (const locale of locales) {
        i18n.locale = locale;
        for (const unit of [{}, { position: 'UNKNOWN', element: 'FIRE' }, { position: 'ATTACKER', element: 'UNKNOWN' }]) {
            vm.unit = unit;
            await Vue.nextTick();
            const html = await renderer.renderToString(vm);
            assert.equal(textContent(parseHtml(html)).trim(), messages[locale].limitBreak.empty);
            assert.equal(nodes(parseHtml(html)).filter(node => node.tag === 'h3').length, 0);
        }
    }
    // Prove Vue escapes source strings rather than interpreting them as markup.
    vm.unit = { position: 'ATTACKER', element: 'FIRE' };
    i18n.locale = 'tc';
    const original = byId.get(40501).skill.tc;
    byId.get(40501).skill.tc = { name: '<img src=x onerror=alert(1)>', description: '<script>alert(1)</script>\nsecond line' };
    try {
        const html = await renderer.renderToString(vm);
        assert.ok(html.includes('&lt;img src=x onerror=alert(1)&gt;'));
        assert.ok(html.includes('&lt;script&gt;alert(1)&lt;/script&gt;\nsecond line'));
        const rendered = nodes(parseHtml(html));
        assert.equal(rendered.filter(node => node.tag === 'img').length, 13, 'Only intentional decorative icons');
        assert.ok(!rendered.some(node => node.tag === 'script' || node.attrsMap.src === 'x'
            || Object.keys(node.attrsMap).some(attribute => /^on/i.test(attribute))));
    } finally {
        byId.get(40501).skill.tc = original;
    }
    const descriptor = compiler.parseComponent(fs.readFileSync(componentPath, 'utf8'));
    const featureNodes = nodes(compiler.compile(descriptor.template.content).ast);
    assert.ok(featureNodes.some(node => node.attrsMap[':key'] === 'skill.id'), 'Numeric skill keys');
    assert.ok(!featureNodes.some(node => 'v-html' in node.attrsMap), 'Plain interpolation');
    for (const cardPath of [groupCardPath, skillCardPath]) {
        const card = compiler.parseComponent(fs.readFileSync(cardPath, 'utf8'));
        const cardNodes = nodes(compiler.compile(card.template.content).ast);
        assert.ok(!cardNodes.some(node => 'v-html' in node.attrsMap), 'Plain card interpolation');
        assert.ok(!cardNodes.some(node => Object.keys(node.attrsMap).some(attribute => attribute.startsWith('@'))), 'Display-only cards');
    }
    const skillCard = compiler.parseComponent(fs.readFileSync(skillCardPath, 'utf8'));
    assert.match(skillCard.styles.map(style => style.content).join('\n'), /white-space:\s*pre-wrap/);
    vm.$destroy();

    const unitTabPath = path.join(root, 'components/Unit/UnitTab/UnitTab.vue');
    const template = compiler.parseComponent(fs.readFileSync(unitTabPath, 'utf8')).template.content;
    const integration = compiler.compile(template).ast;
    const tabBar = integration.children.find(node => node.tag === 'v-tabs');
    const panels = integration.children.find(node => node.tag === 'v-tabs-items');
    assert.equal(tabBar.attrsMap['v-model'], 'activeTab');
    assert.equal(panels.attrsMap['v-model'], 'activeTab');
    const expectedTabs = [
        ['General Information', 'general-tab', undefined],
        ['Skill Set', 'skill-set-tab', undefined],
        ['limitBreak.title', 'limit-break-tab', undefined],
        ['Liberation', 'liberation-tab', 'isLiberate'],
        ['Stat Calculator', 'stat-cal-tab', undefined],
        ['Discipline', 'discipline-tab', 'isDiscipline'],
        ['Puzzle', 'puzzle-tab', 'isPuzzle'],
        ['Voice', 'voice-tab', undefined],
        ['Other Form', 'other-version-tab', 'isOtherVersion'],
    ];
    const tabs = tabBar.children.filter(node => node.tag === 'v-tab');
    const items = panels.children.filter(node => node.tag === 'v-tab-item');
    assert.equal(tabs.length, expectedTabs.length);
    assert.equal(items.length, expectedTabs.length);
    expectedTabs.forEach(([label, panel, condition], index) => {
        assert.equal(textContent(tabs[index]).match(/\$t\('([^']+)'\)/)?.[1], label);
        assert.equal(tabs[index].attrsMap['v-if'], condition);
        assert.equal(items[index].attrsMap['v-if'], condition);
        assert.equal(items[index].children.find(node => node.type === 1).tag, panel);
        assert.equal(items[index].children.find(node => node.type === 1).attrsMap[':unit'], 'unit');
        assert.equal(items[index].attrsMap.id, undefined, 'Keep Vuetify numeric panel selection');
    });

    // Unrelated panels need Nuxt utilities/data. Isolate only those; render real UnitTab,
    // LimitBreakTab, i18n and Vuetify tabs/cards, including the actual panel association.
    for (const name of ['GeneralTab', 'SkillSetTab', 'LiberationTab', 'DisciplineTab', 'PotentialTab',
        'StatCalTab', 'PuzzleTab', 'VoiceTab', 'OtherVersionTab', 'AnalysisTab']) {
        cache.set(path.join(path.dirname(unitTabPath), `${name}.vue`), Vue.extend({ render: h => h('div') }));
    }
    const UnitTab = loadComponent(unitTabPath);
    for (const optional of [false, true]) {
        const unit = { position: 'PROTECTOR', element: 'WATER',
            ...Object.fromEntries(['liberateSkillSet', 'discipline', 'puzzle', 'otherVersion'].map(key => [key, optional ? [{}] : []])) };
        for (const locale of locales) {
            i18n.locale = locale;
            const parent = new UnitTab({ i18n, vuetify, propsData: { unit } });
            parent.activeTab = 2;
            const html = await renderer.renderToString(parent);
            const rendered = nodes(parseHtml(html));
            const renderedTabs = rendered.filter(node => node.attrsMap.role === 'tab');
            assert.deepEqual(renderedTabs.map(node => textContent(node).trim()),
                expectedTabs.filter(([, , condition]) => optional || !condition).map(([label]) => String(i18n.t(label))));
            const tab = rendered.find(node => node.attrsMap.id === 'unit-limit-break-tab');
            const panel = rendered.find(node => node.attrsMap.id === 'unit-limit-break-panel');
            assert.ok(tab && panel, 'Render labelled tab and panel');
            assert.equal(rendered.filter(node => node.attrsMap.id === 'unit-limit-break-tab').length, 1);
            assert.equal(rendered.filter(node => node.attrsMap.id === 'unit-limit-break-panel').length, 1);
            assert.equal(tab.attrsMap['aria-controls'], panel.attrsMap.id);
            assert.equal(panel.attrsMap['aria-labelledby'], tab.attrsMap.id);
            assert.equal(tab.attrsMap.role, 'tab');
            assert.equal(tab.attrsMap['aria-selected'], 'true', 'Numeric index 2 selects Limit Break');
            assert.equal(panel.attrsMap.role, 'tabpanel');
            assertContent(panel, unit.position, unit.element, locale);
            assert.equal(nodes(panel).filter(node => node.tag === 'h3').length, 9);
            parent.$destroy();
        }
    }
    assert.deepEqual(warnings, [], 'No Vue runtime warnings');
    console.log('PASS UI: actual Vue/Vuetify SSR, 25 locale/unit examples, 4 outer/9 inner cards, 13 decorative icons, full source text, Quantum Leap EN title, reactivity, empty states, escaped text, tab order/conditionals and ARIA association');
    console.log('SSR checks do not verify browser layout, keyboard/focus behavior, contrast or assistive technology.');
}

checkUI().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
