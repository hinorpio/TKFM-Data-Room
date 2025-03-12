import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0012: Event = {
    code: '0012',
    type: EventType.SPECIAL,
    startDate: '2021/05/05',
    endDate: '2021/05/19',
    color: EventTypeColor.SPECIAL,
    name: {
        [Locale.tc]: `【復活的「C」】`,
        [Locale.sc]: `【复活的「C」】`,
        [Locale.en]: `[Resurrected "C"]`,
        [Locale.jp]: `「復活した「C」」`,
        [Locale.kr]: `【부활한 [C]】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0012,
    newUnit: [ UnitCode.chizuru ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0012