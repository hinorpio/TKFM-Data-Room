import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0208: Event = {
    code: '0208',
    type: EventType.SPIRE,
    startDate: '2026/01/21',
    endDate: '2026/04/15',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第二十七季`,
        [Locale.sc]: `【魔狱塔】第二十七季`,
        [Locale.en]: `[The Demon Spire] Season 27`,
        [Locale.jp]: `「魔獄塔」第27シーズン`,
        [Locale.kr]: `【마옥탑】 제27시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0208,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0208