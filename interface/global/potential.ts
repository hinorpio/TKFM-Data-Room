
import { PotentialType, PotentialBuffType, ItemCode } from '@/plugins/utils/enums';

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
  
export interface MaterialSummary {
    code: ItemCode,
    quantity: number,
}
export interface StatSummary {
    code: PotentialBuffType,
    value: number,
}

export interface CalculatedSummary {
    materialSummary: MaterialSummary[],
    statSummary: StatSummary[]
}

export interface PotentialSelectGroup {
    level: number;
    slot: boolean[];
}