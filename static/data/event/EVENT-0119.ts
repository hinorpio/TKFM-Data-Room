import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0119: Event = {
    code: '0119',
    type: EventType.POINT,
    startDate: '2024/02/05',
    endDate: '2024/02/28',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【Automaton's Dream！】`,
        [Locale.sc]: `【Automaton's Dream！】`,
        [Locale.en]: `[Automaton's Dream！]`,
        [Locale.jp]: `「Automaton's Dream！」`,
        [Locale.kr]: `【Automaton's Dream！】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0119,
    newUnit: [ UnitCode.nanami, UnitCode.w_noel, UnitCode.w_mesmiia ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0119