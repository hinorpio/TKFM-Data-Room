import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0139: Event = {
    code: '0139',
    type: EventType.CHALLENGE,
    startDate: '2024/07/10',
    endDate: '2024/07/17',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【海盜王的祕寶-復刻-】`,
        [Locale.sc]: `【海盗王的秘宝-复刻-】`,
        [Locale.en]: `[PirateKing's Treasure -Comeback-]`,
        [Locale.jp]: `「海賊王の秘宝-復刻-」`,
        [Locale.kr]: `【해적왕의 비보-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0139,
    newUnit: []
}

export default EVENT_0139