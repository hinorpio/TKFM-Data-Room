import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0078: Event = {
    code: '0078',
    type: EventType.SPIRE,
    startDate: '2023/02/01',
    endDate: '2023/04/26',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第十二季`,
        [Locale.sc]: `【魔狱塔】第十二季`,
        [Locale.en]: `[The Demon Spire] Season 12`,
        [Locale.jp]: `「魔獄塔」第12シーズン`,
        [Locale.kr]: `【마옥탑】 제12시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0078,
    newUnit: []
}

export default EVENT_0078