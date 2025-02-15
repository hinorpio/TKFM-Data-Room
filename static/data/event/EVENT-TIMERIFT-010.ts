import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_010: Event = {
    code: 'TIMERIFT_010',
    type: EventType.TIMERIFT,
    startDate: '2023/05/24',
    endDate: '2023/08/23',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第十季`,
        [Locale.sc]: `【时之裂缝】第十季`,
        [Locale.en]: `[Time Rift] Season 10`,
        [Locale.jp]: `「時空の裂け目」第10シーズン`,
        [Locale.kr]: `【시공간의 균열】 제10시즌`
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

export default EVENT_TIMERIFT_010