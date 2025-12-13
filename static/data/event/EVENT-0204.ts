import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0204: Event = {
    code: '0204',
    type: EventType.CHALLENGE,
    startDate: '2025/12/24',
    endDate: '2026/01/07',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【愛、鮮血、送葬曲】`,
        [Locale.sc]: `【爱、鲜血、送葬曲】`,
        [Locale.en]: `[Love, Blood, Requiem]`,
        [Locale.jp]: `「愛、鮮血、レクイエム」`,
        [Locale.kr]: `【사랑, 신선한 피, 장송곡】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0204,
    newUnit: [ UnitCode.fifth_iblis, UnitCode.fifth_satan, UnitCode.fifth_baal, UnitCode.fifth_nana ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0204