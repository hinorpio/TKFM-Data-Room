import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0182: Event = {
    code: '0182',
    type: EventType.POINT,
    startDate: '2025/06/11',
    endDate: '2025/07/09',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【深海的逆襲者】`,
        [Locale.sc]: `【深海的逆袭者】`,
        [Locale.en]: `[Sea Counterattacker]`,
        [Locale.jp]: `「深海の逆襲者」`,
        [Locale.kr]: `【심해의 역습자】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0182,
    newUnit: [ UnitCode.ss_iblis, UnitCode.s_evie, UnitCode.s_noma, UnitCode.forneusa ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0182