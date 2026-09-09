const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const Vue = require('vue');
const compiler = require('vue-template-compiler');
const root = path.resolve(__dirname, '..');
const cache = new Map();

// Local, installed-tool loader; calculator services and components are never stubbed.
function load(filename, source) {
    if (cache.has(filename)) return cache.get(filename);
    source = source ?? fs.readFileSync(filename, 'utf8');
    if (filename.endsWith('.vue')) {
        const sfc = compiler.parseComponent(source);
        assert.deepEqual(compiler.compile(sfc.template.content).errors, [], filename);
        const component = load(`${filename}.ts`, sfc.script.content).default;
        Object.assign(component.options, compiler.compileToFunctions(sfc.template.content));
        cache.set(filename, { __esModule: true, default: component });
        return cache.get(filename);
    }
    const compiled = ts.transpileModule(source, {
        fileName: filename, reportDiagnostics: true,
        compilerOptions: { target: ts.ScriptTarget.ES2018, module: ts.ModuleKind.CommonJS,
            esModuleInterop: true, experimentalDecorators: true },
    });
    assert.deepEqual(compiled.diagnostics, [], filename);
    const module = { exports: {} };
    const localRequire = request => {
        const alias = request.startsWith('@/') || request.startsWith('~/');
        if (!alias && !request.startsWith('.')) return require(request);
        const resolved = alias ? path.join(root, request.slice(2)) : path.resolve(path.dirname(filename), request);
        return load(path.extname(resolved) ? resolved : fs.existsSync(`${resolved}.ts`)
            ? `${resolved}.ts` : path.join(resolved, 'index.ts'));
    };
    new Function('require', 'module', 'exports', compiled.outputText)(localRequire, module, module.exports);
    cache.set(filename, module.exports);
    return module.exports;
}
const real = relative => load(path.join(root, relative));
const General = real('plugins/utils/components/StatCal/General.ts').default;
const Potential = real('plugins/utils/components/StatCal/Potential.ts').default;
const Items = real('plugins/utils/components/Items.ts').default;
const { ItemCode, ItemType, PotentialType, Rarity, Element } = real('plugins/utils/enums.ts');
const unit = { initHP: 3612.8, initATK: 1022.4, rarity: Rarity.SSR, potential: PotentialType.ATTACK,
    element: Element.FIRE, discipline: [], liberateSkillSet: [], essence: 'fixture-essence' };
assert.equal(General.getCalculateStat(unit, General.getInitStatGroup(unit), 'HP'), 3612);
assert.equal(Items.getItem(ItemCode.EXP_LV1).usageValue, 200);
console.log('PASS setup: real existing General/Potential/ItemService modules loaded and exercised');

const servicePath = path.join(root, 'plugins/utils/components/StatCal/LimitBreak.ts');
assert.ok(fs.existsSync(servicePath), 'ELv calculation service must exist');
const LB = load(servicePath).default;
const { limitBreakLevels, limitBreakGroups } = real('static/data/stat/limitBreak.ts');
const StatCal = real('plugins/utils/components/StatCal/index.ts').default;
const flags = () => [false, false, false, false];
const state = (elv = 0, groups = flags()) => ({ elv, groups: [...groups] });
const snapshot = (elv = 0, groups = flags()) => ({ ...General.getInitStatGroup(unit), level: 60,
    pot: { level: 6, slot: Array(6).fill(false) }, limitBreak: state(elv, groups) });
const hp = [0,0,0.6,0.6,1.2,1.2,1.2,1.8,1.8,2.4,2.4,2.4,3.2,3.2,4,4,4,5,5,6,6];
const atk = [0,0.6,0.6,1.2,1.2,1.2,1.8,1.8,2.4,2.4,2.4,3.2,3.2,4,4,4,5,5,6,6,6];
const cumulative = [0,250,500,750,1000,1250,1750,2250,2750,3250,3750,4500,5250,6000,6750,7500,8500,9500,10500,11500,12500];
assert.equal(limitBreakLevels.length, 21);
limitBreakLevels.forEach((row, elv) => assert.deepEqual(row, { elv,
    exp: elv === 0 ? 0 : elv <= 5 ? 250 : elv <= 10 ? 500 : elv <= 15 ? 750 : 1000,
    hpPercent: hp[elv], atkPercent: atk[elv] }));
