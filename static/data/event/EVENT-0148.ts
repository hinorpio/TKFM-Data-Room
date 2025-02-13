import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0148: Event = {
    code: '0148',
    type: EventType.POINT,
    startDate: '2024/09/11',
    endDate: '2024/10/12',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【本大爺娛樂城】`,
        [Locale.sc]: `【本大爷娱乐城】`,
        [Locale.en]: `[Master's Wonderland]`,
        [Locale.jp]: `「俺様のカジノ」`,
        [Locale.kr]: `【이 몸의 카지노】`
    },
    image: EventBanner.EVENT_0148,
    newUnit: [ UnitCode.amethystina, UnitCode.bg_ayane, UnitCode.bg_iblis ]
}

export default EVENT_0148