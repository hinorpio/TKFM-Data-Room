import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0193: Event = {
    code: '0193',
    type: EventType.CHALLENGE,
    startDate: '2025/09/24',
    endDate: '2025/10/15',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【凱薩，開始行動！】`,
        [Locale.sc]: `【凯萨，开始行动！】`,
        [Locale.en]: `[Caesar, make a move!]`,
        [Locale.jp]: `「シーザー、行動開始！」`,
        [Locale.kr]: `【시저, 행동 개시!】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0193,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0193