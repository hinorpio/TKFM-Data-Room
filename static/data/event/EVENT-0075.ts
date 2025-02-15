import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0075: Event = {
    code: '0075',
    type: EventType.CHALLENGE,
    startDate: '2023/01/11',
    endDate: '2023/01/18',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【正月遊戲-復刻-】`,
        [Locale.sc]: `【正月游戏-复刻-】`,
        [Locale.en]: `[True Moon Game -Comeback-]`,
        [Locale.jp]: `「正月お遊戯-復刻-」`,
        [Locale.kr]: `【정월 놀이-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0075,
    newUnit: []
}

export default EVENT_0075