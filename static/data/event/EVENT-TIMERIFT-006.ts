import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_006: Event = {
    code: 'TIMERIFT_006',
    type: EventType.TIMERIFT,
    startDate: '2022/08/03',
    endDate: '2022/10/19',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第六季`,
        [Locale.sc]: `【时之裂缝】第六季`,
        [Locale.en]: `[Time Rift] Season 6`,
        [Locale.jp]: `「時空の裂け目」第6シーズン`,
        [Locale.kr]: `【시공간의 균열】 제6시즌`
    },
    image: EventBanner.EVENT_TIMERIFT,
    newUnit: []
}

export default EVENT_TIMERIFT_006