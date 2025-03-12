import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0031: Event = {
    code: '0031',
    type: EventType.POTENTIAL,
    startDate: '2021/11/17',
    endDate: '2021/12/01',
    color: EventTypeColor.POTENTIAL,
    name: {
        [Locale.tc]: `【疾速奔馳！人馬娘！】`,
        [Locale.sc]: `【疾速奔驰！人马娘！】`,
        [Locale.en]: `[Dashing Centaur!]`,
        [Locale.jp]: `「走れ！ケンタウロス娘！」`,
        [Locale.kr]: `【질주해라 켄타우로스 소녀!】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0031,
    newUnit: [ UnitCode.inori ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0031