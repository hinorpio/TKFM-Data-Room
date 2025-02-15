import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0127: Event = {
    code: '0127',
    type: EventType.POINT,
    startDate: '2024/04/02',
    endDate: '2024/04/24',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【露露想要開派對】`,
        [Locale.sc]: `【露露想要开派对】`,
        [Locale.en]: `[Lulu Wants a Party]`,
        [Locale.jp]: `「ルルのパーティー計画」`,
        [Locale.kr]: `【루루는 파티를 열고 싶어】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0127,
    newUnit: [ UnitCode.p_lulu, UnitCode.p_tyrella ]
}

export default EVENT_0127