assert.deepEqual(limitBreakGroups, [
    { key: 'profession1', gate: 5, flowers: 1 }, { key: 'common', gate: 10, flowers: 1 },
    { key: 'element', gate: 15, flowers: 2 }, { key: 'profession2', gate: 20, flowers: 2 },
]);
const initialized = General.getInitStatGroup(unit);
assert.deepEqual(initialized.limitBreak, state());
assert.notEqual(initialized.limitBreak.groups, General.getInitStatGroup(unit).limitBreak.groups);
const StatCalTab = real('components/Unit/UnitTab/StatCalTab.vue').default;
const initializedTab = new StatCalTab({ propsData: { unit } });
assert.deepEqual(initializedTab.currentStat.limitBreak, state());
assert.deepEqual(initializedTab.targetStat.limitBreak, state());
assert.notEqual(initializedTab.currentStat.limitBreak.groups, initializedTab.targetStat.limitBreak.groups);
initializedTab.$destroy();

for (const [level, potLevel, slot, eligible] of [
    [59,6,Array(6).fill(true),false], [60,5,[true,true,true,true,true,false],false],
    [60,5,Array(6).fill(true),true], [60,6,Array(6).fill(false),true],
    [60,5,[],false], [60,5,Array(7).fill(true),false], [60,4,Array(6).fill(true),false],
]) {
    const stat = { ...snapshot(20, Array(4).fill(true)), level, pot: { level: potLevel, slot } };
    assert.equal(LB.isLimitBreakEligible(stat), eligible);
    assert.equal(LB.getNormalizedLimitBreak(stat).elv, eligible ? 20 : 0);
    assert.equal(LB.getLimitBreakStatMultiplier(stat, 'HP'), eligible ? 1.06 : 1);
}
assert.deepEqual(LB.getNormalizedLimitBreak({ ...snapshot(), limitBreak: undefined }), state());
for (const elv of [-1, 21, 1.5, NaN, Infinity, null, undefined, '20']) {
    assert.deepEqual(LB.getNormalizedLimitBreak(snapshot(elv, Array(4).fill(true))), state());
}
for (let elv = 0; elv <= 20; elv++) {
    const stat = snapshot(elv, Array(4).fill(true));
    const normalized = LB.getNormalizedLimitBreak(stat);
    assert.deepEqual(normalized.groups, [5,10,15,20].map(gate => elv >= gate));
    assert.deepEqual(LB.getNormalizedLimitBreak({ ...stat, limitBreak: normalized }), normalized, 'Idempotent normalization');
    assert.notEqual(normalized.groups, stat.limitBreak.groups, 'Clone arrays');
    assert.equal(LB.getLimitBreakStatMultiplier(stat, 'HP'), 1 + hp[elv] / 100);
    assert.equal(LB.getLimitBreakStatMultiplier(stat, 'ATK'), 1 + atk[elv] / 100);
    assert.equal(LB.getCalculatedLimitBreakResult(snapshot(), snapshot(elv)).exp, cumulative[elv]);
}
const owned = snapshot(10, [true,true,false,false]);
assert.deepEqual(LB.getNormalizedLimitBreak(snapshot(5), owned), state(10,[true,true,false,false]));
assert.deepEqual(LB.getNormalizedLimitBreak(snapshot(15,[false,false,true,false]), owned), state(15,[true,true,true,false]));
assert.deepEqual(LB.getNormalizedLimitBreak({ ...snapshot(20), level: 59 }, owned), state(), 'Own eligibility first');

