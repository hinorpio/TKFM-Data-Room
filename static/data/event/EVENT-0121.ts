import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0121: Event = {
    code: '0121',
    type: EventType.SPECIAL,
    startDate: '2024/02/05',
    endDate: '2024/02/28',
    color: EventTypeColor.SPECIAL,
    name: {
        [Locale.tc]: `【啪啪偶像祭】`,
        [Locale.sc]: `【啪啪偶像祭】`,
        [Locale.en]: `[Bang Bang Idol Fest]`,
        [Locale.jp]: `「パンパンアイドルフェス」`,
        [Locale.kr]: `【두근두근 아이돌제】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0121,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0121