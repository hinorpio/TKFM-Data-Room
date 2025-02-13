import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0085: Event = {
    code: '0085',
    type: EventType.CHALLENGE,
    startDate: '2023/03/29',
    endDate: '2023/04/07',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【法庭派對-復刻-】`,
        [Locale.sc]: `【法庭派对-复刻-】`,
        [Locale.en]: `[Court Party -Comeback-]`,
        [Locale.jp]: `「法廷パーティー-復刻-」`,
        [Locale.kr]: `【법정 파티-복각-】`
    },
    image: EventBanner.EVENT_0085,
    newUnit: []
}

export default EVENT_0085