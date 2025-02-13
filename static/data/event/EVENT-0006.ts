import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0006: Event = {
    code: '0006',
    type: EventType.POINT,
    startDate: '2021/02/08',
    endDate: '2021/02/24',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【魔界偶像大騷動】`,
        [Locale.sc]: `【魔界偶像大骚动】`,
        [Locale.en]: `[Demon Realm's Top Idol]`,
        [Locale.jp]: `「魔界アイドル大騒動」`,
        [Locale.kr]: `【마계 아이돌 대소동】`
    },
    image: EventBanner.EVENT_0006,
    newUnit: []
}

export default EVENT_0006