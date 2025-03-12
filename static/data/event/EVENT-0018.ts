import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0018: Event = {
    code: '0018',
    type: EventType.SPIRE,
    startDate: '2021/07/14',
    endDate: '2021/09/22',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第四季`,
        [Locale.sc]: `【魔狱塔】第四季`,
        [Locale.en]: `[The Demon Spire] Season 4`,
        [Locale.jp]: `「魔獄塔」第4シーズン`,
        [Locale.kr]: `【마옥탑】 제4시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0018,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0018