import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0234: Event = {
    code: '0234',
    type: EventType.CHALLENGE,
    startDate: '2026/09/16',
    endDate: '2026/09/30',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【Hard Mode-刀劍魔舞】`,
        [Locale.sc]: `【Hard Mode-刀剑魔舞】`,
        [Locale.en]: `[Hard Mode - Blade Fury]`,
        [Locale.jp]: `「ハードモード-刀剣魔舞」`,
        [Locale.kr]: `【Hard Mode-도검마무】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0234,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0234
