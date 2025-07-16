import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0186: Event = {
    code: '0186',
    type: EventType.SPIRE,
    startDate: '2025/07/23',
    endDate: '2025/10/22',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第二十五季`,
        [Locale.sc]: `【魔狱塔】第二十五季`,
        [Locale.en]: `[The Demon Spire] Season 25`,
        [Locale.jp]: `「魔獄塔」第25シーズン`,
        [Locale.kr]: `【마옥탑】 제25시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0186,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0186