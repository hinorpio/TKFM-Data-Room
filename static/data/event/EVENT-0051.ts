import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0051: Event = {
    code: '0051',
    type: EventType.CHALLENGE,
    startDate: '2022/07/06',
    endDate: '2022/07/13',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【渡假村大改建】`,
        [Locale.sc]: `【渡假村大改建】`,
        [Locale.en]: `[Resort Remodel]`,
        [Locale.jp]: `「大改造！休暇村」`,
        [Locale.kr]: `【리조트 개조!】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0051,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0051