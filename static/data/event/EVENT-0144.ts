import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0144: Event = {
    code: '0144',
    type: EventType.POINT,
    startDate: '2024/08/14',
    endDate: '2024/09/04',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【妖狐與她的產地】`,
        [Locale.sc]: `【妖狐与她的产地】`,
        [Locale.en]: `[Fox & Her Homeland]`,
        [Locale.jp]: `「妖狐とその生息地」`,
        [Locale.kr]: `【요호와 그녀의 생식지】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0144,
    newUnit: [ UnitCode.beer_shizuka, UnitCode.tsubaki ]
}

export default EVENT_0144