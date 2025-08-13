import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0188: Event = {
    code: '0188',
    type: EventType.POINT,
    startDate: '2025/08/13',
    endDate: '2025/09/03',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【名為魔王的絕症】`,
        [Locale.sc]: `【名为魔王的绝症】`,
        [Locale.en]: `[Master's Affliction]`,
        [Locale.jp]: `「魔王と言う名の不治の病」`,
        [Locale.kr]: `【마왕이란 이름의 불치병】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0188,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0188