import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0088: Event = {
    code: '0088',
    type: EventType.POINT,
    startDate: '2023/04/26',
    endDate: '2023/05/10',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【凱薩魔王事件簿-復刻-】`,
        [Locale.sc]: `【凯萨魔王事件簿-复刻-】`,
        [Locale.en]: `[Detective Caesar -Comeback-]`,
        [Locale.jp]: `「魔王シーザーの事件簿-復刻-」`,
        [Locale.kr]: `【마왕 시저의 사건부-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0088,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0088