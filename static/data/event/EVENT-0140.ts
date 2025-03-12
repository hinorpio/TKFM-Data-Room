import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0140: Event = {
    code: '0140',
    type: EventType.SPIRE,
    startDate: '2024/07/10',
    endDate: '2024/09/18',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第二十季`,
        [Locale.sc]: `【魔狱塔】第二十季`,
        [Locale.en]: `[The Demon Spire] Season 20`,
        [Locale.jp]: `「魔獄塔」第20シーズン`,
        [Locale.kr]: `【마옥탑】 제20시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0140,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0140