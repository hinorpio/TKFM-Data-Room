import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0055: Event = {
    code: '0055',
    type: EventType.CHALLENGE,
    startDate: '2022/08/10',
    endDate: '2022/08/24',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【Let's Party All Night！】`,
        [Locale.sc]: `【Let's Party All Night！】`,
        [Locale.en]: `[Let's Party All Night！]`,
        [Locale.jp]: `「Let's Party All Night！」`,
        [Locale.kr]: `【Let's Party All Night！】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0055,
    newUnit: []
}

export default EVENT_0055