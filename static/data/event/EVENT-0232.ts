import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0232: Event = {
    code: '0232',
    type: EventType.POINT,
    startDate: '2026/09/02',
    endDate: '2026/09/09',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【星宿的指引-復刻-】`,
        [Locale.sc]: `【星宿的指引-复刻-】`,
        [Locale.en]: `[Cosmic Guidance -Comeback-]`,
        [Locale.jp]: `「星宿の導き-復刻-」`,
        [Locale.kr]: `【별자리의 안내-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0232,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0232
