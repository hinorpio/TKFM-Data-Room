import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0089: Event = {
    code: '0089',
    type: EventType.CHALLENGE,
    startDate: '2023/05/03',
    endDate: '2023/05/10',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【事件現場-復刻-】`,
        [Locale.sc]: `【事件现场-复刻-】`,
        [Locale.en]: `[Scene of the Crime -Comeback-]`,
        [Locale.jp]: `「事件現場-復刻-」`,
        [Locale.kr]: `【사건 현장-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0089,
    newUnit: []
}

export default EVENT_0089