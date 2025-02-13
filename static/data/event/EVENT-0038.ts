import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0038: Event = {
    code: '0038',
    type: EventType.CHALLENGE,
    startDate: '2022/02/02',
    endDate: '2022/02/16',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【正月遊戲】`,
        [Locale.sc]: `【正月游戏】`,
        [Locale.en]: `[True Moon Game]`,
        [Locale.jp]: `「正月お遊戯」`,
        [Locale.kr]: `【정월 놀이】`
    },
    image: EventBanner.EVENT_0038,
    newUnit: []
}

export default EVENT_0038