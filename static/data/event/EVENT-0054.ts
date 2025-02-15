import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0054: Event = {
    code: '0054',
    type: EventType.POINT,
    startDate: '2022/08/03',
    endDate: '2022/08/24',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【Pasadena~被七夕分離的兩人】`,
        [Locale.sc]: `【Pasadena~被七夕分离的两人】`,
        [Locale.en]: `[Pasadena]`,
        [Locale.jp]: `「Pasadena」`,
        [Locale.kr]: `【Pasadena】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0054,
    newUnit: [ UnitCode.q_asida, UnitCode.asina ]
}

export default EVENT_0054