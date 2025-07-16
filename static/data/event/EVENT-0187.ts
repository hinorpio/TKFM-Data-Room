import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0187: Event = {
    code: '0187',
    type: EventType.POINT,
    startDate: '2025/07/16',
    endDate: '2025/08/06',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【背德心療系-復刻-】`,
        [Locale.sc]: `【背德心疗系-复刻-】`,
        [Locale.en]: `[Corrupt Therapy -Comeback-]`,
        [Locale.jp]: `「背徳心療内科-復刻-」`,
        [Locale.kr]: `【배덕심 요법-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0187,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0187