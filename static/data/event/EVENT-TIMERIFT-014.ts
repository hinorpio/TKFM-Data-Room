import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_014: Event = {
    code: 'TIMERIFT_014',
    type: EventType.TIMERIFT,
    startDate: '2024/03/13',
    endDate: '2024/05/01',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第十四季`,
        [Locale.sc]: `【时之裂缝】第十四季`,
        [Locale.en]: `[Time Rift] Season 14`,
        [Locale.jp]: `「時空の裂け目」第14シーズン`,
        [Locale.kr]: `【시공간의 균열】 제14시즌`
    },
    image: EventBanner.EVENT_TIMERIFT,
    newUnit: []
}

export default EVENT_TIMERIFT_014