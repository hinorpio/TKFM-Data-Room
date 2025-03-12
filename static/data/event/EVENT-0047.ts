import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0047: Event = {
    code: '0047',
    type: EventType.CHALLENGE,
    startDate: '2022/05/04',
    endDate: '2022/05/11',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【法庭派對】`,
        [Locale.sc]: `【法庭派对】`,
        [Locale.en]: `[Court Party]`,
        [Locale.jp]: `「法廷パーティー」`,
        [Locale.kr]: `【법정 파티】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0047,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0047