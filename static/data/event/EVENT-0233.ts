import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0233: Event = {
    code: '0233',
    type: EventType.POINT,
    startDate: '2026/09/09',
    endDate: '2026/09/30',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【刀劍魔舞】`,
        [Locale.sc]: `【刀剑魔舞】`,
        [Locale.en]: `[Blade Fury]`,
        [Locale.jp]: `「刀剣魔舞」`,
        [Locale.kr]: `【도검마무】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0233,
    newUnit: [ UnitCode.calibur, UnitCode.vita, UnitCode.fujihana ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0233
