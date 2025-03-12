import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_003: Event = {
    code: 'TIMERIFT_003',
    type: EventType.TIMERIFT,
    startDate: '2021/12/29',
    endDate: '2022/03/16',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第三季`,
        [Locale.sc]: `【时之裂缝】第三季`,
        [Locale.en]: `[Time Rift] Season 3`,
        [Locale.jp]: `「時空の裂け目」第3シーズン`,
        [Locale.kr]: `【시공간의 균열】 제3시즌`
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

export default EVENT_TIMERIFT_003