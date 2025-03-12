import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0073: Event = {
    code: '0073',
    type: EventType.CHALLENGE,
    startDate: '2022/12/28',
    endDate: '2023/01/11',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【雪色聖誕夜】`,
        [Locale.sc]: `【雪色圣诞夜】`,
        [Locale.en]: `[White Christmas]`,
        [Locale.jp]: `「雪色のクリスマス・イヴ」`,
        [Locale.kr]: `【화이트 크리스마스】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0073,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0073