function sixFactorProduct(stat, type) {
    const pot = Potential.getCalculatedPotResult(Potential.getPotential(unit.potential),
        { level: 1, slot: Array(6).fill(false) }, stat.pot, false).statSummary.find(row => row.code === type)?.value ?? 0;
    return stat[type === 'HP' ? 'initHP' : 'initATK'] * 1.1 ** (stat.level - 1)
        * (stat.lib !== null && stat.lib > 1 ? 1.1 : 1)
        * ((1 + 0.2 * stat.star) / (1 + 0.2 * stat.initStar))
        * ([1,1.05,1.15,1.3][stat.room ?? 0]) * (1 + pot / 100);
}
for (const stat of [General.getInitStatGroup(unit), snapshot(),
    { ...snapshot(), star: 5, lib: 3, room: 3, pot: { level: 5, slot: Array(6).fill(true) } }]) {
    for (const type of ['HP','ATK']) {
        assert.equal(General.getCalculateStat(unit, stat, type), Math.floor(sixFactorProduct(stat, type)), 'ELv0 preserves six-factor result');
        for (let elv = 0; elv <= 20; elv++) {
            const updated = { ...stat, limitBreak: state(elv) };
            const percent = LB.isLimitBreakEligible(stat) ? (type === 'HP' ? hp[elv] : atk[elv]) : 0;
            const expected = Math.floor(sixFactorProduct(stat, type) * (1 + percent / 100));
            assert.equal(General.getCalculateStat(unit, updated, type), expected);
            updated.limitBreak.groups.fill(true);
            assert.equal(General.getCalculateStat(unit, updated, type), expected, 'Flowers never affect white stats');
        }
    }
}
// Representative fractional baselines within the experiment's fit intervals, not a real unit identity.
const observedHP = [1466383,1466383,1475181,1475181,1483980,1483980,1483980,1492778,1492778,1501576,1501576,1501576,1513307,1513307,1525038,1525038,1525038,1539702,1539702,1554366,1554366];
const observedATK = [380382,382665,382665,384947,384947,384947,387229,387229,389512,389512,389512,392555,392555,395598,395598,395598,399401,399401,403205,403205,403205];
const experiment = snapshot();
experiment.initHP = 1466383.5 / (sixFactorProduct(experiment, 'HP') / experiment.initHP);
experiment.initATK = 380382.83 / (sixFactorProduct(experiment, 'ATK') / experiment.initATK);
for (let elv = 0; elv <= 20; elv++) {
    experiment.limitBreak.elv = elv;
    assert.equal(General.getCalculateStat(unit, experiment, 'HP'), observedHP[elv]);
    assert.equal(General.getCalculateStat(unit, experiment, 'ATK'), observedATK[elv]);
}
assert.notEqual(Math.floor(observedHP[0] * 1.012), observedHP[4], 'Detect premature flooring');
assert.notEqual(Math.floor(observedATK[0] * 1.006), observedATK[1], 'Detect premature flooring');

const qty = entries => entries.map(([code, quantity]) => ({ code, quantity }));
const costs = (current, target) => LB.getCalculatedLimitBreakResult(current, target).summary;
assert.deepEqual(costs(snapshot(), snapshot(1)), qty([['MEMORY_CRYSTAL',30],['QUANTUM_LEAP_POTION',3]]));
assert.deepEqual(costs(snapshot(), snapshot(2)), qty([['MEMORY_CRYSTAL',30],['QUANTUM_LEAP_POTION',5]]));
assert.deepEqual(costs(snapshot(1), snapshot(20)), qty([['QUANTUM_LEAP_POTION',123]]));
assert.deepEqual(costs(snapshot(), snapshot(20,Array(4).fill(true))), qty([['MEMORY_CRYSTAL',30],['WORLD_TREE_FLOWER',6],['QUANTUM_LEAP_POTION',125]]));
assert.deepEqual(costs(snapshot(20), snapshot(20,[false,false,true,true])), qty([['WORLD_TREE_FLOWER',4]]));
assert.deepEqual(costs(snapshot(20,Array(4).fill(true)), snapshot(20,Array(4).fill(true))), []);
assert.deepEqual(costs(snapshot(20), snapshot(10,Array(4).fill(true))), [], 'Downgrades do not charge');
assert.deepEqual(costs(snapshot(), { ...snapshot(20,Array(4).fill(true)), level: 59 }), []);
assert.deepEqual(costs({ ...snapshot(20,Array(4).fill(true)), level: 59 }, snapshot(1)), qty([['MEMORY_CRYSTAL',30],['QUANTUM_LEAP_POTION',3]]));
assert.deepEqual(costs(snapshot(4), snapshot(4,Array(4).fill(true))), []);
assert.deepEqual(costs(snapshot(-1), snapshot(-2,Array(4).fill(true))), []);
assert.equal(StatCal.getCalculatedLimitBreakResult, LB.getCalculatedLimitBreakResult, 'Existing utility exposes real service');
assert.equal(ItemCode.QUANTUM_LEAP_POTION, 'QUANTUM_LEAP_POTION');
assert.deepEqual(Items.getItem(ItemCode.QUANTUM_LEAP_POTION), {
    code: 'QUANTUM_LEAP_POTION', type: ItemType.GENERAL,
    icon: 'https://cdn.tkfmdata.com/general/quantum_leap_potion.png', usageValue: 100,
    name: { tc: '限界突破藥水', sc: '限界突破药水', en: 'Quantum Leap Potion', jp: '限界突破ポーション', kr: '한계 돌파 포션' },
});
assert.equal(Items.isItemCode('QUANTUM_LEAP_POTION'), true);
assert.equal(Items.getItemIcon('QUANTUM_LEAP_POTION'), 'https://cdn.tkfmdata.com/general/quantum_leap_potion.png');
console.log('PASS ELv: 21 rows, eligibility/gates/ownership, initialized independent states, seven-factor final floor, 42 experiment fits, differential costs and real potion registration');

