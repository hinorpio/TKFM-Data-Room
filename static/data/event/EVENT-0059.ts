import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0059: Event = {
    code: '0059',
    type: EventType.SPIRE,
    startDate: '2022/09/14',
    endDate: '2022/12/01',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第十季`,
        [Locale.sc]: `【魔狱塔】第十季`,
        [Locale.en]: `[The Demon Spire] Season 10`,
        [Locale.jp]: `「魔獄塔」第10シーズン`,
        [Locale.kr]: `【마옥탑】 제10시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0059,
    newUnit: []
}

export default EVENT_0059