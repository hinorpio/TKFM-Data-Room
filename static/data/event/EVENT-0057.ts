import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0057: Event = {
    code: '0057',
    type: EventType.POINT,
    startDate: '2022/09/07',
    endDate: '2022/09/28',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【來自星空的妳】`,
        [Locale.sc]: `【来自星空的妳】`,
        [Locale.en]: `[From the Stars]`,
        [Locale.jp]: `「星から来たあなた」`,
        [Locale.kr]: `【별에서 온 그녀】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0057,
    newUnit: [ UnitCode.c1_nana, UnitCode.geneva ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0057