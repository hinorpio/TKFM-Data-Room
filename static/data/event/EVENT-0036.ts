import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0036: Event = {
    code: '0036',
    type: EventType.SPIRE,
    startDate: '2022/01/26',
    endDate: '2022/04/13',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第七季`,
        [Locale.sc]: `【魔狱塔】第七季`,
        [Locale.en]: `[The Demon Spire] Season 7`,
        [Locale.jp]: `「魔獄塔」第7シーズン`,
        [Locale.kr]: `【마옥탑】 제7시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0036,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0036