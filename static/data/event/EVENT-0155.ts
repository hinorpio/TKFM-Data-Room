import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0155: Event = {
    code: '0155',
    type: EventType.DISCIPLINE,
    startDate: '2024/10/30',
    endDate: '2024/11/13',
    color: EventTypeColor.DISCIPLINE,
    name: {
        [Locale.tc]: `【異世界情趣店-復刻-】`,
        [Locale.sc]: `【异世界情趣店-复刻-】`,
        [Locale.en]: `[Parallel Paradise Toys -Comeback-]`,
        [Locale.jp]: `「異世界アダルトショップ-復刻-」`,
        [Locale.kr]: `【이세계 성인용품점-복각-】`
    },
    image: EventBanner.EVENT_0155,
    newUnit: []
}

export default EVENT_0155