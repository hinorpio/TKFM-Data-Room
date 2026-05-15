import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0220: Event = {
    code: '0220',
    type: EventType.POINT,
    startDate: '2026/05/06',
    endDate: '2026/05/27',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【惡之幹部☆奮鬥綱領】`,
        [Locale.sc]: `【恶之干部☆奋斗纲领】`,
        [Locale.en]: `[Evil Inc. ☆ Strike Out]`,
        [Locale.jp]: `「悪の幹部☆奮闘マニュアル」`,
        [Locale.kr]: `【악의 간부☆분투강령】 `
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0220,
    newUnit: [ UnitCode.m_momDaphne, UnitCode.nali ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0220