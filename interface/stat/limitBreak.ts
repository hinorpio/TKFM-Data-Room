import type { LimitBreakGroupKey } from '@/static/data/unit/limitBreak';
import { ItemQty } from '@/interface/item';

export interface LimitBreakState {
    elv: number;
    groups: boolean[];
}

export interface LimitBreakLevel {
    elv: number;
    exp: number;
    hpPercent: number;
    atkPercent: number;
}

export interface LimitBreakGroup {
    key: LimitBreakGroupKey;
    gate: number;
    flowers: number;
}

export interface CalculatedLimitBreakSummary {
    exp: number;
    summary: ItemQty[];
}
