import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0006_CHALLENGE: Event = {
    code: '0006_CHALLENGE',
    type: EventType.CHALLENGE,
    startDate: '2021/02/17',
    endDate: '2021/02/24',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【天下第一偶像大會】`,
        [Locale.sc]: `【天下第一偶像大会】`,
        [Locale.en]: `[The Idol Smashdown]`,
        [Locale.jp]: `「天下一アイドル大会」`,
        [Locale.kr]: `【천하제일 아이돌 대회】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0006_CHALLENGE,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0006_CHALLENGE