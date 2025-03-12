import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_012: Event = {
    code: 'TIMERIFT_012',
    type: EventType.TIMERIFT,
    startDate: '2023/11/01',
    endDate: '2024/01/03',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第十二季`,
        [Locale.sc]: `【时之裂缝】第十二季`,
        [Locale.en]: `[Time Rift] Season 12`,
        [Locale.jp]: `「時空の裂け目」第12シーズン`,
        [Locale.kr]: `【시공간의 균열】 제12시즌`
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

export default EVENT_TIMERIFT_012