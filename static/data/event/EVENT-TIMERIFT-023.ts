import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_023: Event = {
    code: 'TIMERIFT_023',
    type: EventType.TIMERIFT,
    startDate: '2025/11/19',
    endDate: '2026/02/11',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第二十三季`,
        [Locale.sc]: `【时之裂缝】第二十三季`,
        [Locale.en]: `[Time Rift] Season 23`,
        [Locale.jp]: `「時空の裂け目」第23シーズン`,
        [Locale.kr]: `【시공간의 균열】 제23시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_TIMERIFT,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_TIMERIFT_023