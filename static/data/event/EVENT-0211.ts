import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0211: Event = {
    code: '0211',
    type: EventType.POINT,
    startDate: '2026/03/11',
    endDate: '2026/04/01',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【本大爺養生館】`,
        [Locale.sc]: `【本大爷养生馆】`,
        [Locale.en]: `[Caesar's Massage Parlor]`,
        [Locale.jp]: `「俺様リラクゼーション」`,
        [Locale.kr]: `【이 몸의 마사지 샵】 `
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0211,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0211