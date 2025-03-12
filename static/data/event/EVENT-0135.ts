import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0135: Event = {
    code: '0135',
    type: EventType.SPIRE,
    startDate: '2024/05/22',
    endDate: '2024/07/10',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第十九季`,
        [Locale.sc]: `【魔狱塔】第十九季`,
        [Locale.en]: `[The Demon Spire] Season 19`,
        [Locale.jp]: `「魔獄塔」第19シーズン`,
        [Locale.kr]: `【마옥탑】 제19시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0135,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0135