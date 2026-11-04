import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0238: Event = {
    code: '0238',
    type: EventType.POINT,
    startDate: '2026/10/21',
    endDate: '2026/11/04',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【萬聖鹿娘大橫行！-復刻-】`,
        [Locale.sc]: `【万圣鹿娘大横行！-复刻-】`,
        [Locale.en]: `[The Halloween Deer Gal Cometh! -Comeback-]`,
        [Locale.jp]: `「ハロウィン鹿娘オーバーラン！-復刻-」`,
        [Locale.kr]: `【할로윈 순록의 대횡포!-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0238,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0238
