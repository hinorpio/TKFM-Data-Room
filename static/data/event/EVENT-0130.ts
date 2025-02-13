import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0130: Event = {
    code: '0130',
    type: EventType.POINT,
    startDate: '2024/04/24',
    endDate: '2024/05/08',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【傳說中的魔法少女-復刻-】`,
        [Locale.sc]: `【传说中的魔法少女-复刻-】`,
        [Locale.en]: `[Legendary Magical Maiden -Comeback-]`,
        [Locale.jp]: `「伝説の魔法少女-復刻-」`,
        [Locale.kr]: `【전설의 마법소녀-복각-】`
    },
    image: EventBanner.EVENT_0130,
    newUnit: []
}

export default EVENT_0130