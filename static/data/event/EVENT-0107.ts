import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0107: Event = {
    code: '0107',
    type: EventType.POTENTIAL,
    startDate: '2023/10/04',
    endDate: '2023/10/18',
    color: EventTypeColor.POTENTIAL,
    name: {
        [Locale.tc]: `【疾速奔馳！人馬娘！-復刻-】`,
        [Locale.sc]: `【疾速奔驰！人马娘！-复刻-】`,
        [Locale.en]: `[Dashing Centaur! -Comeback-]`,
        [Locale.jp]: `「走れ！ケンタウロス娘！-復刻-」`,
        [Locale.kr]: `【질주해라 켄타우로스 소녀!-복각-】`
    },
    image: EventBanner.EVENT_0107,
    newUnit: []
}

export default EVENT_0107