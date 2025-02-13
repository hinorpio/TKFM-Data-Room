import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0052: Event = {
    code: '0052',
    type: EventType.SPIRE,
    startDate: '2022/06/29',
    endDate: '2022/08/31',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第九季`,
        [Locale.sc]: `【魔狱塔】第九季`,
        [Locale.en]: `[The Demon Spire] Season 9`,
        [Locale.jp]: `「魔獄塔」第9シーズン`,
        [Locale.kr]: `【마옥탑】 제9시즌`
    },
    image: EventBanner.EVENT_0052,
    newUnit: []
}

export default EVENT_0052