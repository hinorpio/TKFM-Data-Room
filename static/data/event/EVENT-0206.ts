import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0206: Event = {
    code: '0206',
    type: EventType.CHALLENGE,
    startDate: '2026/01/21',
    endDate: '2026/01/28',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【兔姬大明神】`,
        [Locale.sc]: `【兔姬大明神】`,
        [Locale.en]: `[Usagihime Daimyojin]`,
        [Locale.jp]: `「兎姫大明神」`,
        [Locale.kr]: `【우사기 히메 대명신이여!】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0206,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0206