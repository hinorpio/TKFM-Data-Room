import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0189: Event = {
    code: '0189',
    type: EventType.GUILDBOSS,
    startDate: '2025/08/20',
    endDate: '2025/09/04',
    color: EventTypeColor.GUILDBOSS,
    name: {
        [Locale.tc]: `【這家醫院有點怪】`,
        [Locale.sc]: `【這家醫院有點怪】`,
        [Locale.en]: `[This Hospital's Off]`,
        [Locale.jp]: `「この病院はどこか変だ」`,
        [Locale.kr]: `【이 병원 어딘가 이상해】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0189,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0189