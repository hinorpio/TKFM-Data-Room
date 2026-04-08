import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0215: Event = {
    code: '0215',
    type: EventType.POINT,
    startDate: '2026/04/08',
    endDate: '2026/04/29',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【淫姬王】`,
        [Locale.sc]: `【淫姬王】`,
        [Locale.en]: `[King o' Sluts]`,
        [Locale.jp]: `「淫姫王」`,
        [Locale.kr]: `【음희왕】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0215,
    newUnit: [ UnitCode.egypt_fiora, UnitCode.egypt_milae ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0215