const Vuetify = require('vuetify');
const VueI18n = require('vue-i18n');
const renderer = require('vue-server-renderer').createRenderer();
Vue.use(Vuetify);
Vue.use(VueI18n);
Vue.prototype.$util = { ...StatCal, ...Items,
    deepClone: value => JSON.parse(JSON.stringify(value)),
    formatNumberWithCommas: value => Number(value).toLocaleString('en-US'),
    getValueByBreakPoint: (name, xs, sm, md, lg, xl) => ({ xs, sm, md, lg, xl }[name] ?? xs),
};
// These existing components hide their templates until mounted. Invoke their actual
// DOM-free mounted hooks for Node SSR; this does not simulate browser lifecycle/interaction.
Vue.mixin({ created() {
    if (['StatBox', 'StatSelection', 'StatCalTab'].includes(this.$options.name)) {
        for (const mounted of this.$options.mounted ?? []) mounted.call(this);
    }
} });
const warnings = [];
Vue.config.warnHandler = warning => warnings.push(warning);
const locales = ['tc','sc','en','jp','kr'];
const messages = Object.fromEntries(locales.map(locale => [locale, real(`lang/${locale}.js`).default]));
const i18n = new VueI18n({ locale: 'en', fallbackLocale: 'en', messages });
const vuetify = new Vuetify({ theme: { dark: true } });
const StatBox = real('components/Unit/UnitTab/StatCal/StatBox.vue').default;
const StatSelection = real('components/Unit/UnitTab/StatCal/StatSelection.vue').default;
const CalculatedResult = real('components/Unit/UnitTab/StatCal/CalculatedResult.vue').default;
const potentialData = Potential.getPotential(unit.potential);
const options = { levelOptions: Array.from({length:60},(_,i)=>i+1), libOptions: [0,1,2,3],
    starOptions: [3,4,5], roomOptions: [0,1,2,3], potLevelOptions: potentialData.detail.map((_,i)=>i+1) };
const observable = value => Vue.observable(value);
const box = (type, stat, compareStat) => new StatBox({ i18n, vuetify,
    propsData: { unit, type, stat, compareStat, potentialData, ...options } });
const selection = (currentStat, targetStat) => new StatSelection({ i18n, vuetify,
    propsData: { unit, potentialData, currentStat, targetStat } });
const tick = async () => { await Vue.nextTick(); await Vue.nextTick(); };
function nodes(node) { return node?.type === 1 ? [node, ...node.children.flatMap(nodes)] : []; }
function textContent(node) { return node.type === 1 ? node.children.map(textContent).join('') : node.text ?? ''; }
const renderedNodes = html => nodes(compiler.compile(html, { whitespace: 'preserve' }).ast);
const byID = (list, id) => list.find(node => node.attrsMap.id === id);
function column(node) {
    while (node && !/(^|\s)col(?:-|\s|$)/.test(node.attrsMap.class ?? '')) node = node.parent;
    assert.ok(node, 'Control belongs to a grid column');
    return node;
}

