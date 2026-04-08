import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0219: Event = {
    code: '0219',
    type: EventType.SPIRE,
    startDate: '2026/04/15',
    endDate: '2026/07/15',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第二十八季`,
        [Locale.sc]: `【魔狱塔】第二十八季`,
        [Locale.en]: `[The Demon Spire] Season 28`,
        [Locale.jp]: `「魔獄塔」第28シーズン`,
        [Locale.kr]: `【마옥탑】 제28시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0219,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0219