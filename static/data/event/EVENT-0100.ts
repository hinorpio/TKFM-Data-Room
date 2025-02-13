import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0100: Event = {
    code: '0100',
    type: EventType.DISCIPLINE,
    startDate: '2023/07/26',
    endDate: '2023/08/09',
    color: EventTypeColor.DISCIPLINE,
    name: {
        [Locale.tc]: `【魔法少女☆托特拉-復刻-】`,
        [Locale.sc]: `【魔法少女☆托特拉-复刻-】`,
        [Locale.en]: `[Knight ☆ Tyrella -Comeback-]`,
        [Locale.jp]: `「魔法少女☆トトラ-復刻-」`,
        [Locale.kr]: `【마법소녀☆토타라-복각-】`
    },
    image: EventBanner.EVENT_0100,
    newUnit: []
}

export default EVENT_0100