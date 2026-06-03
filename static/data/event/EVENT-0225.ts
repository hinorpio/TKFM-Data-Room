import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0225: Event = {
    code: '0225',
    type: EventType.POINT,
    startDate: '2026/06/24',
    endDate: '2026/07/08',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【傳說中的魔法少女】`,
        [Locale.sc]: `【传说中的魔法少女】`,
        [Locale.en]: `[Legendary Magical Maiden]`,
        [Locale.jp]: `「伝説の魔法少女」`,
        [Locale.kr]: `【전설의 마법소녀】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0225,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0225
