import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_013: Event = {
    code: 'TIMERIFT_013',
    type: EventType.TIMERIFT,
    startDate: '2024/01/03',
    endDate: '2024/03/13',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第十三季`,
        [Locale.sc]: `【时之裂缝】第十三季`,
        [Locale.en]: `[Time Rift] Season 13`,
        [Locale.jp]: `「時空の裂け目」第13シーズン`,
        [Locale.kr]: `【시공간의 균열】 제13시즌`
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

export default EVENT_TIMERIFT_013