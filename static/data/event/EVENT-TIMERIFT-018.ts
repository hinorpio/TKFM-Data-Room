import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_TIMERIFT_018: Event = {
    code: 'TIMERIFT_018',
    type: EventType.TIMERIFT,
    startDate: '2024/10/23',
    endDate: '2024/12/18',
    color: EventTypeColor.TIMERIFT,
    name: {
        [Locale.tc]: `【時之裂縫】第十八季`,
        [Locale.sc]: `【时之裂缝】第十八季`,
        [Locale.en]: `[Time Rift] Season 18`,
        [Locale.jp]: `「時空の裂け目」第18シーズン`,
        [Locale.kr]: `【시공간의 균열】 제18시즌`
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

export default EVENT_TIMERIFT_018