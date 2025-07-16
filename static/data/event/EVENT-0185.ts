import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0185: Event = {
    code: '0185',
    type: EventType.CHALLENGE,
    startDate: '2025/07/30',
    endDate: '2025/08/06',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【雲上性愛日誌】`,
        [Locale.sc]: `【云上性爱日志】`,
        [Locale.en]: `[Cloud-Top Sex Log]`,
        [Locale.jp]: `「雲の上の性愛日記」`,
        [Locale.kr]: `【구름 위 섹스 일지】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0185,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0185