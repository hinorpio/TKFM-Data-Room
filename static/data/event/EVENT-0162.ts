import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0162: Event = {
    code: '0162',
    type: EventType.POINT,
    startDate: '2025/01/08',
    endDate: '2025/01/22',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【風雲！新春大運動會-復刻-】`,
        [Locale.sc]: `【风云！新春大运动会-复刻-】`,
        [Locale.en]: `[Field Day -Comeback-]`,
        [Locale.jp]: `「風雲！新春大運動会-復刻-」`,
        [Locale.kr]: `【풍운! 신춘 대운동회-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0162,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0162