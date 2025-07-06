import { Element, Rarity, ItemCode, ItemType } from '../../enums';
import starData from '~/static/data/stat/star'
import { CalculatedStarSummary } from '~/interface/stat/star';
import { ItemQty } from '~/interface/item';
import { Unit } from '~/interface/unit';
import ItemService from '../Items'

export default {
    getCalculatedStarResult(unit: Unit, startStar: number, endStar: number): CalculatedStarSummary{
        if (endStar <= startStar) return { summary: [] } ;

        const requiredStar = starData
            .filter(f => f.star > startStar && f.star <= endStar)
        
        const summary: ItemQty[] = [];
        let totalSliverCoin: number = 0;

        for (const star of requiredStar) { // Calculating the qty of each item
            const itemList = star.item[unit.element as Element]
            
            for (const item of itemList) {
                const qty: number = typeof item.quantity === "number"
                    ? item.quantity
                    : item.quantity[unit.rarity as Rarity];

                const existing = summary.find(s => s.code === item.code);
                if(existing)
                    existing.quantity = (existing.quantity as number) + qty
                else
                    summary.push({ code: item.code, quantity: qty });
            }
            totalSliverCoin += star.sliverCoin[unit.rarity as Rarity]
        }
        summary.push( { code: ItemCode.SLIVER_COIN, quantity: totalSliverCoin } )
        for (let i = 0; i < summary.length; i++) {
            const item = summary[i];
            item.code = (item.code === 'ESSENCE')?unit.essence :item.code
        }
        return { summary: this.sortStarItemList(summary) }
    },

    sortStarItemList(summary: ItemQty[]): ItemQty[]{
        const essenceItemList = summary.filter(item => !ItemService.isItemCode(item.code))
        const potItemList = summary.filter(item => ItemService.isItemCode(item.code) && ItemService.getItem(item.code)?.type === ItemType.POTENTIAL)
        const evolveItemList = summary.filter(item => ItemService.isItemCode(item.code) && ItemService.getItem(item.code)?.type === ItemType.EVOLVE)
        const notGeneralItemList = summary.filter(item => item.code === ItemCode.SLIVER_COIN )

        const order: { [key: string]: number } = {
            [ItemCode.SLIVER_COIN]: 1,
        };
        
        notGeneralItemList.sort((a, b) => {
            const orderA = order[a.code];
            const orderB = order[b.code];
            return orderA - orderB;
        });

        return essenceItemList.concat(potItemList, evolveItemList, notGeneralItemList);
    },
};