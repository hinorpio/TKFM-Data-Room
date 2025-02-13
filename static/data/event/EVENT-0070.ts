import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0070: Event = {
    code: '0070',
    type: EventType.POINT,
    startDate: '2022/11/30',
    endDate: '2022/12/14',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【復活節蛋蛋大進擊-復刻-】`,
        [Locale.sc]: `【复活节蛋蛋大进击-复刻-】`,
        [Locale.en]: `[Easter Egg Attack -Comeback-]`,
        [Locale.jp]: `「イースターエッグの進撃-復刻-」`,
        [Locale.kr]: `【부활절 달걀의 진격-복각-】`
    },
    image: EventBanner.EVENT_0070,
    newUnit: []
}

export default EVENT_0070