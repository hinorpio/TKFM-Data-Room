import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0084: Event = {
    code: '0084',
    type: EventType.POINT,
    startDate: '2023/03/22',
    endDate: '2023/04/07',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【魔境奇遊~LuLu的奇幻旅程~-復刻-】`,
        [Locale.sc]: `【魔境奇游~LuLu的奇幻旅程~-复刻-】`,
        [Locale.en]: `[Lulu in Wonderland -Comeback-]`,
        [Locale.jp]: `「不思議の旅-復刻-」`,
        [Locale.kr]: `【기묘한 여정-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0084,
    newUnit: []
}

export default EVENT_0084