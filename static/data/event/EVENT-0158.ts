import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0158: Event = {
    code: '0158',
    type: EventType.SPIRE,
    startDate: '2024/11/27',
    endDate: '2025/01/29',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第二十二季`,
        [Locale.sc]: `【魔狱塔】第二十二季`,
        [Locale.en]: `[The Demon Spire] Season 22`,
        [Locale.jp]: `「魔獄塔」第22シーズン`,
        [Locale.kr]: `【마옥탑】 제22시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0158,
    newUnit: []
}

export default EVENT_0158