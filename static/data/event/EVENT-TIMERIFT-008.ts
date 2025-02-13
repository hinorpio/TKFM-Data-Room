import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_008: Event = {
    code: 'TIMERIFT_008',
    type: EventType.TIMERIFT,
    startDate: '2022/12/21',
    endDate: '2023/03/08',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第八季`,
        [Locale.sc]: `【时之裂缝】第八季`,
        [Locale.en]: `[Time Rift] Season 8`,
        [Locale.jp]: `「時空の裂け目」第8シーズン`,
        [Locale.kr]: `【시공간의 균열】 제8시즌`
    },
    image: EventBanner.EVENT_TIMERIFT,
    newUnit: []
}

export default EVENT_TIMERIFT_008