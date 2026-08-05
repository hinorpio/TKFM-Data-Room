import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_SPIRE_29: Event = {
    code: 'SPIRE_29',
    type: EventType.SPIRE,
    startDate: '2026/07/15',
    endDate: '2026/10/14',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第二十九季`,
        [Locale.sc]: `【魔狱塔】第二十九季`,
        [Locale.en]: `[The Demon Spire] Season 29`,
        [Locale.jp]: `「魔獄塔」第29シーズン`,
        [Locale.kr]: `【마옥탑】 제29시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_SPIRE,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_SPIRE_29
