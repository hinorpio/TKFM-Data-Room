import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0142: Event = {
    code: '0142',
    type: EventType.CHALLENGE,
    startDate: '2024/07/24',
    endDate: '2024/08/07',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【修行之路】`,
        [Locale.sc]: `【修行之路】`,
        [Locale.en]: `[Disciple's Path]`,
        [Locale.jp]: `「修行の道」`,
        [Locale.kr]: `【수행의 길】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0142,
    newUnit: []
}

export default EVENT_0142