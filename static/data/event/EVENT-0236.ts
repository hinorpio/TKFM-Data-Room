import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0236: Event = {
    code: '0236',
    type: EventType.POINT,
    startDate: '2026/10/07',
    endDate: '2026/10/28',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【Trick or Sweet】`,
        [Locale.sc]: `【Trick or Sweet】`,
        [Locale.en]: `[Trick or Sweet]`,
        [Locale.jp]: `「Trick or Sweet」`,
        [Locale.kr]: `【Trick or Sweet】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0236,
    newUnit: [ UnitCode.h_baal, UnitCode.h_bedard ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0236
