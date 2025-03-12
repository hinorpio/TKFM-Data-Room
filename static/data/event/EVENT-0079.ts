import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0079: Event = {
    code: '0079',
    type: EventType.POINT,
    startDate: '2023/02/08',
    endDate: '2023/03/01',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【甜蜜陷阱 巧克力大騷動】`,
        [Locale.sc]: `【甜蜜陷阱 巧克力大骚动】`,
        [Locale.en]: `[Chocolate Frenzy]`,
        [Locale.jp]: `「チョコレート大騒動」`,
        [Locale.kr]: `【초콜릿 대소동】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0079,
    newUnit: [ UnitCode.v_baal, UnitCode.v_iblis, UnitCode.v_satan ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0079