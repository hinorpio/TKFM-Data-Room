import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0030: Event = {
    code: '0030',
    type: EventType.CHALLENGE,
    startDate: '2021/11/03',
    endDate: '2021/11/17',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【無盡搗蛋夜】`,
        [Locale.sc]: `【无尽捣蛋夜】`,
        [Locale.en]: `[Never-ending Trick]`,
        [Locale.jp]: `「ハロウィンフィーバー」`,
        [Locale.kr]: `【무한의 트릭 나잇】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0030,
    newUnit: []
}

export default EVENT_0030