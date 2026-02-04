import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0209: Event = {
    code: '0209',
    type: EventType.POINT,
    startDate: '2026/02/04',
    endDate: '2026/02/25',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【新娘們愛的爭奪戰】`,
        [Locale.sc]: `【新娘们爱的争夺战】`,
        [Locale.en]: `[Brides Love a Struggle]`,
        [Locale.jp]: `「花嫁の愛の争奪戦」`,
        [Locale.kr]: `【새신부들의 애정 쟁탈전】 `
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0209,
    newUnit: [ UnitCode.b_aiko, UnitCode.b_ayane, UnitCode.b_lana ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0209