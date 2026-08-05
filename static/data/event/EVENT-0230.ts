import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0230: Event = {
    code: '0230',
    type: EventType.GUILDBOSS,
    startDate: '2026/08/12',
    endDate: '2026/08/27',
    color: EventTypeColor.GUILDBOSS,
    name: {
        [Locale.tc]: `【協會共鬥－犬與辛香料】`,
        [Locale.sc]: `【协会共斗－犬与辛香料】`,
        [Locale.en]: `[Guild Expedition - Dog & Spice]`,
        [Locale.jp]: `「ギルド共闘－犬と香辛料」`,
        [Locale.kr]: `【길드 공투－코볼트와 향신료】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0230,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0230
