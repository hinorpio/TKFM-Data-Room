import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_021: Event = {
    code: 'TIMERIFT_021',
    type: EventType.TIMERIFT,
    startDate: '2025/05/14',
    endDate: '2025/08/20',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第二十一季`,
        [Locale.sc]: `【时之裂缝】第二十一季`,
        [Locale.en]: `[Time Rift] Season 21`,
        [Locale.jp]: `「時空の裂け目」第21シーズン`,
        [Locale.kr]: `【시공간의 균열】 제21시즌`
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

export default EVENT_TIMERIFT_021