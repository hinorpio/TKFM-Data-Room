import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0212: Event = {
    code: '0212',
    type: EventType.POINT,
    startDate: '2026/02/25',
    endDate: '2026/03/11',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【甜蜜陷阱 巧克力大騷動-復刻-】`,
        [Locale.sc]: `【甜蜜陷阱 巧克力大骚动-复刻-】`,
        [Locale.en]: `[Chocolate Frenzy -Comeback-]`,
        [Locale.jp]: `「チョコレート大騒動-復刻-」`,
        [Locale.kr]: `【초콜릿 대소동-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0212,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0212