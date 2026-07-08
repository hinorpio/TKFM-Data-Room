import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0227: Event = {
    code: '0227',
    type: EventType.CHALLENGE,
    startDate: '2026/07/15',
    endDate: '2026/07/29',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【擦邊主播養成中】`,
        [Locale.sc]: `【擦边主播养成中】`,
        [Locale.en]: `[Streamer in Training]`,
        [Locale.jp]: `「ギリギリライバー育成中」`,
        [Locale.kr]: `【아슬아슬 스트리머 육성 중】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0227,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0227
