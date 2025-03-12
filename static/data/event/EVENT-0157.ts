import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0157: Event = {
    code: '0157',
    type: EventType.GUILDBOSS,
    startDate: '2024/11/20',
    endDate: '2024/12/04',
    color: EventTypeColor.GUILDBOSS,
    name: {
        [Locale.tc]: `【☆星光少女☆】`,
        [Locale.sc]: `【☆星光少女☆】`,
        [Locale.en]: `[☆ Starlight Girl ☆]`,
        [Locale.jp]: `「☆スターライトガール☆」`,
        [Locale.kr]: `【☆스타라이트 걸☆】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0157,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0157