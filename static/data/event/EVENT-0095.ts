import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0095: Event = {
    code: '0095',
    type: EventType.CHALLENGE,
    startDate: '2023/06/21',
    endDate: '2023/07/05',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【喬許の野望】`,
        [Locale.sc]: `【乔许の野望】`,
        [Locale.en]: `[Josh's Wild Dream]`,
        [Locale.jp]: `「ジョシュの野望」`,
        [Locale.kr]: `【죠쉬의 야망】`
    },
    image: EventBanner.EVENT_0095,
    newUnit: []
}

export default EVENT_0095