import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0240: Event = {
    code: '0240',
    type: EventType.GUILDBOSS,
    startDate: '2026/11/11',
    endDate: '2026/11/26',
    color: EventTypeColor.GUILDBOSS,
    name: {
        [Locale.tc]: `【協會共鬥-新大陸歷險記】`,
        [Locale.sc]: `【协会共斗-新大陆历险记】`,
        [Locale.en]: `[Guild Expedition - New Continent Adventures]`,
        [Locale.jp]: `「ギルド共闘-新大陸冒険記」`,
        [Locale.kr]: `【길드 공투-신대륙 모험기】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0240,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0240
