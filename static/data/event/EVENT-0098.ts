import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0098: Event = {
    code: '0098',
    type: EventType.CHALLENGE,
    startDate: '2023/07/19',
    endDate: '2023/08/02',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【海盜王的祕寶】`,
        [Locale.sc]: `【海盗王的秘宝】`,
        [Locale.en]: `[PirateKing's Treasure]`,
        [Locale.jp]: `「海賊王の秘宝」`,
        [Locale.kr]: `【해적왕의 비보】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0098,
    newUnit: []
}

export default EVENT_0098