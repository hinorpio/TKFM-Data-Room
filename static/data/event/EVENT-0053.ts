import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0053: Event = {
    code: '0053',
    type: EventType.POINT,
    startDate: '2022/07/13',
    endDate: '2022/08/03',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【凱薩魔王事件簿】`,
        [Locale.sc]: `【凯萨魔王事件簿】`,
        [Locale.en]: `[Detective Caesar]`,
        [Locale.jp]: `「魔王シーザーの事件簿」`,
        [Locale.kr]: `【마왕 시저의 사건부】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0053,
    newUnit: [ UnitCode.ichika, UnitCode.kana ]
}

export default EVENT_0053