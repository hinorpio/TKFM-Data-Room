import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0195: Event = {
    code: '0195',
    type: EventType.CHALLENGE,
    startDate: '2025/10/08',
    endDate: '2025/10/15',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【Let's Party All Night！-復刻-】`,
        [Locale.sc]: `【Let's Party All Night！-复刻-】`,
        [Locale.en]: `[Let's Party All Night！ -Comeback-]`,
        [Locale.jp]: `「Let's Party All Night！-復刻-」`,
        [Locale.kr]: `【Let's Party All Night！-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0195,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0195