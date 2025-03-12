import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0046: Event = {
    code: '0046',
    type: EventType.POINT,
    startDate: '2022/04/20',
    endDate: '2022/05/11',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【魔境奇遊~LuLu的奇幻旅程~】`,
        [Locale.sc]: `【魔境奇游~LuLu的奇幻旅程~】`,
        [Locale.en]: `[Lulu in Wonderland]`,
        [Locale.jp]: `「不思議の旅」`,
        [Locale.kr]: `【기묘한 여정】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0046,
    newUnit: [ UnitCode.w_chizuru, UnitCode.w_lulu ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0046