import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0207: Event = {
    code: '0207',
    type: EventType.POINT,
    startDate: '2026/01/21',
    endDate: '2026/02/04',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【妖狐與她的產地-復刻-】`,
        [Locale.sc]: `【妖狐与她的产地-复刻-】`,
        [Locale.en]: `[Fox & Her Homeland -Comeback-]`,
        [Locale.jp]: `「妖狐とその生息地-復刻-」`,
        [Locale.kr]: `【요호와 그녀의 생식지-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0207,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0207