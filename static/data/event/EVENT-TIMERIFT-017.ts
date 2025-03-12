import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_017: Event = {
    code: 'TIMERIFT_017',
    type: EventType.TIMERIFT,
    startDate: '2024/08/21',
    endDate: '2024/10/23',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第十七季`,
        [Locale.sc]: `【时之裂缝】第十七季`,
        [Locale.en]: `[Time Rift] Season 17`,
        [Locale.jp]: `「時空の裂け目」第17シーズン`,
        [Locale.kr]: `【시공간의 균열】 제17시즌`
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

export default EVENT_TIMERIFT_017