import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0190: Event = {
    code: '0190',
    type: EventType.POINT,
    startDate: '2025/08/27',
    endDate: '2025/09/10',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【月夜的童話-復刻-】`,
        [Locale.sc]: `【月夜的童话-复刻-】`,
        [Locale.en]: `[Moonlit Fairy Tale -Comeback-]`,
        [Locale.jp]: `「月夜の童話-復刻-」`,
        [Locale.kr]: `【월야의 동화-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0190,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0190