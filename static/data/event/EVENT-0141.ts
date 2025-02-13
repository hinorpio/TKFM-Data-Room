import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0141: Event = {
    code: '0141',
    type: EventType.POINT,
    startDate: '2024/07/17',
    endDate: '2024/08/07',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【魔界飯】`,
        [Locale.sc]: `【魔界饭】`,
        [Locale.en]: `[Demon Rice]`,
        [Locale.jp]: `「魔界飯」`,
        [Locale.kr]: `【마계밥】`
    },
    image: EventBanner.EVENT_0141,
    newUnit: [ UnitCode.d_minayomi, UnitCode.oniyoiki ]
}

export default EVENT_0141