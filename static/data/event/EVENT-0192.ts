import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0192: Event = {
    code: '0192',
    type: EventType.SPECIAL,
    startDate: '2025/09/10',
    endDate: '2025/10/15',
    color: EventTypeColor.SPECIAL,
    name: {
        [Locale.tc]: `【魔王城秋季集訓】(beta ver.)`,
        [Locale.sc]: `【魔王城秋季集训】(beta ver.)`,
        [Locale.en]: `[Palace Autumn Training Camp] (beta ver.)`,
        [Locale.jp]: `「魔王城オータムキャンプ」(beta ver.)`,
        [Locale.kr]: `【마왕성 가을 훈련】 (beta ver.)`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0192,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0192