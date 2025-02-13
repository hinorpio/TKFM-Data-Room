import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0094: Event = {
    code: '0094',
    type: EventType.POINT,
    startDate: '2023/06/07',
    endDate: '2023/07/05',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【泳裝賽艇大作戰】`,
        [Locale.sc]: `【泳装赛艇大作战】`,
        [Locale.en]: `[Swimsuits & Rowing]`,
        [Locale.jp]: `「水着競艇大作戦」`,
        [Locale.kr]: `【수영복 카누 대작전】`
    },
    image: EventBanner.EVENT_0094,
    newUnit: [ UnitCode.s_ayane, UnitCode.s_baal, UnitCode.s_fiora, UnitCode.s_aiko ]
}

export default EVENT_0094