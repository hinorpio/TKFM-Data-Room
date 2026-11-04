import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_026: Event = {
    code: 'TIMERIFT_026',
    type: EventType.TIMERIFT,
    startDate: '2026/08/12',
    endDate: '2026/11/11',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第二十六季`,
        [Locale.sc]: `【时之裂缝】第二十六季`,
        [Locale.en]: `[Time Rift] Season 26`,
        [Locale.jp]: `「時空の裂け目」第26シーズン`,
        [Locale.kr]: `【시공간의 균열】 제26시즌`
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

export default EVENT_TIMERIFT_026
