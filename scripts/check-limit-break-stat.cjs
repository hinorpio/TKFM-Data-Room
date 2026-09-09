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
        cache.set(filename, { default: component });
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
