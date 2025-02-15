import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0025: Event = {
    code: '0025',
    type: EventType.CHALLENGE,
    startDate: '2021/09/15',
    endDate: '2021/09/29',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【狂歡之夜】`,
        [Locale.sc]: `【狂欢之夜】`,
        [Locale.en]: `[Festival Prep Pts]`,
        [Locale.jp]: `「狂喜の夜」`,
        [Locale.kr]: `【환락의 밤】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0025,
    newUnit: []
}

export default EVENT_0025