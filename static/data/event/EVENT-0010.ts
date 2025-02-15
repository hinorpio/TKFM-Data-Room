import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0010: Event = {
    code: '0010',
    type: EventType.POINT,
    startDate: '2021/03/31',
    endDate: '2021/04/21',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【復活節蛋蛋大進擊】`,
        [Locale.sc]: `【复活节蛋蛋大进击】`,
        [Locale.en]: `[Easter Egg Attack]`,
        [Locale.jp]: `「イースターエッグの進撃」`,
        [Locale.kr]: `【부활절 달걀의 진격】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0010,
    newUnit: [ UnitCode.e_satan ]
}

export default EVENT_0010