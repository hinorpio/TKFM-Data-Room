import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0218: Event = {
    code: '0218',
    type: EventType.EVOLVE,
    startDate: '2026/04/22',
    endDate: '2026/05/06',
    color: EventTypeColor.EVOLVE,
    name: {
        [Locale.tc]: `【獵犬小隊派遣中！-復刻-】`,
        [Locale.sc]: `【猎犬小队派遣中！-复刻-】`,
        [Locale.en]: `[Hunters Dispatched! -Comeback-]`,
        [Locale.jp]: `「ハウンド小隊派遣中！-復刻-」`,
        [Locale.kr]: `【하운드 소대 파견 중!-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0218,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0218