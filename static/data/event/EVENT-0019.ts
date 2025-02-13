import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0019: Event = {
    code: '0019',
    type: EventType.DISCIPLINE,
    startDate: '2021/07/21',
    endDate: '2021/07/28',
    color: EventTypeColor.DISCIPLINE,
    name: {
        [Locale.tc]: `【魔法少女☆托特拉】`,
        [Locale.sc]: `【魔法少女☆托特拉】`,
        [Locale.en]: `[Knight ☆ Tyrella]`,
        [Locale.jp]: `「魔法少女☆トトラ」`,
        [Locale.kr]: `【마법소녀☆토타라】`
    },
    image: EventBanner.EVENT_0019,
    newUnit: [ UnitCode.tyrella ]
}

export default EVENT_0019