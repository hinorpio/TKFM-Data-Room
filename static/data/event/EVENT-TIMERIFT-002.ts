import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_002: Event = {
    code: 'TIMERIFT_002',
    type: EventType.TIMERIFT,
    startDate: '2021/10/13',
    endDate: '2021/12/29',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第二季`,
        [Locale.sc]: `【时之裂缝】第二季`,
        [Locale.en]: `[Time Rift] Season 2`,
        [Locale.jp]: `「時空の裂け目」第2シーズン`,
        [Locale.kr]: `【시공간의 균열】 제2시즌`
    },
    image: EventBanner.EVENT_TIMERIFT,
    newUnit: []
}

export default EVENT_TIMERIFT_002