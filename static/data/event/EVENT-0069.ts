import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0069: Event = {
    code: '0069',
    type: EventType.SPIRE,
    startDate: '2022/11/23',
    endDate: '2023/02/01',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第十一季`,
        [Locale.sc]: `【魔狱塔】第十一季`,
        [Locale.en]: `[The Demon Spire] Season 11`,
        [Locale.jp]: `「魔獄塔」第11シーズン`,
        [Locale.kr]: `【마옥탑】 제11시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0069,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0069