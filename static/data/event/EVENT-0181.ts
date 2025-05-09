import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0181: Event = {
    code: '0181',
    type: EventType.CHALLENGE,
    startDate: '2025/06/04',
    endDate: '2025/06/11',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【挑戰！渡假村評鑑-復刻-】`,
        [Locale.sc]: `【挑战！渡假村评鉴-复刻-】`,
        [Locale.en]: `[Resort Evaluation! -Comeback-]`,
        [Locale.jp]: `「挑戦！休暇村ジャッジ-復刻-」`,
        [Locale.kr]: `【도전! 리조트 평가-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0181,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0181