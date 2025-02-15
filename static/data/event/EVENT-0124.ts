import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0124: Event = {
    code: '0124',
    type: EventType.POINT,
    startDate: '2024/03/06',
    endDate: '2024/03/27',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【獸耳鄉的傳說】`,
        [Locale.sc]: `【兽耳乡的传说】`,
        [Locale.en]: `[Kemomimi Legends]`,
        [Locale.jp]: `「ケモミミ郷の伝説」`,
        [Locale.kr]: `【케모미미촌의 전설】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0124,
    newUnit: [ UnitCode.angelina, UnitCode.w_lillane ]
}

export default EVENT_0124