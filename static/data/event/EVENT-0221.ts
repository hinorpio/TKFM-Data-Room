import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0221: Event = {
    code: '0221',
    type: EventType.GUILDBOSS,
    startDate: '2026/05/13',
    endDate: '2026/05/28',
    color: EventTypeColor.GUILDBOSS,
    name: {
        [Locale.tc]: `【極惡！夢想銷售計劃】`,
        [Locale.sc]: `【极恶！梦想销售计划】`,
        [Locale.en]: `[Vile! Dream Sale Plan]`,
        [Locale.jp]: `「極悪！夢の販売計画」`,
        [Locale.kr]: `【극악! 드림 프로모션】 `
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0221,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0221