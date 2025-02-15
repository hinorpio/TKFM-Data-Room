import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0068: Event = {
    code: '0068',
    type: EventType.SLIVER,
    startDate: '2022/11/16',
    endDate: '2022/11/30',
    color: EventTypeColor.SLIVER,
    name: {
        [Locale.tc]: `【AbysSeducer邊境行商】`,
        [Locale.sc]: `【AbysSeducer边境行商】`,
        [Locale.en]: `[AbysSeducer]`,
        [Locale.jp]: `「AbysSeducer」`,
        [Locale.kr]: `【AbysSeducer】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0068,
    newUnit: [ UnitCode.sherana, UnitCode.iyan ]
}

export default EVENT_0068