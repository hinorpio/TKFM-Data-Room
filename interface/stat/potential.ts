
import { PotentialType, PotentialBuffType, ItemCode } from '@/plugins/utils/enums';
import { ItemQty } from '../item';

interface RequiredItem {
    code: ItemCode;
    quantity: number;
}

export interface Slot {
    type: PotentialBuffType,
    value: number,
    required: RequiredItem[]
}

export interface Potential {
    type: PotentialType;
    detail: Slot[][]
}
  
export interface StatSummary {
    code: PotentialBuffType,
    value: number,
}

export interface CalculatedPotSummary {
    summary: ItemQty[],
    statSummary: StatSummary[]
}

export interface PotentialSelectGroup {
    level: number;
    slot: boolean[];
}