import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0213: Event = {
    code: '0213',
    type: EventType.CHALLENGE,
    startDate: '2026/03/04',
    endDate: '2026/03/11',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【巧克力帝國的野心-復刻-】`,
        [Locale.sc]: `【巧克力帝国的野心-复刻-】`,
        [Locale.en]: `[Chocolate Ambitions -Comeback-]`,
        [Locale.jp]: `「チョコレート帝国の野心-復刻-」`,
        [Locale.kr]: `【초콜릿 제국의 야심-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0213,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0213