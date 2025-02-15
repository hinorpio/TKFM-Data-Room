import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0133: Event = {
    code: '0133',
    type: EventType.GUILDBOSS,
    startDate: '2024/05/15',
    endDate: '2024/05/29',
    color: EventTypeColor.GUILDBOSS,
    name: {
        [Locale.tc]: `【Vkdgrz ri Wkh Vxsuhph Rqh】`,
        [Locale.sc]: `【Vkdgrz ri Wkh Vxsuhph Rqh】`,
        [Locale.en]: `[Vkdgrz ri Wkh Vxsuhph Rqh]`,
        [Locale.jp]: `「Vkdgrz ri Wkh Vxsuhph Rqh」`,
        [Locale.kr]: `【Vkdgrz ri Wkh Vxsuhph Rqh】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0133,
    newUnit: []
}

export default EVENT_0133