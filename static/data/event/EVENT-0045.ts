import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0045: Event = {
    code: '0045',
    type: EventType.SPIRE,
    startDate: '2022/04/13',
    endDate: '2022/06/29',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第八季`,
        [Locale.sc]: `【魔狱塔】第八季`,
        [Locale.en]: `[The Demon Spire] Season 8`,
        [Locale.jp]: `「魔獄塔」第8シーズン`,
        [Locale.kr]: `【마옥탑】 제8시즌`
    },
    image: EventBanner.EVENT_0045,
    newUnit: []
}

export default EVENT_0045