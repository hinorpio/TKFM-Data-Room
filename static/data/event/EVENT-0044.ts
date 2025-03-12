import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0044: Event = {
    code: '0044',
    type: EventType.CHALLENGE,
    startDate: '2022/04/06',
    endDate: '2022/04/20',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【魔王的三個挑戰】`,
        [Locale.sc]: `【魔王的三个挑战】`,
        [Locale.en]: `[Three Challenges]`,
        [Locale.jp]: `「魔王の3つの挑戦」`,
        [Locale.kr]: `【마왕의 세 가지 도전】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0044,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0044