import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0164: Event = {
    code: '0164',
    type: EventType.POINT,
    startDate: '2025/01/22',
    endDate: '2025/02/12',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【精遊記】`,
        [Locale.sc]: `【精游记】`,
        [Locale.en]: `[Journey to the Jizz]`,
        [Locale.jp]: `「精遊記」`,
        [Locale.kr]: `【정유기】`
    },
    image: EventBanner.EVENT_0164,
    newUnit: [ UnitCode.ny_fiora, UnitCode.zaskia ]
}

export default EVENT_0164