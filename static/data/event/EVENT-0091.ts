import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0091: Event = {
    code: '0091',
    type: EventType.POINT,
    startDate: '2023/05/10',
    endDate: '2023/05/31',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【背德心療系】`,
        [Locale.sc]: `【背德心疗系】`,
        [Locale.en]: `[Corrupt Therapy]`,
        [Locale.jp]: `「背徳心療内科」`,
        [Locale.kr]: `【배덕심 요법】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0091,
    newUnit: [ UnitCode.n_caesar, UnitCode.d_irene ]
}

export default EVENT_0091