import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0062: Event = {
    code: '0062',
    type: EventType.POINT,
    startDate: '2022/09/28',
    endDate: '2022/10/12',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【魔界偶像大騷動-復刻-】`,
        [Locale.sc]: `【魔界偶像大骚动-复刻-】`,
        [Locale.en]: `[Demon Realm's Top Idol -Comeback-]`,
        [Locale.jp]: `「魔界アイドル大騒動-復刻-」`,
        [Locale.kr]: `【마계 아이돌 대소동-복각-】`
    },
    image: EventBanner.EVENT_0062,
    newUnit: []
}

export default EVENT_0062