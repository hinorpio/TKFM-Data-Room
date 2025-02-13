import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0103: Event = {
    code: '0103',
    type: EventType.POINT,
    startDate: '2023/08/30',
    endDate: '2023/09/13',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【裁縫的大搜查線-復刻-】`,
        [Locale.sc]: `【裁缝的大搜查线-复刻-】`,
        [Locale.en]: `[Tailors' Investigation -Comeback-]`,
        [Locale.jp]: `「裁縫大捜査線-復刻-」`,
        [Locale.kr]: `【재봉의 대수사선-복각-】`
    },
    image: EventBanner.EVENT_0103,
    newUnit: []
}

export default EVENT_0103