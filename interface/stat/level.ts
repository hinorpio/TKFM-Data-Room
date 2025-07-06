import { ItemCode } from '@/plugins/utils/enums';
import { ItemQty } from '../item';

export interface Level {
    level: number;
    exp: number;
    ratio: number;
    sliverCoin: number
}

export interface CalculatedLevelSummary {
    exp: number;
    summary: ItemQty[];
}