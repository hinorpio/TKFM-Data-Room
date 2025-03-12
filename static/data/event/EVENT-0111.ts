import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0111: Event = {
    code: '0111',
    type: EventType.DISCIPLINE,
    startDate: '2023/11/01',
    endDate: '2023/11/15',
    color: EventTypeColor.DISCIPLINE,
    name: {
        [Locale.tc]: `【極樂狂宴-復刻-】`,
        [Locale.sc]: `【极乐狂宴-复刻-】`,
        [Locale.en]: `[Blissful Madness -Comeback-]`,
        [Locale.jp]: `「極楽の宴-復刻-」`,
        [Locale.kr]: `【극락의 향연-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0111,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0111