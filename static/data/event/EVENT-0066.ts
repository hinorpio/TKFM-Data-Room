import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0066: Event = {
    code: '0066',
    type: EventType.CHALLENGE,
    startDate: '2022/11/09',
    endDate: '2022/11/16',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【洛緹亞萬聖塔】`,
        [Locale.sc]: `【洛缇亚万圣塔】`,
        [Locale.en]: `[Halloween Tower]`,
        [Locale.jp]: `「ラティヤハロウィンタワー」`,
        [Locale.kr]: `【로티아 할로윈 탑】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0066,
    newUnit: []
}

export default EVENT_0066