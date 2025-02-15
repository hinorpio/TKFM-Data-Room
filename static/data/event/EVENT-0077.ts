import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0077: Event = {
    code: '0077',
    type: EventType.CHALLENGE,
    startDate: '2023/01/25',
    endDate: '2023/02/08',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【勝負！風林火山】`,
        [Locale.sc]: `【胜负！风林火山】`,
        [Locale.en]: `[The Final Battle!]`,
        [Locale.jp]: `「勝負！風林火山」`,
        [Locale.kr]: `【승부! 풍림화산】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0077,
    newUnit: []
}

export default EVENT_0077