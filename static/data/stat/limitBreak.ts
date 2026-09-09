import { LimitBreakGroup, LimitBreakLevel } from '@/interface/stat/limitBreak';

// Cumulative stat increases; EXP is the cost to reach this ELv from the preceding one.
export const limitBreakLevels: LimitBreakLevel[] = [
    { elv: 0, exp: 0, hpPercent: 0, atkPercent: 0 },
    { elv: 1, exp: 250, hpPercent: 0, atkPercent: 0.6 },
    { elv: 2, exp: 250, hpPercent: 0.6, atkPercent: 0.6 },
    { elv: 3, exp: 250, hpPercent: 0.6, atkPercent: 1.2 },
    { elv: 4, exp: 250, hpPercent: 1.2, atkPercent: 1.2 },
    { elv: 5, exp: 250, hpPercent: 1.2, atkPercent: 1.2 },
    { elv: 6, exp: 500, hpPercent: 1.2, atkPercent: 1.8 },
    { elv: 7, exp: 500, hpPercent: 1.8, atkPercent: 1.8 },
    { elv: 8, exp: 500, hpPercent: 1.8, atkPercent: 2.4 },
    { elv: 9, exp: 500, hpPercent: 2.4, atkPercent: 2.4 },
    { elv: 10, exp: 500, hpPercent: 2.4, atkPercent: 2.4 },
    { elv: 11, exp: 750, hpPercent: 2.4, atkPercent: 3.2 },
    { elv: 12, exp: 750, hpPercent: 3.2, atkPercent: 3.2 },
    { elv: 13, exp: 750, hpPercent: 3.2, atkPercent: 4 },
    { elv: 14, exp: 750, hpPercent: 4, atkPercent: 4 },
    { elv: 15, exp: 750, hpPercent: 4, atkPercent: 4 },
    { elv: 16, exp: 1000, hpPercent: 4, atkPercent: 5 },
    { elv: 17, exp: 1000, hpPercent: 5, atkPercent: 5 },
    { elv: 18, exp: 1000, hpPercent: 5, atkPercent: 6 },
    { elv: 19, exp: 1000, hpPercent: 6, atkPercent: 6 },
    { elv: 20, exp: 1000, hpPercent: 6, atkPercent: 6 },
];

export const limitBreakGroups: LimitBreakGroup[] = [
    { key: 'profession1', gate: 5, flowers: 1 },
    { key: 'common', gate: 10, flowers: 1 },
    { key: 'element', gate: 15, flowers: 2 },
    { key: 'profession2', gate: 20, flowers: 2 },
];
