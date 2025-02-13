import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0049: Event = {
    code: '0049',
    type: EventType.POINT,
    startDate: '2022/05/25',
    endDate: '2022/06/08',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【緊急！惡兔襲來！】`,
        [Locale.sc]: `【紧急！恶兔袭来】`,
        [Locale.en]: `[Alert! Usagi Incoming!]`,
        [Locale.jp]: `「緊急！悪兎襲来」`,
        [Locale.kr]: `【긴급! 악토끼 내습!】`
    },
    image: EventBanner.EVENT_0049,
    newUnit: [ UnitCode.usagihime ]
}

export default EVENT_0049