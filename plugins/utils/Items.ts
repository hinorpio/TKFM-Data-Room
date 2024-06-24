import { Item } from '@/interface/global/item';
import itemData from '@/static/data/items';

export default {
    getItem(code: string): Item | undefined {
        const foundItem = itemData.find((item: Item) => item.code === code);
        if (foundItem) {
            return foundItem;
        } else {
            throw new Error("ITEM_NOT_FOUND");
        }
    },

    getItemIcon(code: string): string | undefined {
        const item = itemData.find((item: Item) => item.code === code);
        return item ? item.icon : undefined;
    },

    getAllItems(): Item[] {
        return itemData;
    }
};