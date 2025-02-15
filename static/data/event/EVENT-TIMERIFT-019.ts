import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_019: Event = {
    code: 'TIMERIFT_019',
    type: EventType.TIMERIFT,
    startDate: '2024/12/18',
    endDate: '2025/02/19',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第十九季`,
        [Locale.sc]: `【时之裂缝】第十九季`,
        [Locale.en]: `[Time Rift] Season 19`,
        [Locale.jp]: `「時空の裂け目」第19シーズン`,
        [Locale.kr]: `【시공간의 균열】 제19시즌`
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

export default EVENT_TIMERIFT_019