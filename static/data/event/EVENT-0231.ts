import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0231: Event = {
    code: '0231',
    type: EventType.POINT,
    startDate: '2026/08/26',
    endDate: '2026/09/09',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【本大爺娛樂城-復刻-】`,
        [Locale.sc]: `【本大爷娱乐城-复刻-】`,
        [Locale.en]: `[Master's Wonderland -Comeback-]`,
        [Locale.jp]: `「俺様のカジノ-復刻-」`,
        [Locale.kr]: `【이 몸의 카지노-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0231,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0231
