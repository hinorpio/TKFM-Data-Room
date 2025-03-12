import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0106: Event = {
    code: '0106',
    type: EventType.CHALLENGE,
    startDate: '2023/09/27',
    endDate: '2023/10/11',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【Vtuber】`,
        [Locale.sc]: `【Vtuber】`,
        [Locale.en]: `[Vtuber]`,
        [Locale.jp]: `「Vtuber」`,
        [Locale.kr]: `【Vtuber】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0106,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0106