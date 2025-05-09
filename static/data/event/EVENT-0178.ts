import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0178: Event = {
    code: '0178',
    type: EventType.POINT,
    startDate: '2025/05/07',
    endDate: '2025/05/28',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【媽媽咪呀！】`,
        [Locale.sc]: `【妈妈咪呀！】`,
        [Locale.en]: `[Mommy Mia!]`,
        [Locale.jp]: `「マンマミーア！」`,
        [Locale.kr]: `【맘마미아!】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0178,
    newUnit: [ UnitCode.momDaphne, UnitCode.w_tsubaki ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0178