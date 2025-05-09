import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0179: Event = {
    code: '0179',
    type: EventType.GUILDBOSS,
    startDate: '2025/05/14',
    endDate: '2025/05/28',
    color: EventTypeColor.GUILDBOSS,
    name: {
        [Locale.tc]: `【人妻共淫時光】`,
        [Locale.sc]: `【人妻共淫时光】`,
        [Locale.en]: `[Wife Kinky Time]`,
        [Locale.jp]: `「人妻との淫らな一時」`,
        [Locale.kr]: `【유부녀와의 음탕한 시간】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0179,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0179