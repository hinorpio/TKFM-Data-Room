import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0174: Event = {
    code: '0174',
    type: EventType.POINT,
    startDate: '2025/04/09',
    endDate: '2025/04/30',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【舞動奇姬】`,
        [Locale.sc]: `【舞动奇姬】`,
        [Locale.en]: `[Dancing Queen]`,
        [Locale.jp]: `「舞い踊る姫」`,
        [Locale.kr]: `【춤추는 공주】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0174,
    newUnit: [ UnitCode.c_noel, UnitCode.eunice ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0174