import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0205: Event = {
    code: '0205',
    type: EventType.POINT,
    startDate: '2026/01/07',
    endDate: '2026/01/28',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【淘氣狐娘結緣神】`,
        [Locale.sc]: `【淘气狐娘结缘神】`,
        [Locale.en]: `[Fox & Matchmaker]`,
        [Locale.jp]: `「狐っ娘と縁結びの神」`,
        [Locale.kr]: `【장난꾸러기 여우와의 인연】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0205,
    newUnit: [ UnitCode.b_shizuka, UnitCode.m_usagihime ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0205