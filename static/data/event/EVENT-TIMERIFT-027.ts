import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_027: Event = {
    code: 'TIMERIFT_027',
    type: EventType.TIMERIFT,
    startDate: '2026/11/11',
    endDate: '2027/02/10',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第二十七季`,
        [Locale.sc]: `【时之裂缝】第二十七季`,
        [Locale.en]: `[Time Rift] Season 27`,
        [Locale.jp]: `「時空の裂け目」第27シーズン`,
        [Locale.kr]: `【시공간의 균열】 제27시즌`
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

export default EVENT_TIMERIFT_027
