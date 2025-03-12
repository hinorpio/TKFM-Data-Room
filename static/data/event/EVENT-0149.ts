import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0149: Event = {
    code: '0149',
    type: EventType.CHALLENGE,
    startDate: '2024/09/25',
    endDate: '2024/10/12',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【星宿的指引】`,
        [Locale.sc]: `【星宿的指引】`,
        [Locale.en]: `[Cosmic Guidance]`,
        [Locale.jp]: `「星宿の導き」`,
        [Locale.kr]: `【별자리의 안내】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0149,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0149