import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0096: Event = {
    code: '0096',
    type: EventType.EVOLVE,
    startDate: '2023/06/28',
    endDate: '2023/07/12',
    color: EventTypeColor.EVOLVE,
    name: {
        [Locale.tc]: `【外傳：世界終結之日-復刻-】`,
        [Locale.sc]: `【外传：世界终结之日-复刻-】`,
        [Locale.en]: `[The Apocalypse -Comeback-]`,
        [Locale.jp]: `「外伝：世界終末の日-復刻-」`,
        [Locale.kr]: `【외전: 세계 종말의 날-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0096,
    newUnit: []
}

export default EVENT_0096