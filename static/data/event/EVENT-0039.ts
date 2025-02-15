import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0039: Event = {
    code: '0039',
    type: EventType.POINT,
    startDate: '2022/02/16',
    endDate: '2022/03/09',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【帶來幸福的婚紗】`,
        [Locale.sc]: `【带来幸福的婚纱】`,
        [Locale.en]: `[A Match Made in Hell]`,
        [Locale.jp]: `「幸せのウェディング」`,
        [Locale.kr]: `【행복의 웨딩드레스】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0039,
    newUnit: [ UnitCode.b_baal, UnitCode.b_iblis, UnitCode.b_satan ]
}

export default EVENT_0039