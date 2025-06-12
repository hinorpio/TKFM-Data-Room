import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0063: Event = {
    code: '0063',
    type: EventType.CHALLENGE,
    startDate: '2022/10/05',
    endDate: '2022/10/12',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【天下第一偶像大會-復刻-】`,
        [Locale.sc]: `【天下第一偶像大会-复刻-】`,
        [Locale.en]: `[The Idol Smashdown -Comeback-]`,
        [Locale.jp]: `「天下一アイドル大会-復刻-」`,
        [Locale.kr]: `【천하제일 아이돌 대회-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0063,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0063