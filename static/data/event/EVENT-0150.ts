import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0150: Event = {
    code: '0150',
    type: EventType.SPIRE,
    startDate: '2024/09/18',
    endDate: '2024/11/27',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第二十一季`,
        [Locale.sc]: `【魔狱塔】第二十一季`,
        [Locale.en]: `[The Demon Spire] Season 21`,
        [Locale.jp]: `「魔獄塔」第21シーズン`,
        [Locale.kr]: `【마옥탑】 제21시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0150,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0150