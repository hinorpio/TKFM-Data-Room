import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0136: Event = {
    code: '0136',
    type: EventType.POINT,
    startDate: '2024/06/05',
    endDate: '2024/07/03',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【混亂的碧海狂潮！】`,
        [Locale.sc]: `【混乱的碧海狂潮！】`,
        [Locale.en]: `[Chaos in the Sea!]`,
        [Locale.jp]: `「混乱の青海原！」`,
        [Locale.kr]: `【혼란의 광조】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0136,
    newUnit: [ UnitCode.s_chizuru, UnitCode.s_salucia, UnitCode.s_caesar, UnitCode.s_satan ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0136