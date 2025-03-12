import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0145: Event = {
    code: '0145',
    type: EventType.GUILDBOSS,
    startDate: '2024/08/21',
    endDate: '2024/09/04',
    color: EventTypeColor.GUILDBOSS,
    name: {
        [Locale.tc]: `【人妻系列】`,
        [Locale.sc]: `【人妻系列】`,
        [Locale.en]: `[Wife Series]`,
        [Locale.jp]: `「人妻シリーズ」`,
        [Locale.kr]: `【유부녀 시리즈】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0145,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0145