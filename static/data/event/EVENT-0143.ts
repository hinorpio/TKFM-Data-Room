import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0143: Event = {
    code: '0143',
    type: EventType.POTENTIAL,
    startDate: '2024/07/31',
    endDate: '2024/08/14',
    color: EventTypeColor.POTENTIAL,
    name: {
        [Locale.tc]: `【魔王城夜未眠-復刻-】`,
        [Locale.sc]: `【魔王城无眠夜-复刻-】`,
        [Locale.en]: `[Sleepless Palace -Comeback-]`,
        [Locale.jp]: `「魔王城の眠らぬ夜-復刻-」`,
        [Locale.kr]: `【마왕성 잠 못 이루는 밤-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0143,
    newUnit: []
}

export default EVENT_0143