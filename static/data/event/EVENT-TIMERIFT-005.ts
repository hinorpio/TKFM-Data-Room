import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_005: Event = {
    code: 'TIMERIFT_005',
    type: EventType.TIMERIFT,
    startDate: '2022/05/25',
    endDate: '2022/08/03',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第五季`,
        [Locale.sc]: `【时之裂缝】第五季`,
        [Locale.en]: `[Time Rift] Season 5`,
        [Locale.jp]: `「時空の裂け目」第5シーズン`,
        [Locale.kr]: `【시공간의 균열】 제5시즌`
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

export default EVENT_TIMERIFT_005