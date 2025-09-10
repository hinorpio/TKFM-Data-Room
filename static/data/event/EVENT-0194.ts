import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0194: Event = {
    code: '0194',
    type: EventType.POINT,
    startDate: '2025/10/01',
    endDate: '2025/10/15',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【Pasadena~被七夕分離的兩人】`,
        [Locale.sc]: `【Pasadena~被七夕分离的两人】`,
        [Locale.en]: `[Pasadena~ Separated by Love]`,
        [Locale.jp]: `「Pasadena~七夕に隔てられた二人」`,
        [Locale.kr]: `【Pasadena~칠석에 떨어진 두 사람】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0194,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0194