import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0029: Event = {
    code: '0029',
    type: EventType.POINT,
    startDate: '2021/10/27',
    endDate: '2021/11/17',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【萬聖大驚奇】`,
        [Locale.sc]: `【万圣大惊奇】`,
        [Locale.en]: `[Halloween Surprise]`,
        [Locale.jp]: `「ハロウィンのサプライズ」`,
        [Locale.kr]: `【할로윈 서프라이즈】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0029,
    newUnit: [ UnitCode.h_britney, UnitCode.h_salucia ]
}

export default EVENT_0029