async function checkCalculatorUI() {
    const current = observable(General.getInitStatGroup(unit));
    const target = observable(snapshot());
    const pair = selection(current, target);
    const currentBox = box('CURRENT', current, target);
    const targetBox = box('TARGET', target, current);
    let html = await renderer.renderToString(targetBox);
    assert.ok(byID(renderedNodes(html), 'limit-break-target-elv'), 'Eligible calculator must render ELv selector');
    assert.ok(!byID(renderedNodes(await renderer.renderToString(currentBox)), 'limit-break-current-elv'));
    assert.deepEqual(targetBox.limitBreakLevelOptions, Array.from({length:21},(_,i)=>i));

    for (const [component, eligible] of [[currentBox, false], [targetBox, true]]) {
        const list = renderedNodes(await renderer.renderToString(component));
        const potential = column(list.find(node => node.tag === 'label' && textContent(node).trim() === i18n.t('Potential')));
        const buttons = list.filter(node => node.tag === 'button' && [i18n.t('Min'), i18n.t('Max')].includes(textContent(node).trim()));
        assert.equal(buttons.length, 2, 'One Min/Max pair');
        const actions = column(buttons[0]);
        assert.equal(column(buttons[1]), actions);
        assert.equal(actions.parent, potential.parent);
        assert.ok(actions.attrsMap.class.includes('col-md-12'), 'Preserve original Min/Max md stacking');
        for (const size of ['sm', 'md', 'lg'])
            assert.ok(potential.attrsMap.class.includes(`col-${size}-${size === 'md' && !eligible ? 12 : 6}`), 'Potential retains hidden-state widths and shares eligible row equally');
        for (const size of ['sm', 'lg', 'xl'])
            assert.ok(actions.attrsMap.class.includes(`col-${size}-${eligible ? 12 : 6}`), 'Min/Max moves to a full-width row only when ELv is shown');
        if (eligible) {
            const elv = column(byID(list, 'limit-break-target-elv'));
            assert.equal(elv.parent, potential.parent, 'Potential and ELv share a row');
            assert.ok(list.indexOf(potential) < list.indexOf(elv) && list.indexOf(elv) < list.indexOf(actions));
            for (const size of ['sm', 'md', 'lg']) assert.ok(elv.attrsMap.class.includes(`col-${size}-6`));
            assert.equal(column(byID(list, 'limit-break-target-groups')), elv, 'ELv purchases sit beneath their selector');
        } else assert.ok(list.indexOf(potential) < list.indexOf(actions));
    }

    for (const locale of locales) {
        i18n.locale = locale;
        for (const key of ['elv','groups','groupCost']) assert.equal(typeof messages[locale].limitBreak[key], 'string');
        html = await renderer.renderToString(targetBox);
        const list = renderedNodes(html);
        assert.ok(list.some(node => node.tag === 'label' && node.attrsMap.for === 'limit-break-target-elv'
            && textContent(node).trim() === messages[locale].limitBreak.elv));
        const fieldset = byID(list, 'limit-break-target-groups');
        assert.equal(fieldset.tag, 'fieldset');
        assert.equal(fieldset.attrsMap['aria-label'], messages[locale].limitBreak.groups);
        assert.equal(textContent(fieldset).trim(), '', 'Group heading and long purchase labels are not visible');
        const checkboxes = nodes(fieldset).filter(node => node.tag === 'input' && node.attrsMap.type === 'checkbox');
        assert.deepEqual(checkboxes.map(node => node.attrsMap.id), limitBreakGroups.map(group => `limit-break-target-${group.key}`));
        assert.ok(nodes(fieldset).some(node => /\bml-8\b/.test(node.attrsMap.class ?? '') && /\brow\b/.test(node.attrsMap.class ?? '')), 'Compact checkbox row uses potential spacing');
        limitBreakGroups.forEach(group => {
            const id = `limit-break-target-${group.key}`;
            assert.equal(byID(list, id).attrsMap['aria-label'], String(i18n.t('limitBreak.groupCost', {
                group: i18n.t(`limitBreak.${group.key}`), elv: group.gate, flowers: group.flowers })));
            assert.ok('disabled' in byID(list, id).attrsMap);
        });
        assert.ok(!nodes(fieldset).some(node => node.attrsMap.role === 'switch'), 'No common-stat switch');
    }

    for (const [below, gate] of [[4,5],[9,10],[14,15],[19,20]]) {
        target.limitBreak.elv = below;
        await tick();
        let list = renderedNodes(await renderer.renderToString(targetBox));
        const index = [5,10,15,20].indexOf(gate);
        const id = `limit-break-target-${limitBreakGroups[index].key}`;
        assert.ok('disabled' in byID(list,id).attrsMap);
        target.limitBreak.elv = gate;
        await tick();
        list = renderedNodes(await renderer.renderToString(targetBox));
        assert.ok(!('disabled' in byID(list,id).attrsMap));
        assert.equal(target.limitBreak.groups[index], false, 'A gate enables without purchasing');
        Vue.set(target.limitBreak.groups,index,true);
        await tick();
        target.limitBreak.elv = below;
        await tick();
        assert.equal(target.limitBreak.groups[index], false, 'Lower ELv clears invalid purchase');
    }
    target.limitBreak = state(20,Array(4).fill(true));
    target.level = 59;
    await tick();
    assert.deepEqual(target.limitBreak,state());
    assert.ok(!byID(renderedNodes(await renderer.renderToString(targetBox)),'limit-break-target-elv'));
    target.level = 60;
    target.pot = { level: 5, slot: [true,true,true,true,true,false] };
    await tick();
    assert.ok(!byID(renderedNodes(await renderer.renderToString(targetBox)),'limit-break-target-elv'));
    Vue.set(target.pot.slot,5,true);
    await tick();
    assert.ok(byID(renderedNodes(await renderer.renderToString(targetBox)),'limit-break-target-elv'));

    current.level = 60;
    current.pot = { level: 5, slot: [true,true,true,true,true,false] };
    target.pot = { level: 5, slot: [true,true,true,true,true,false] };
    await tick();
    assert.equal(LB.isLimitBreakEligible(target),false);
    // Prime the actual target UI getter before the sixth current slot changes.
    await renderer.renderToString(targetBox);
    Vue.set(current.pot.slot,5,true);
    current.limitBreak = state(10,[true,true,false,false]);
    await tick();
    assert.equal(target.pot.slot[5],true,'Sixth owned potential slot propagates');
    assert.deepEqual(target.limitBreak,state(10,[true,true,false,false]));
    assert.notEqual(target.pot.slot,current.pot.slot);
    assert.notEqual(target.limitBreak.groups,current.limitBreak.groups);
    assert.equal(targetBox.limitBreakLevelOptions[0],10);
    html = await renderer.renderToString(pair);
    const ids = renderedNodes(html).map(node=>node.attrsMap.id).filter(id=>id?.startsWith('limit-break-'));
    assert.equal(ids.length,12,'Two uniquely named ELv inputs, groups and four purchases each');
    assert.equal(new Set(ids).size,ids.length);

    target.limitBreak = state(20,[true,true,false,true]);
    await tick();
    target.limitBreak.elv = 15;
    await tick();
    assert.deepEqual(target.limitBreak,state(15,[true,true,false,false]),'Retain valid owned flags on target ELv change');
    target.limitBreak.elv = 20;
    Vue.set(target.limitBreak.groups,0,false);
    await tick();
    assert.deepEqual(target.limitBreak,state(20,[true,true,false,false]),'No unpurchase or automatic re-purchase');
    assert.deepEqual(costs(current,target),qty([['QUANTUM_LEAP_POTION',88]]),'Owned flowers never charged twice');
    target.limitBreak.elv = 1;
    await tick();
    assert.deepEqual(target.limitBreak,state(10,[true,true,false,false]));
    targetBox.getMinStat();
    await tick();
    assert.deepEqual(target.limitBreak,current.limitBreak);
    assert.notEqual(target.limitBreak.groups,current.limitBreak.groups);
    currentBox.getMaxStat();
    await tick();
    assert.deepEqual(current.limitBreak,state(20,Array(4).fill(true)));
    assert.deepEqual(target.limitBreak,current.limitBreak);
    currentBox.getMinStat();
    await tick();
    assert.deepEqual(current.limitBreak,state());
    assert.deepEqual(target.limitBreak,state(20,Array(4).fill(true)),'Independently eligible target preserved');
    targetBox.getMinStat();
    await tick();
    assert.deepEqual(target.limitBreak,state());
    targetBox.getMaxStat();
    await tick();
    assert.deepEqual(target.limitBreak,state(20,Array(4).fill(true)));
    pair.$destroy(); currentBox.$destroy(); targetBox.$destroy();

    const tab = new StatCalTab({ i18n, vuetify, propsData: { unit } });
    tab.currentStat = observable(snapshot(20));
    tab.targetStat = observable(snapshot(20));
    await tick();
    assert.equal(tab.isCalculated,false);
    Vue.set(tab.targetStat.limitBreak.groups,2,true);
    await tick();
    assert.equal(tab.isCalculated,true,'Flowers-only changes reveal all result paths');
    assert.deepEqual(tab.calculatedLimitBreakResult,{exp:0,summary:qty([['WORLD_TREE_FLOWER',2]])});
    for (const locale of locales) {
        i18n.locale = locale;
        html = await renderer.renderToString(tab);
        const list = renderedNodes(html);
        assert.ok(list.some(node=>node.tag==='h3' && textContent(node).trim()===i18n.t('limitBreak.title')));
        assert.ok(html.includes(Items.getItem('WORLD_TREE_FLOWER').name[locale]));
        assert.ok(html.includes('mdi-creation'));
    }
    const summary = LB.getCalculatedLimitBreakResult(snapshot(),snapshot(20,Array(4).fill(true)));
    const results = new CalculatedResult({ i18n,vuetify, propsData: {
        levelSummary:{exp:0,summary:[]},libSummary:{summary:[]},starSummary:{summary:[]},roomSummary:{exp:0,summary:[]},
        potSummary:{summary:[],statSummary:[]},limitBreakSummary:summary,showTotal:false,showCombined:false,
    } });
    assert.deepEqual(results.totalData,summary.summary);
    assert.deepEqual(results.totalOtherTypeData.map(item=>item.code),['MEMORY_CRYSTAL','QUANTUM_LEAP_POTION','WORLD_TREE_FLOWER']);
    const ItemSetBox = real('components/Unit/UnitTab/StatCal/ResultBox/ItemSetBox.vue').default;
    const itemBox = new ItemSetBox({i18n,vuetify,propsData:{summary:summary.summary}});
    for (const item of summary.summary) assert.equal(itemBox.showMaterialIcon(item),Items.getItemIcon(item.code));
    for (const locale of locales) {
        i18n.locale=locale;
        const grouped = renderedNodes(await renderer.renderToString(results));
        const text = grouped.map(node=>node.tag==='span'?textContent(node):'').join(' ');
        const names = summary.summary.map(item=>Items.getItem(item.code).name[locale]);
        assert.ok(text.indexOf(names[0])<text.indexOf(names[1]) && text.indexOf(names[1])<text.indexOf(names[2]));
        for (const item of summary.summary) assert.equal(itemBox.showMaterialText(item),Items.getItem(item.code).name[locale]);
        results.showTotal=true;
        await tick();
        const totalHTML=await renderer.renderToString(results);
        for (const name of names) assert.ok(totalHTML.includes(name));
        results.showTotal=false;
    }
    results.potSummary={summary:qty([['MEMORY_CRYSTAL',2]]),statSummary:[]};
    await tick();
    assert.equal(results.totalData.find(item=>item.code==='MEMORY_CRYSTAL').quantity,32,'Total merges by item code');
    const nextUnit={...unit,initHP:4000.1,potential:PotentialType.DEFENCE};
    tab.unit=nextUnit;
    await tick();
    assert.deepEqual(tab.currentStat,General.getInitStatGroup(nextUnit));
    assert.deepEqual(tab.targetStat,General.getInitStatGroup(nextUnit));
    assert.equal(tab.potentialData,Potential.getPotential(nextUnit.potential));
    assert.notEqual(tab.currentStat.limitBreak.groups,tab.targetStat.limitBreak.groups);
    assert.equal(tab.isCalculated,false);
    tab.$destroy(); results.$destroy(); itemBox.$destroy();
    assert.deepEqual(warnings,[],'No Vue warning or watcher loop');
    console.log('PASS calculator UI: actual StatBox/StatSelection/StatCalTab/results, five locales, eligibility/gates, sixth-slot propagation, ownership, Min/Max/reset, flower-only/grouped/total results and real item icons');
    console.log('Node SSR and invoked mounted hooks do not establish browser layout, keyboard/focus, hydration, contrast or AT acceptance.');
}
checkCalculatorUI().catch(error=>{console.error(error);process.exitCode=1;});
