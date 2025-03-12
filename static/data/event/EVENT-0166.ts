import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0166: Event = {
    code: '0166',
    type: EventType.SPIRE,
    startDate: '2025/01/29',
    endDate: '2025/04/16',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第二十三季`,
        [Locale.sc]: `【魔狱塔】第二十三季`,
        [Locale.en]: `[The Demon Spire] Season 23`,
        [Locale.jp]: `「魔獄塔」第23シーズン`,
        [Locale.kr]: `【마옥탑】 제23시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0166,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0166