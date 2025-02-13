import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0017: Event = {
    code: '0017',
    type: EventType.CHALLENGE,
    startDate: '2021/06/30',
    endDate: '2021/07/14',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【第三階段：挑戰！渡假村評鑑】`,
        [Locale.sc]: `【第三阶段：挑战！渡假村评鉴】`,
        [Locale.en]: `[Third Wave～Resort Evaluation!]`,
        [Locale.jp]: `「ステージ3～挑戦！休暇村ジャッジ」`,
        [Locale.kr]: `【제3탄~도전! 리조트 평가】`
    },
    image: EventBanner.EVENT_0017,
    newUnit: []
}

export default EVENT_0017