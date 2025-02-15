import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0014: Event = {
    code: '0014',
    type: EventType.EVOLVE,
    startDate: '2021/05/26',
    endDate: '2021/06/02',
    color: EventTypeColor.EVOLVE,
    name: {
        [Locale.tc]: `【外傳：世界終結之日】`,
        [Locale.sc]: `【外传：世界终结之日】`,
        [Locale.en]: `[The Apocalypse]`,
        [Locale.jp]: `「外伝：世界終末の日」`,
        [Locale.kr]: `【외전: 세계 종말의 날】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0014,
    newUnit: [ UnitCode.daphne ]
}

export default EVENT_0014