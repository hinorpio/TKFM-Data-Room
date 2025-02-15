import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0067: Event = {
    code: '0067',
    type: EventType.DISCIPLINE,
    startDate: '2022/11/09',
    endDate: '2022/11/23',
    color: EventTypeColor.DISCIPLINE,
    name: {
        [Locale.tc]: `【異世界情趣店-復刻-】`,
        [Locale.sc]: `【异世界情趣店-复刻-】`,
        [Locale.en]: `[Parallel Paradise Toys -Comeback-]`,
        [Locale.jp]: `「異世界アダルトショップ-復刻-」`,
        [Locale.kr]: `【이세계 성인용품점-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0067,
    newUnit: []
}

export default EVENT_0067