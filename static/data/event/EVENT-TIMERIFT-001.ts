import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_001: Event = {
    code: 'TIMERIFT_001',
    type: EventType.TIMERIFT,
    startDate: '2021/07/28',
    endDate: '2021/10/13',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】BETA版`,
        [Locale.sc]: `【时之裂缝】BETA版`,
        [Locale.en]: `[Time Rift] Beta`,
        [Locale.jp]: `「時空の裂け目」Beta`,
        [Locale.kr]: `【시공간의 균열】 Beta`
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

export default EVENT_TIMERIFT_001