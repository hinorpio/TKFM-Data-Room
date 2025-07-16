import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0184: Event = {
    code: '0184',
    type: EventType.POINT,
    startDate: '2025/07/16',
    endDate: '2025/08/06',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【飛越魔界】`,
        [Locale.sc]: `【飞越魔界】`,
        [Locale.en]: `[On a Realm Flyover]`,
        [Locale.jp]: `「魔界を飛び超えろ」`,
        [Locale.kr]: `【마계를 넘어】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0184,
    newUnit: [ UnitCode.sky_nanami, UnitCode.sky_baal ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0184