import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0016: Event = {
    code: '0016',
    type: EventType.SPECIAL,
    startDate: '2021/06/16',
    endDate: '2021/07/14',
    color: EventTypeColor.SPECIAL,
    name: {
        [Locale.tc]: `【第二階段：悠閒的拼圖時間】`,
        [Locale.sc]: `【第二阶段：悠闲的拼图时间】`,
        [Locale.en]: `[Second Wave～Relaxing Puzzle Time]`,
        [Locale.jp]: `「ステージ2～ゆったりパズルタイム」`,
        [Locale.kr]: `【제2탄～느긋한 퍼즐 시간】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0016,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0016