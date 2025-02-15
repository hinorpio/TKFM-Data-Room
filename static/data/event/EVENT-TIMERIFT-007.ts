import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_007: Event = {
    code: 'TIMERIFT_007',
    type: EventType.TIMERIFT,
    startDate: '2022/10/19',
    endDate: '2022/12/21',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第七季`,
        [Locale.sc]: `【时之裂缝】第七季`,
        [Locale.en]: `[Time Rift] Season 7`,
        [Locale.jp]: `「時空の裂け目」第7シーズン`,
        [Locale.kr]: `【시공간의 균열】 제7시즌`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_TIMERIFT,
    newUnit: []
}

export default EVENT_TIMERIFT_007