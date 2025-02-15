import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0109: Event = {
    code: '0109',
    type: EventType.POINT,
    startDate: '2023/10/18',
    endDate: '2023/11/08',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【萬聖鹿娘大橫行！】`,
        [Locale.sc]: `【万圣鹿娘大横行！】`,
        [Locale.en]: `[HW Deer Gal Cometh!]`,
        [Locale.jp]: `「ハロウィン鹿娘大暴走！」`,
        [Locale.kr]: `【할로윈 순록의 대횡포!】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0109,
    newUnit: [ UnitCode.h_ayane, UnitCode.h_shiro ]
}

export default EVENT_0109