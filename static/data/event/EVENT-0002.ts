import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0002: Event = {
    code: '0002',
    type: EventType.SPIRE,
    startDate: '2021/01/20',
    endDate: '2021/03/17',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第一季`,
        [Locale.sc]: `【魔狱塔】第一季`,
        [Locale.en]: `[The Demon Spire] Season 1`,
        [Locale.jp]: `「魔獄塔」第1シーズン`,
        [Locale.kr]: `【마옥탑】 제1시즌`
    },
    image: EventBanner.EVENT_0002,
    newUnit: []
}

export default EVENT_0002