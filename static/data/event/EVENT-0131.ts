import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0131: Event = {
    code: '0131',
    type: EventType.CHALLENGE,
    startDate: '2024/05/01',
    endDate: '2024/05/08',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【正義、智謀與魔杖-復刻-】`,
        [Locale.sc]: `【正义、智谋与魔杖-复刻-】`,
        [Locale.en]: `[Wise Wand & Justice -Comeback-]`,
        [Locale.jp]: `「正義・知謀・魔法の杖-復刻-」`,
        [Locale.kr]: `【정의, 지략, 마법봉-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0131,
    newUnit: []
}

export default EVENT_0131