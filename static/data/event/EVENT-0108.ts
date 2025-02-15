import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0108: Event = {
    code: '0108',
    type: EventType.SPIRE,
    startDate: '2023/09/27',
    endDate: '2023/11/29',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第十五季`,
        [Locale.sc]: `【魔狱塔】第十五季`,
        [Locale.en]: `[The Demon Spire] Season 15`,
        [Locale.jp]: `「魔獄塔」第15シーズン`,
        [Locale.kr]: `【마옥탑】 제15시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0108,
    newUnit: []
}

export default EVENT_0108