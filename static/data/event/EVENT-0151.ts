import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0151: Event = {
    code: '0151',
    type: EventType.POINT,
    startDate: '2024/10/02',
    endDate: '2024/10/16',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【萬聖大驚奇-復刻-】`,
        [Locale.sc]: `【万圣大惊奇-复刻-】`,
        [Locale.en]: `[Halloween Surprise -Comeback-]`,
        [Locale.jp]: `「ハロウィンのサプライズ-復刻-」`,
        [Locale.kr]: `【할로윈 서프라이즈-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0151,
    newUnit: []
}

export default EVENT_0151