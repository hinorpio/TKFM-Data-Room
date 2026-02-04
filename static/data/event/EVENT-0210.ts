import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0210: Event = {
    code: '0210',
    type: EventType.GUILDBOSS,
    startDate: '2026/02/11',
    endDate: '2026/02/26',
    color: EventTypeColor.GUILDBOSS,
    name: {
        [Locale.tc]: `【新天下一花嫁會】`,
        [Locale.sc]: `【天下一花嫁会】`,
        [Locale.en]: `[World's Best Wedding]`,
        [Locale.jp]: `「天下一花嫁会」`,
        [Locale.kr]: `【천하제일 신부 대회】 `
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0210,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0210