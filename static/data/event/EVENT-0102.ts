import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0102: Event = {
    code: '0102',
    type: EventType.CHALLENGE,
    startDate: '2023/08/16',
    endDate: '2023/08/30',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【Biadlo IX 毀滅之偶】`,
        [Locale.sc]: `【Biadlo IX 毁灭之偶】`,
        [Locale.en]: `[Biadlo IX Puppet of Destruction]`,
        [Locale.jp]: `「Biadlo IX 破滅の偶像」`,
        [Locale.kr]: `【Biadlo IX 파멸의 우상】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0102,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0102