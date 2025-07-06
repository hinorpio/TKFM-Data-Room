import { Element, ItemCode, Rarity } from '@/plugins/utils/enums';
import { ItemQty } from '../item';

export interface Star {
    star: number;
    item: {
        [element in Element]: StarItem[]
    }
    sliverCoin: {
        [rarity in Rarity]: number 
    };
}

export interface StarItem {
    code: ItemCode | string;
    quantity: number | {
        [rarity in Rarity]: number 
    };
}

export interface CalculatedStarSummary {
    summary: ItemQty[];
}