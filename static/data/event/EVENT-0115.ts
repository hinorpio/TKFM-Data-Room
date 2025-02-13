import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0115: Event = {
    code: '0115',
    type: EventType.EVOLVE,
    startDate: '2023/11/29',
    endDate: '2023/12/13',
    color: EventTypeColor.EVOLVE,
    name: {
        [Locale.tc]: `【龍「玉」之謎-復刻-】`,
        [Locale.sc]: `【龙「玉」之谜-复刻-】`,
        [Locale.en]: `[Last of the Silver Dragons -Comeback-]`,
        [Locale.jp]: `「ドラゴン玉の謎」-復刻-`,
        [Locale.kr]: `【드레곤볼의 비밀】-복각-`
    },
    image: EventBanner.EVENT_0115,
    newUnit: []
}

export default EVENT_0115