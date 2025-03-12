import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0169: Event = {
    code: '0169',
    type: EventType.DISCIPLINE,
    startDate: '2025/02/26',
    endDate: '2025/03/12',
    color: EventTypeColor.DISCIPLINE,
    name: {
        [Locale.tc]: `【魔法少女☆托特拉-復刻-】`,
        [Locale.sc]: `【魔法少女☆托特拉-复刻-】`,
        [Locale.en]: `[Knight ☆ Tyrella -Comeback-]`,
        [Locale.jp]: `「魔法少女☆トトラ-復刻-」`,
        [Locale.kr]: `【마법소녀☆토타라-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0169,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0169