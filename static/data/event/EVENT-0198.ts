import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0198: Event = {
    code: '0198',
    type: EventType.CHALLENGE,
    startDate: '2025/10/29',
    endDate: '2025/11/05',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【不給魔力就搗蛋】`,
        [Locale.sc]: `【不给魔力就捣蛋】`,
        [Locale.en]: `[Trick or Spell]`,
        [Locale.jp]: `「トリックオアマジック」`,
        [Locale.kr]: `【Trick or 마력】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0198,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0198