import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0226: Event = {
    code: '0226',
    type: EventType.POINT,
    startDate: '2026/07/08',
    endDate: '2026/07/29',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【Idol Live】`,
        [Locale.sc]: `【Idol Live】`,
        [Locale.en]: `[Idol Live]`,
        [Locale.jp]: `「Idol Live」`,
        [Locale.kr]: `【Idol Live】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0226,
    newUnit: [ UnitCode.se_noel, UnitCode.elsa ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0226
