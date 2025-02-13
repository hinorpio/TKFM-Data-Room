import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0163: Event = {
    code: '0163',
    type: EventType.CHALLENGE,
    startDate: '2025/01/15',
    endDate: '2025/01/22',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【勝負！風林火山-復刻-】`,
        [Locale.sc]: `【胜负！风林火山-复刻-】`,
        [Locale.en]: `[The Final Battle! -Comeback-]`,
        [Locale.jp]: `「勝負！風林火山-復刻-」`,
        [Locale.kr]: `【승부! 풍림화산-복각-】`
    },
    image: EventBanner.EVENT_0163,
    newUnit: []
}

export default EVENT_0163