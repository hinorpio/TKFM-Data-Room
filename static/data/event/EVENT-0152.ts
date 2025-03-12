import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0152: Event = {
    code: '0152',
    type: EventType.CHALLENGE,
    startDate: '2024/10/09',
    endDate: '2024/10/16',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【無盡搗蛋夜-復刻-】`,
        [Locale.sc]: `【无尽捣蛋夜-复刻-】`,
        [Locale.en]: `[Never-ending Trick -Comeback-]`,
        [Locale.jp]: `「ハロウィンフィーバー-復刻-」`,
        [Locale.kr]: `【무한의 트릭 나잇-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0152,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0152