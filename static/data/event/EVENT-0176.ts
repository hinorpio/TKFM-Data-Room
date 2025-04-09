import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0176: Event = {
    code: '0176',
    type: EventType.SPIRE,
    startDate: '2025/04/16',
    endDate: '2025/07/23',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第二十四季`,
        [Locale.sc]: `【魔狱塔】第二十四季`,
        [Locale.en]: `[The Demon Spire] Season 24`,
        [Locale.jp]: `「魔獄塔」第24シーズン`,
        [Locale.kr]: `【마옥탑】 제24시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0176,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0176