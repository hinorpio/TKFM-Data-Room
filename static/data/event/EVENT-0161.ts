import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0161: Event = {
    code: '0161',
    type: EventType.CHALLENGE,
    startDate: '2024/12/25',
    endDate: '2025/01/08',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【聖誕無戰事】`,
        [Locale.sc]: `【圣诞无战事】`,
        [Locale.en]: `[No Battle on Christmas]`,
        [Locale.jp]: `「クリスマス休戦」`,
        [Locale.kr]: `【크리스마스의 평화】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0161,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0161