import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_SPIRE_30: Event = {
    code: 'SPIRE_30',
    type: EventType.SPIRE,
    startDate: '2026/10/14',
    endDate: '2027/01/13',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第三十季`,
        [Locale.sc]: `【魔狱塔】第三十季`,
        [Locale.en]: `[The Demon Spire] Season 30`,
        [Locale.jp]: `「魔獄塔」第30シーズン`,
        [Locale.kr]: `【마옥탑】 제30시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_SPIRE,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_SPIRE_30
