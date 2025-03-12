import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_016: Event = {
    code: 'TIMERIFT_016',
    type: EventType.TIMERIFT,
    startDate: '2024/07/03',
    endDate: '2024/08/21',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第十六季`,
        [Locale.sc]: `【时之裂缝】第十六季`,
        [Locale.en]: `[Time Rift] Season 16`,
        [Locale.jp]: `「時空の裂け目」第16シーズン`,
        [Locale.kr]: `【시공간의 균열】 제16시즌`
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

export default EVENT_TIMERIFT_016