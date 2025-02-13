import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0122: Event = {
    code: '0122',
    type: EventType.SPIRE,
    startDate: '2024/02/07',
    endDate: '2024/04/03',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第十七季`,
        [Locale.sc]: `【魔狱塔】第十七季`,
        [Locale.en]: `[The Demon Spire] Season 17`,
        [Locale.jp]: `「魔獄塔」第17シーズン`,
        [Locale.kr]: `【마옥탑】 제17시즌`
    },
    image: EventBanner.EVENT_0122,
    newUnit: []
}

export default EVENT_0122