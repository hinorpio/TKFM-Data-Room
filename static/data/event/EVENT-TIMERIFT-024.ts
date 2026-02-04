import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_024: Event = {
    code: 'TIMERIFT_024',
    type: EventType.TIMERIFT,
    startDate: '2026/02/11',
    endDate: '2026/05/13',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第二十四季`,
        [Locale.sc]: `【时之裂缝】第二十四季`,
        [Locale.en]: `[Time Rift] Season 24`,
        [Locale.jp]: `「時空の裂け目」第24シーズン`,
        [Locale.kr]: `【시공간의 균열】 제24시즌`
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

export default EVENT_TIMERIFT_024