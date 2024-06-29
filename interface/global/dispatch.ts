import { Locale, DispatchType, ItemCode } from '@/plugins/utils/enums';

export interface Dispatch {
    type: DispatchType;
    image: {
        [lang in Locale]?: null | string;
    };
    name: {
        [lang in Locale]?: null | string;
    };
    item: ItemCode[]
}
  