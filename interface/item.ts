import { Locale, ItemType, ItemCode } from '@/plugins/utils/enums';

export interface CombinedItem {
    code: string;
    quantity: number;
}

export interface Item {
    type: ItemType;
    code: ItemCode;
    icon: string;
    name: {
        [lang in Locale]?: null | string;
    },
    combined?: CombinedItem[];
    usageValue?: number;
}

export interface ItemQty {
    code: ItemCode | string;
    quantity: number | string,
}
  