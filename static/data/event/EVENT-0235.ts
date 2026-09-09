import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0235: Event = {
    code: '0235',
    type: EventType.POINT,
    startDate: '2026/09/23',
    endDate: '2026/10/07',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【甜蜜寶貝矯正宣言-復刻-】`,
        [Locale.sc]: `【甜蜜宝贝矫正宣言-复刻-】`,
        [Locale.en]: `[Sweet Baby Correction -Comeback-]`,
        [Locale.jp]: `「スイートベイビー矯正宣言-復刻-」`,
        [Locale.kr]: `【스위트 베이비 교정 선언-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0235,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0235
