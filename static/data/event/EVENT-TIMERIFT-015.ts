import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_015: Event = {
    code: 'TIMERIFT_015',
    type: EventType.TIMERIFT,
    startDate: '2024/05/01',
    endDate: '2024/07/03',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第十五季`,
        [Locale.sc]: `【时之裂缝】第十五季`,
        [Locale.en]: `[Time Rift] Season 15`,
        [Locale.jp]: `「時空の裂け目」第15シーズン`,
        [Locale.kr]: `【시공간의 균열】 제15시즌`
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

export default EVENT_TIMERIFT_015