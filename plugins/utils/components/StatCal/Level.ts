import { ItemCode } from '../../enums';
import { Item } from '~/interface/item';
import ItemService from '../Items'
import levelData from '~/static/data/stat/level'
import { CalculatedLevelSummary } from '~/interface/stat/level';
import { ItemQty } from '~/interface/item';

export default {
    getCalculatedLvResult(startLv: number, endLv: number): CalculatedLevelSummary{
        if (endLv <= startLv) return { exp: 0, summary: [] } ;

        const requiredLevel = levelData   // The Level Between
            .filter(lv => lv.level > startLv && lv.level <= endLv)
        
        const requiredExp = requiredLevel.reduce((sum, lv) => sum + lv.exp, 0); // The sum up  EXP

        let remaining = requiredExp;
        const potions: Item[] = [                   // Get the EXP Potion
            ItemService.getItem(ItemCode.EXP_LV4),
            ItemService.getItem(ItemCode.EXP_LV3),
            ItemService.getItem(ItemCode.EXP_LV2),
            ItemService.getItem(ItemCode.EXP_LV1),
        ].filter((item): item is Item => item !== undefined);

        const summary: ItemQty[] = [];

        for (const potion of potions) { // Calculating the qty of potions from the biggest, but just before exceed it
            const count = Math.floor(remaining / (potion.usageValue ?? 1));
            if (count > 0) {
                summary.push({ code: potion.code, quantity: count });
                remaining -= count * (potion.usageValue ?? 1);
            }
        }

        if (remaining > 0) { // The final potion
            const lastPotion = potions[potions.length - 1];
            const existing = summary.find(p => p.code === lastPotion.code);
            if (existing) {
                existing.quantity = (existing.quantity as number) + 1;
            } else {
                summary.push({ code: lastPotion.code, quantity: 1 });
            }
        }

        let totalSliverCoin: number = 0;
        for (const level of requiredLevel){
            totalSliverCoin += level.sliverCoin
        }

        summary.push( { code: ItemCode.SLIVER_COIN, quantity: totalSliverCoin } )

        return {
            exp: requiredExp, 
            summary: summary
        }
    }
};