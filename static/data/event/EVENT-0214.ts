import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0214: Event = {
    code: '0214',
    type: EventType.CHALLENGE,
    startDate: '2026/03/18',
    endDate: '2026/04/01',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【鋒刃與魅狐】`,
        [Locale.sc]: `【锋刃与魅狐】`,
        [Locale.en]: `[The Blade & The Vixen]`,
        [Locale.jp]: `「刃と妖狐」`,
        [Locale.kr]: `【칼날과 요호】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0214,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0214