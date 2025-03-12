import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0111: Event = {
    code: '0112',
    type: EventType.POINT,
    startDate: '2023/11/15',
    endDate: '2023/12/06',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【慾神降臨 異界幻想】`,
        [Locale.sc]: `【欲神降临 异界幻想】`,
        [Locale.en]: `[Rise of Eros]`,
        [Locale.jp]: `「エロスの降臨 異世界幻想」`,
        [Locale.kr]: `【원욕의 신 강림】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0112,
    newUnit: [ UnitCode.inase, UnitCode.cartilla ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0111