import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0216: Event = {
    code: '0216',
    type: EventType.CHALLENGE,
    startDate: '2026/04/15',
    endDate: '2026/04/29',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【性愛之決鬥】`,
        [Locale.sc]: `【性爱之决斗】`,
        [Locale.en]: `[Final Sex Duel]`,
        [Locale.jp]: `「セックス・デュエル」`,
        [Locale.kr]: `【섹스 듀얼】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0216,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0216