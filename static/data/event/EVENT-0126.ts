import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0126: Event = {
    code: '0126',
    type: EventType.DISCIPLINE,
    startDate: '2024/03/20',
    endDate: '2024/04/02',
    color: EventTypeColor.DISCIPLINE,
    name: {
        [Locale.tc]: `【女僕&魔法-復刻-】`,
        [Locale.sc]: `【女仆&魔法-复刻-】`,
        [Locale.en]: `[Magic & Maids -Comeback-]`,
        [Locale.jp]: `「メイド&マジック-復刻-」`,
        [Locale.kr]: `【메이드&마법-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0126,
    newUnit: []
}

export default EVENT_0126