import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0005: Event = {
    code: '0005',
    type: EventType.SIDESTORY,
    startDate: '2021/02/03',
    endDate: '2021/02/24',
    color: EventTypeColor.SIDESTORY,
    name: {
        [Locale.tc]: `【外傳：超時空偶像】`,
        [Locale.sc]: `【外传：超时空偶像】`,
        [Locale.en]: `[Time-Traveling Idol]`,
        [Locale.jp]: `「外伝：超時空アイドル」`,
        [Locale.kr]: `【외전: 시공초월 아이돌】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0005,
    newUnit: [ UnitCode.noel, UnitCode.i_iblis ]
}

export default EVENT_0005