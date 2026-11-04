import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0239: Event = {
    code: '0239',
    type: EventType.POINT,
    startDate: '2026/11/04',
    endDate: '2026/11/25',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【新大陸歷險記】`,
        [Locale.sc]: `【新大陆历险记】`,
        [Locale.en]: `[New Continent Adventures]`,
        [Locale.jp]: `「新大陸冒険記」`,
        [Locale.kr]: `【신대륙 모험기】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0239,
    newUnit: [ UnitCode.aramis, UnitCode.herschel ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0239
