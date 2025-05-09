import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_020: Event = {
    code: 'TIMERIFT_020',
    type: EventType.TIMERIFT,
    startDate: '2025/02/19',
    endDate: '2025/05/14',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第二十季`,
        [Locale.sc]: `【时之裂缝】第二十季`,
        [Locale.en]: `[Time Rift] Season 20`,
        [Locale.jp]: `「時空の裂け目」第20シーズン`,
        [Locale.kr]: `【시공간의 균열】 제20시즌`
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

export default EVENT_TIMERIFT_020