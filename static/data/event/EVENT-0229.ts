import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0229: Event = {
    code: '0229',
    type: EventType.POINT,
    startDate: '2026/08/05',
    endDate: '2026/08/26',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【犬與辛香料】`,
        [Locale.sc]: `【犬与辛香料】`,
        [Locale.en]: `[Dog & Spice]`,
        [Locale.jp]: `「犬と香辛料」`,
        [Locale.kr]: `【코볼트와 향신료】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0229,
    newUnit: [ UnitCode.w_noma, UnitCode.ciel ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0229
