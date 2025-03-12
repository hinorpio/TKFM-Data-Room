import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0074: Event = {
    code: '0074',
    type: EventType.POINT,
    startDate: '2023/01/04',
    endDate: '2023/01/18',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【正月祭典-復刻-】`,
        [Locale.sc]: `【正月祭典-复刻-】`,
        [Locale.en]: `[True Moon Festival -Comeback-]`,
        [Locale.jp]: `「正月の祭典-復刻-」`,
        [Locale.kr]: `【정월 축제-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0074,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0074