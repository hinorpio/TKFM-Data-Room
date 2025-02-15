import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0009: Event = {
    code: '0009',
    type: EventType.SPIRE,
    startDate: '2021/03/17',
    endDate: '2021/05/19',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第二季`,
        [Locale.sc]: `【魔狱塔】第二季`,
        [Locale.en]: `[The Demon Spire] Season 2`,
        [Locale.jp]: `「魔獄塔」第2シーズン`,
        [Locale.kr]: `【마옥탑】 제2시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0009,
    newUnit: []
}

export default EVENT_0009