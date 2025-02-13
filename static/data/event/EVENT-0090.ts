import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0090: Event = {
    code: '0090',
    type: EventType.SPIRE,
    startDate: '2023/04/26',
    endDate: '2023/07/12',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第十三季`,
        [Locale.sc]: `【魔狱塔】第十三季`,
        [Locale.en]: `[The Demon Spire] Season 13`,
        [Locale.jp]: `「魔獄塔」第13シーズン`,
        [Locale.kr]: `【마옥탑】 제13시즌`
    },
    image: EventBanner.EVENT_0090,
    newUnit: []
}

export default EVENT_0090