import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0033: Event = {
    code: '0033',
    type: EventType.DISCIPLINE,
    startDate: '2021/12/01',
    endDate: '2021/12/15',
    color: EventTypeColor.DISCIPLINE,
    name: {
        [Locale.tc]: `【異世界情趣店】`,
        [Locale.sc]: `【异世界情趣店】`,
        [Locale.en]: `[Parallel Paradise Toys]`,
        [Locale.jp]: `「異世界アダルトショップ」`,
        [Locale.kr]: `【이세계 성인용품점】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0033,
    newUnit: [ UnitCode.sakuya ]
}

export default EVENT_0033