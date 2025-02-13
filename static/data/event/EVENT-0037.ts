import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0037: Event = {
    code: '0037',
    type: EventType.POINT,
    startDate: '2022/01/26',
    endDate: '2022/02/16',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【正月祭典】`,
        [Locale.sc]: `【正月祭典】`,
        [Locale.en]: `[True Moon Festival]`,
        [Locale.jp]: `「正月の祭典」`,
        [Locale.kr]: `【정월 축제】`
    },
    image: EventBanner.EVENT_0037,
    newUnit: [ UnitCode.tm_minayomi, UnitCode.tm_ritsuki ]
}

export default EVENT_0037