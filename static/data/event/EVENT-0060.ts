import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0060: Event = {
    code: '0060',
    type: EventType.EVOLVE,
    startDate: '2022/09/21',
    endDate: '2022/10/05',
    color: EventTypeColor.EVOLVE,
    name: {
        [Locale.tc]: `【蛇女戰記-復刻-】`,
        [Locale.sc]: `【蛇女战记-复刻-】`,
        [Locale.en]: `[Mes-merized -Comeback-]`,
        [Locale.jp]: `【ナーガ戦記-復刻-】`,
        [Locale.kr]: `【나가 전기-복각-】`
    },
    image: EventBanner.EVENT_0060,
    newUnit: []
}

export default EVENT_0060