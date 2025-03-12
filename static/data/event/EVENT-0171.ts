import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0171: Event = {
    code: '0171',
    type: EventType.CHALLENGE,
    startDate: '2025/03/26',
    endDate: '2025/04/02',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【異星：猛攻】`,
        [Locale.sc]: `【异星：猛攻】`,
        [Locale.en]: `[Alien Planet: Assault]`,
        [Locale.jp]: `「異星：猛攻」`,
        [Locale.kr]: `【이계 행성: 맹공】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0171,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0171