import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0114: Event = {
    code: '0114',
    type: EventType.SPIRE,
    startDate: '2023/11/29',
    endDate: '2024/02/07',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第十六季`,
        [Locale.sc]: `【魔狱塔】第十六季`,
        [Locale.en]: `[The Demon Spire] Season 16`,
        [Locale.jp]: `「魔獄塔」第16シーズン`,
        [Locale.kr]: `【마옥탑】 제16시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0114,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0114