import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0013: Event = {
    code: '0013',
    type: EventType.SPIRE,
    startDate: '2021/05/19',
    endDate: '2021/07/14',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第三季`,
        [Locale.sc]: `【魔狱塔】第三季`,
        [Locale.en]: `[The Demon Spire] Season 3`,
        [Locale.jp]: `「魔獄塔」第3シーズン`,
        [Locale.kr]: `【마옥탑】 제3시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0013,
    newUnit: []
}

export default EVENT_0013