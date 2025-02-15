import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0058: Event = {
    code: '0058',
    type: EventType.CHALLENGE,
    startDate: '2022/09/21',
    endDate: '2022/09/28',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【朋友與加班】`,
        [Locale.sc]: `【朋友与加班】`,
        [Locale.en]: `[Friends and Overtime]`,
        [Locale.jp]: `「友達と残業」`,
        [Locale.kr]: `【친구와 야근】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0058,
    newUnit: []
}

export default EVENT_0058