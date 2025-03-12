import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0125: Event = {
    code: '0125',
    type: EventType.CHALLENGE,
    startDate: '2024/03/20',
    endDate: '2024/03/27',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【古墓的詛咒】`,
        [Locale.sc]: `【古墓的诅咒】`,
        [Locale.en]: `[Ancient Tomb Curse]`,
        [Locale.jp]: `「古墳の呪い」`,
        [Locale.kr]: `【고묘의 저주】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0125,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0125