import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0026: Event = {
    code: '0026',
    type: EventType.SPIRE,
    startDate: '2021/09/22',
    endDate: '2021/12/01',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第五季`,
        [Locale.sc]: `【魔狱塔】第五季`,
        [Locale.en]: `[The Demon Spire] Season 5`,
        [Locale.jp]: `「魔獄塔」第5シーズン`,
        [Locale.kr]: `【마옥탑】 제5시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0026,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0026