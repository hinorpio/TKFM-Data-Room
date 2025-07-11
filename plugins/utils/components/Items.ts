import { Item } from '@/interface/item';
import { ItemCode } from '../enums';
import itemData from '@/static/data/items';

export default {
    getItem(code: ItemCode | string): Item | undefined {
        const foundItem = itemData.find((item: Item) => item.code === code);
        if (foundItem) {
            return foundItem;
        } else {
            throw new Error("ITEM_NOT_FOUND");
        }
    },

    getItemIcon(code: ItemCode | string): string | undefined {
        const item = itemData.find((item: Item) => item.code === code);
        return item ? item.icon : undefined;
    },

    getAllItems(): Item[] {
        return itemData;
    },

    isItemCode(code: unknown): code is ItemCode {
        return Object.values(ItemCode).includes(code as ItemCode);
    }
};