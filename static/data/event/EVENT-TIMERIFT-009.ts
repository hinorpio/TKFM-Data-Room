import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_009: Event = {
    code: 'TIMERIFT_009',
    type: EventType.TIMERIFT,
    startDate: '2023/03/08',
    endDate: '2023/05/24',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第九季`,
        [Locale.sc]: `【时之裂缝】第九季`,
        [Locale.en]: `[Time Rift] Season 9`,
        [Locale.jp]: `「時空の裂け目」第9シーズン`,
        [Locale.kr]: `【시공간의 균열】 제9시즌`
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

export default EVENT_TIMERIFT_009