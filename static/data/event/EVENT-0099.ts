import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0099: Event = {
    code: '0099',
    type: EventType.SPIRE,
    startDate: '2023/07/12',
    endDate: '2023/09/27',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第十四季`,
        [Locale.sc]: `【魔狱塔】第十四季`,
        [Locale.en]: `[The Demon Spire] Season 14`,
        [Locale.jp]: `「魔獄塔」第14シーズン`,
        [Locale.kr]: `【마옥탑】 제14시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0099,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0099