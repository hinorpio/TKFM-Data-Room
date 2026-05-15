import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0222: Event = {
    code: '0222',
    type: EventType.POINT,
    startDate: '2026/05/20',
    endDate: '2026/06/03',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【媽媽咪呀-復刻-】`,
        [Locale.sc]: `【妈妈咪呀-复刻-】`,
        [Locale.en]: `[Mommy Mia! -Comeback-]`,
        [Locale.jp]: `「マンマミーア！-復刻-」`,
        [Locale.kr]: `【맘마미아-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0222,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0222