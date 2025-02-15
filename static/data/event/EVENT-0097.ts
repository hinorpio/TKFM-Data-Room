import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0097: Event = {
    code: '0097',
    type: EventType.POINT,
    startDate: '2023/07/12',
    endDate: '2023/08/02',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【向大洋進發】`,
        [Locale.sc]: `【向大洋进发】`,
        [Locale.en]: `[Sail Across the Ocean]`,
        [Locale.jp]: `「大海原へ進め！」`,
        [Locale.kr]: `【대양을 향해 전진】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0097,
    newUnit: [ UnitCode.o_lana, UnitCode.o_nana ]
}

export default EVENT_0097