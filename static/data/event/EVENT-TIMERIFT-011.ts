import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_011: Event = {
    code: 'TIMERIFT_011',
    type: EventType.TIMERIFT,
    startDate: '2023/08/23',
    endDate: '2023/11/01',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第十一季`,
        [Locale.sc]: `【时之裂缝】第十一季`,
        [Locale.en]: `[Time Rift] Season 11`,
        [Locale.jp]: `「時空の裂け目」第11シーズン`,
        [Locale.kr]: `【시공간의 균열】 제11시즌`
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

export default EVENT_TIMERIFT_011