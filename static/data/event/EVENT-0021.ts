import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0021: Event = {
    code: '0021',
    type: EventType.POINT,
    startDate: '2021/08/04',
    endDate: '2021/08/25',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【裁縫的大搜查線】`,
        [Locale.sc]: `【裁缝的大搜查线】`,
        [Locale.en]: `[Tailors' Investigation]`,
        [Locale.jp]: `「裁縫大捜査線」`,
        [Locale.kr]: `【재봉의 대수사선】`
    },
    image: EventBanner.EVENT_0021,
    newUnit: [ UnitCode.asida, UnitCode.asina ]
}

export default EVENT_0021