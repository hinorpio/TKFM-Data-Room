import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0228: Event = {
    code: '0228',
    type: EventType.POINT,
    startDate: '2026/07/22',
    endDate: '2026/10/14',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【獸耳鄉的傳說-復刻-】`,
        [Locale.sc]: `【兽耳乡的传说-复刻-】`,
        [Locale.en]: `[Kemomimi Legends -Comeback-]`,
        [Locale.jp]: `「ケモミミ郷の伝説-復刻-」`,
        [Locale.kr]: `【케모미미촌의 전설-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0228,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0228
