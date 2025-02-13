import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0147: Event = {
    code: '0147',
    type: EventType.CHALLENGE,
    startDate: '2024/09/04',
    endDate: '2024/09/11',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【朋友與加班-復刻-】`,
        [Locale.sc]: `【朋友与加班-复刻-】`,
        [Locale.en]: `[Friends and Overtime -Comeback-]`,
        [Locale.jp]: `「友達と残業-復刻-」`,
        [Locale.kr]: `【친구와 야근-복각-】`
    },
    image: EventBanner.EVENT_0147,
    newUnit: []
}

export default EVENT_0147