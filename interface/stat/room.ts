import { Rarity } from '@/plugins/utils/enums';
import { ItemQty } from '../item';

export interface Room {
    rarity: Rarity
    room: number;
    exp: number;
}

export interface CalculatedRoomSummary {
    exp: number;
    summary: ItemQty[];
}