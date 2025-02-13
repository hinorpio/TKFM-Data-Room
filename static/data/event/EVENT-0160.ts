import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0160: Event = {
    code: '0160',
    type: EventType.POINT,
    startDate: '2024/12/11',
    endDate: '2025/01/08',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【聖誕的少女想要愛】`,
        [Locale.sc]: `【圣诞的少女想要爱】`,
        [Locale.en]: `[Christmas Love]`,
        [Locale.jp]: `「クリスマス少女は愛がほしい」`,
        [Locale.kr]: `【크리스마스 소녀는 사랑을 원해】`
    },
    image: EventBanner.EVENT_0160,
    newUnit: [ UnitCode.x_baal, UnitCode.x_muila, UnitCode.x_britney, UnitCode.x_ichika ]
}

export default EVENT_0160