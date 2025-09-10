import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0191: Event = {
    code: '0191',
    type: EventType.POINT,
    startDate: '2025/09/10',
    endDate: '2025/10/01',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【綾音的世界】`,
        [Locale.sc]: `【绫音的世界】`,
        [Locale.en]: `[Ayane's World]`,
        [Locale.jp]: `「綾音の世界」`,
        [Locale.kr]: `【아야네의 세계】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0191,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0191