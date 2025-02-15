import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0086: Event = {
    code: '0086',
    type: EventType.POINT,
    startDate: '2023/04/07',
    endDate: '2023/04/26',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【傳說中的魔法少女】`,
        [Locale.sc]: `【传说中的魔法少女】`,
        [Locale.en]: `[Legendary Magical Maiden]`,
        [Locale.jp]: `「伝説の魔法少女」`,
        [Locale.kr]: `【전설의 마법소녀】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0086,
    newUnit: [ UnitCode.juneau, UnitCode.britney ]
}

export default EVENT_0086