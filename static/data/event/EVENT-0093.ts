import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0093: Event = {
    code: '0093',
    type: EventType.POTENTIAL,
    startDate: '2023/05/24',
    endDate: '2023/06/07',
    color: EventTypeColor.POTENTIAL,
    name: {
        [Locale.tc]: `【魔王城夜未眠-復刻-】`,
        [Locale.sc]: `【魔王城无眠夜-复刻-】`,
        [Locale.en]: `[Sleepless Palace -Comeback-]`,
        [Locale.jp]: `「魔王城の眠らぬ夜-復刻-」`,
        [Locale.kr]: `【마왕성 잠 못 이루는 밤-복각-】`
    },
    image: EventBanner.EVENT_0093,
    newUnit: []
}

export default EVENT_0093