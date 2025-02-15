import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0043: Event = {
    code: '0043',
    type: EventType.POINT,
    startDate: '2022/03/30',
    endDate: '2022/04/20',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【凱薩½】`,
        [Locale.sc]: `【凯萨½】`,
        [Locale.en]: `[Caesar½]`,
        [Locale.jp]: `「シーザー½」`,
        [Locale.kr]: `【시저½】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0043,
    newUnit: [ UnitCode.f_caesar ]
}

export default EVENT_0043