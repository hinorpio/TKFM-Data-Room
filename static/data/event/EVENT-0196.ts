import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0196: Event = {
    code: '0196',
    type: EventType.SPIRE,
    startDate: '2025/10/22',
    endDate: '2026/01/14',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第二十六季`,
        [Locale.sc]: `【魔狱塔】第二十六季`,
        [Locale.en]: `[The Demon Spire] Season 26`,
        [Locale.jp]: `「魔獄塔」第26シーズン`,
        [Locale.kr]: `【마옥탑】 제26시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0196,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0196