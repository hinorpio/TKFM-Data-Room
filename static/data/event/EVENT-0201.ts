import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0201: Event = {
    code: '0201',
    type: EventType.GUILDBOSS,
    startDate: '2025/11/19',
    endDate: '2025/12/04',
    color: EventTypeColor.GUILDBOSS,
    name: {
        [Locale.tc]: `【女僕特訓班】`,
        [Locale.sc]: `【女仆特训班】`,
        [Locale.en]: `[Maid Special Training Class]`,
        [Locale.jp]: `「メイド特訓クラス」`,
        [Locale.kr]: `【메이드 특훈반】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0201,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0201