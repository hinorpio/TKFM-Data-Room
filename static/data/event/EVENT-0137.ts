import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0137: Event = {
    code: '0137',
    type: EventType.CHALLENGE,
    startDate: '2024/06/19',
    endDate: '2024/07/03',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【乙姬的怒火】`,
        [Locale.sc]: `【乙姬的怒火】`,
        [Locale.en]: `[The Fury of Otohime]`,
        [Locale.jp]: `「乙姫の怒り」`,
        [Locale.kr]: `【오토히메의 분노】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0137,
    newUnit: []
}

export default EVENT_0137