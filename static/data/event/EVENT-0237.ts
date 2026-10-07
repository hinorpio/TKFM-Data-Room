import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0237: Event = {
    code: '0237',
    type: EventType.CHALLENGE,
    startDate: '2026/10/14',
    endDate: '2026/10/28',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【Hard Mode-Trick or Sweet】`,
        [Locale.sc]: `【Hard Mode-Trick or Sweet】`,
        [Locale.en]: `[Hard Mode - Trick or Sweet]`,
        [Locale.jp]: `「Hard Mode-Trick or Sweet」`,
        [Locale.kr]: `【Hard Mode-Trick or Sweet】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0237,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0237
