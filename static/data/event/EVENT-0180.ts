import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0180: Event = {
    code: '0180',
    type: EventType.POINT,
    startDate: '2025/05/28',
    endDate: '2025/06/11',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【集合啦！魔王渡假村-復刻-】`,
        [Locale.sc]: `【集合啦！魔王渡假村-复刻-】`,
        [Locale.en]: `[Summer by the Cae-side -Comeback-]`,
        [Locale.jp]: `「集まれ！魔王休暇村-復刻-」`,
        [Locale.kr]: `【집합! 마왕 리조트!-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0180,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0180