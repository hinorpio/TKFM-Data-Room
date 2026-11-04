import { StatGroup } from '@/interface/unit';
import { CalculatedLimitBreakSummary, LimitBreakState } from '@/interface/stat/limitBreak';
import { ItemCode } from '@/plugins/utils/enums';
import { limitBreakGroups, limitBreakLevels } from '@/static/data/stat/limitBreak';

export default {
    isLimitBreakEligible(stat: StatGroup): boolean {
        return stat.level === 60 && (stat.pot.level >= 6 || (stat.pot.level === 5
            && stat.pot.slot.length === 6 && stat.pot.slot.every(slot => slot === true)));
    },

    getNormalizedLimitBreak(stat: StatGroup, current?: StatGroup): LimitBreakState {
        if (!this.isLimitBreakEligible(stat)) return { elv: 0, groups: limitBreakGroups.map(() => false) };
        const state = stat.limitBreak;
        const elv = state && Number.isInteger(state.elv) && state.elv >= 0 && state.elv <= 20 ? state.elv : 0;
        const owned = current ? this.getNormalizedLimitBreak(current) : undefined;
        return {
            elv: Math.max(elv, owned?.elv ?? 0),
            groups: limitBreakGroups.map((group, index) =>
                (elv >= group.gate && state?.groups?.[index] === true) || owned?.groups[index] === true),
        };
    },

    getLimitBreakStatMultiplier(stat: StatGroup, type: string): number {
        const level = limitBreakLevels[this.getNormalizedLimitBreak(stat).elv];
        return 1 + (type === 'HP' ? level.hpPercent : level.atkPercent) / 100;
    },

    getCalculatedLimitBreakResult(current: StatGroup, target: StatGroup): CalculatedLimitBreakSummary {
        const start = this.getNormalizedLimitBreak(current);
        const end = this.getNormalizedLimitBreak(target);
        if (end.elv < start.elv) return { exp: 0, summary: [] };
        const exp = limitBreakLevels.filter(level => level.elv > start.elv && level.elv <= end.elv)
            .reduce((sum, level) => sum + level.exp, 0);
        const flowers = limitBreakGroups.reduce((sum, group, index) =>
            sum + (end.groups[index] && !start.groups[index] ? group.flowers : 0), 0);
        return {
            exp,
            summary: [
                { code: ItemCode.MEMORY_CRYSTAL, quantity: start.elv === 0 && end.elv > 0 ? 30 : 0 },
                { code: ItemCode.WORLD_TREE_FLOWER, quantity: flowers },
                { code: ItemCode.QUANTUM_LEAP_POTION, quantity: Math.ceil(exp / 100) },
            ].filter(item => item.quantity > 0),
        };
    },
};
