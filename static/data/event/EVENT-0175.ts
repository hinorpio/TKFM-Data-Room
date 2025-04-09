import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0175: Event = {
    code: '0175',
    type: EventType.CHALLENGE,
    startDate: '2025/04/23',
    endDate: '2025/04/30',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【心之枷鎖】`,
        [Locale.sc]: `【心之枷锁】`,
        [Locale.en]: `[Shackles of the Heart]`,
        [Locale.jp]: `「心の枷」`,
        [Locale.kr]: `【마음의 족쇄】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0175,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0175