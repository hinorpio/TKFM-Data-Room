import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_025: Event = {
    code: 'TIMERIFT_025',
    type: EventType.TIMERIFT,
    startDate: '2026/05/13',
    endDate: '2026/08/12',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第二十五季`,
        [Locale.sc]: `【时之裂缝】第二十五季`,
        [Locale.en]: `[Time Rift] Season 25`,
        [Locale.jp]: `「時空の裂け目」第25シーズン`,
        [Locale.kr]: `【시공간의 균열】 제25시즌`
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

export default EVENT_TIMERIFT_025