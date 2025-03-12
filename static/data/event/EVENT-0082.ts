import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0082: Event = {
    code: '0082',
    type: EventType.POINT,
    startDate: '2023/03/08',
    endDate: '2023/03/29',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【請問要來點獸耳嗎？】`,
        [Locale.sc]: `【请问要来点兽耳吗？】`,
        [Locale.en]: `[Do you want some animal ears?]`,
        [Locale.jp]: `「ご注文はケモ耳ですか？」`,
        [Locale.kr]: `【동물귀 주문하시겠어요?】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0082,
    newUnit: [ UnitCode.lillane, UnitCode.c_lulu ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0082