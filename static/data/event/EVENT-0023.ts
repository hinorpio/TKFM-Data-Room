import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0023: Event = {
    code: '0023',
    type: EventType.POTENTIAL,
    startDate: '2021/08/25',
    endDate: '2021/09/08',
    color: EventTypeColor.POTENTIAL,
    name: {
        [Locale.tc]: `【魔王城夜未眠】`,
        [Locale.sc]: `【魔王城无眠夜】`,
        [Locale.en]: `[Sleepless Palace]`,
        [Locale.jp]: `「魔王城の眠らぬ夜」`,
        [Locale.kr]: `【마왕성 잠 못 이루는 밤】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0023,
    newUnit: [ UnitCode.aridya, UnitCode.lotiya ]
}

export default EVENT_0023