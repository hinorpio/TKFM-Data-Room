import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0061: Event = {
    code: '0061',
    type: EventType.SIDESTORY,
    startDate: '2022/09/28',
    endDate: '2022/10/12',
    color: EventTypeColor.SIDESTORY,
    name: {
        [Locale.tc]: `【外傳：超時空偶像-復刻-】`,
        [Locale.sc]: `【外传：超时空偶像-复刻-】`,
        [Locale.en]: `[Time-Traveling Idol -Comeback-]`,
        [Locale.jp]: `「外伝：超時空アイドル-復刻-」`,
        [Locale.kr]: `【외전: 시공초월 아이돌-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0061,
    newUnit: []
}

export default EVENT_0061