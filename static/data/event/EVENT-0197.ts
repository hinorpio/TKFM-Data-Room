import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0197: Event = {
    code: '0197',
    type: EventType.POINT,
    startDate: '2025/10/15',
    endDate: '2025/11/05',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【仙子魔力公司】`,
        [Locale.sc]: `【仙子魔力公司】`,
        [Locale.en]: `[Fairies Inc.]`,
        [Locale.jp]: `「フェアリーズ・インク」`,
        [Locale.kr]: `【페어리 마력 회사】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0197,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0197