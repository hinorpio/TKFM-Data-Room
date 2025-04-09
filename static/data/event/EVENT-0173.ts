import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0173: Event = {
    code: '0173',
    type: EventType.POINT,
    startDate: '2025/04/01',
    endDate: '2025/04/16',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【甜蜜寶貝矯正宣言】`,
        [Locale.sc]: `【甜蜜宝贝矫正宣言】`,
        [Locale.en]: `[Sweet Baby Correction]`,
        [Locale.jp]: `「スイートベイビー矯正宣言」`,
        [Locale.kr]: `【스위트 베이비 교정 선언】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0173,
    newUnit: [ UnitCode.bedard ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0173