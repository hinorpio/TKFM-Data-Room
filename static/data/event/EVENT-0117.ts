import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0117: Event = {
    code: '0117',
    type: EventType.POINT,
    startDate: '2024/01/17',
    endDate: '2024/02/05',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【獵犬小隊派遣中！】`,
        [Locale.sc]: `【猎犬小队派遣中！】`,
        [Locale.en]: `[Hunters Dispatched!]`,
        [Locale.jp]: `「ハウンド小隊派遣中！」`,
        [Locale.kr]: `【하운드 소대 파견 중!】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0117,
    newUnit: [ UnitCode.noma, UnitCode.belladonna ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0117