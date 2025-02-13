import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0165: Event = {
    code: '0165',
    type: EventType.CHALLENGE,
    startDate: '2025/02/05',
    endDate: '2025/02/12',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【凱薩大鬧火焰山】`,
        [Locale.sc]: `【凯萨大闹火焰山】`,
        [Locale.en]: `[Caesar's Moutain Hellfire]`,
        [Locale.jp]: `「シーザーが火焔山で大暴れ」`,
        [Locale.kr]: `【시저의 화염산 대소동】`
    },
    image: EventBanner.EVENT_0165,
    newUnit: []
}

export default EVENT_0165