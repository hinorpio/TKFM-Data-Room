import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_004: Event = {
    code: 'TIMERIFT_004',
    type: EventType.TIMERIFT,
    startDate: '2022/03/16',
    endDate: '2022/05/25',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第四季`,
        [Locale.sc]: `【时之裂缝】第四季`,
        [Locale.en]: `[Time Rift] Season 4`,
        [Locale.jp]: `「時空の裂け目」第4シーズン`,
        [Locale.kr]: `【시공간의 균열】 제4시즌`
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

export default EVENT_TIMERIFT_004