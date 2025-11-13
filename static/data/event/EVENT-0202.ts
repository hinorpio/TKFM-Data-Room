import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0202: Event = {
    code: '0202',
    type: EventType.POINT,
    startDate: '2025/11/26',
    endDate: '2025/12/10',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【Biadlo IX 魔影再臨-復刻-】`,
        [Locale.sc]: `【Biadlo IX 魔影再临-复刻-】`,
        [Locale.en]: `[Biadlo IX Shadow -Comeback-]`,
        [Locale.jp]: `「Biadlo IX 魔影再臨-復刻-」`,
        [Locale.kr]: `【Biadlo IX 악마의 재림-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0202,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0202