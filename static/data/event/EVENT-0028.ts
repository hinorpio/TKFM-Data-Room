import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0028: Event = {
    code: '0028',
    type: EventType.DISCIPLINE,
    startDate: '2021/10/13',
    endDate: '2021/10/27',
    color: EventTypeColor.DISCIPLINE,
    name: {
        [Locale.tc]: `【極樂狂宴】`,
        [Locale.sc]: `【极乐狂宴】`,
        [Locale.en]: `[Blissful Madness]`,
        [Locale.jp]: `「極楽の宴」`,
        [Locale.kr]: `【극락의 향연】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0028,
    newUnit: [ UnitCode.ibuki ]
}

export default EVENT_0028