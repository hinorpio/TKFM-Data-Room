import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0110: Event = {
    code: '0110',
    type: EventType.GUILDBOSS,
    startDate: '2023/10/25',
    endDate: '2023/11/08',
    color: EventTypeColor.GUILDBOSS,
    name: {
        [Locale.tc]: `【萬聖闖關城】`,
        [Locale.sc]: `【万圣闯关城】`,
        [Locale.en]: `[Evil Spirits' Palace Break-In]`,
        [Locale.jp]: `「ハロウィンクエスト城」`,
        [Locale.kr]: `【할로윈 성 돌파】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0110,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0110