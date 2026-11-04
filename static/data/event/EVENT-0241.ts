import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0241: Event = {
    code: '0241',
    type: EventType.POINT,
    startDate: '2026/11/18',
    endDate: '2026/12/02',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【凱薩½-復刻-】`,
        [Locale.sc]: `【凯萨½-复刻-】`,
        [Locale.en]: `[Caesar 1/2 -Comeback-]`,
        [Locale.jp]: `「シーザー1/2-復刻-」`,
        [Locale.kr]: `【시저½-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0241,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0241
