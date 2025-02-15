import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0134: Event = {
    code: '0134',
    type: EventType.EVOLVE,
    startDate: '2024/05/22',
    endDate: '2024/06/05',
    color: EventTypeColor.EVOLVE,
    name: {
        [Locale.tc]: `【魔族朋友-復刻-】`,
        [Locale.sc]: `【魔族朋友-复刻-】`,
        [Locale.en]: `[Demon Friends -Comeback-]`,
        [Locale.jp]: `「魔族の友達-復刻-」`,
        [Locale.kr]: `【마족 친구-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0134,
    newUnit: []
}

export default EVENT_0134