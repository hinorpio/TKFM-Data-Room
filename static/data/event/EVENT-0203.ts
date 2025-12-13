import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0203: Event = {
    code: '0203',
    type: EventType.POINT,
    startDate: '2025/12/10',
    endDate: '2026/01/07',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【凱薩之死】`,
        [Locale.sc]: `【凯萨之死】`,
        [Locale.en]: `[Caesar's Death]`,
        [Locale.jp]: `「シーザーの死」`,
        [Locale.kr]: `【시저의 죽음】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0203,
    newUnit: [ UnitCode.fifth_iblis, UnitCode.fifth_satan, UnitCode.fifth_baal, UnitCode.fifth_nana ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0203