import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0138: Event = {
    code: '0138',
    type: EventType.POINT,
    startDate: '2024/07/03',
    endDate: '2024/07/17',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【向大洋進發-復刻-】`,
        [Locale.sc]: `【向大洋进发-复刻-】`,
        [Locale.en]: `[Sail Across the Ocean -Comeback-]`,
        [Locale.jp]: `「大海原へ進め！-復刻-」`,
        [Locale.kr]: `【대양을 향해 전진-복각-】`
    },
    image: EventBanner.EVENT_0138,
    newUnit: []
}

export default EVENT_0138