import { ItemCode, Rarity, Element } from '../../enums';
import { Item } from '~/interface/item';
import ItemService from '../Items'
import roomData from '~/static/data/stat/room'
import { CalculatedRoomSummary } from '~/interface/stat/room';
import { ItemQty } from '~/interface/item';

export default {
    getCalculatedRoomResult(rarity: Rarity, element: Element, startRoom: number | null, endRoom: number | null): CalculatedRoomSummary{
        if (startRoom == null || endRoom == null || endRoom <= startRoom) return { exp: 0, summary: [] } ;

        const requiredRoom = roomData
            .filter(f => f.rarity === rarity && f.room > startRoom && f.room <= endRoom)
        
        const requiredExp = requiredRoom.reduce((sum, room) => sum + room.exp, 0);
        
        const items: Item[] = [
            ItemService.getItem(ItemCode.DISCIPLINE_FRUIT),
            ItemService.getItem(ItemCode[`DISCIPLINE_${element}_LV3` as keyof typeof ItemCode]),
            ItemService.getItem(ItemCode[`DISCIPLINE_${element}_LV2` as keyof typeof ItemCode]),
            ItemService.getItem(ItemCode[`DISCIPLINE_${element}_LV1` as keyof typeof ItemCode]),
        ].filter((item): item is Item => item !== undefined);

        const summary: ItemQty[] = [];

        for (const item of items) { // Calculating the qty of each item
            summary.push({ code: item.code, quantity: Math.floor(requiredExp / (item.usageValue ?? 1)) });
        }

        return {
            exp: requiredExp, 
            summary: summary
        }
    }
};