import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';

export interface Event {
    code: string;
    type: EventType;
    startDate: string;
    endDate: string;
    color: string;
    name: {
        [lang in Locale]?: null | string;
    };
    description: {
        [lang in Locale]?: null | string;
    };
    banner: {
        [lang in Locale]?: null | string;
    };
    newUnit: UnitCode[]
}