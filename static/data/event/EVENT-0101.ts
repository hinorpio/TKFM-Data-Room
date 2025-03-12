import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0101: Event = {
    code: '0101',
    type: EventType.POINT,
    startDate: '2023/08/09',
    endDate: '2023/08/30',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【Biadlo IX 魔影再臨】`,
        [Locale.sc]: `【Biadlo IX 魔影再临】`,
        [Locale.en]: `[Biadlo IX Shadow Returns]`,
        [Locale.jp]: `「Biadlo IX 魔影再臨」`,
        [Locale.kr]: `【Biadlo IX 악마의 그림자 재림】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0101,
    newUnit: [ UnitCode.sasha, UnitCode.bayliss ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0101