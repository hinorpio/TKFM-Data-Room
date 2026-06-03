import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0223: Event = {
    code: '0223',
    type: EventType.POINT,
    startDate: '2026/06/03',
    endDate: '2026/07/01',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【冰霜下的殘響】`,
        [Locale.sc]: `【冰霜下的残响】`,
        [Locale.en]: `[Echoes Under Frost]`,
        [Locale.jp]: `「霜の下の残響」`,
        [Locale.kr]: `【서리 밑에 남겨진 잔향】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0223,
    newUnit: [ UnitCode.otohime, UnitCode.s_britney, UnitCode.s_nanami, UnitCode.legora ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0223
