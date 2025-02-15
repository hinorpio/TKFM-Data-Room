import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0118: Event = {
    code: '0118',
    type: EventType.CHALLENGE,
    startDate: '2024/01/31',
    endDate: '2024/02/05',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【槍炮、刺刀&獵犬】`,
        [Locale.sc]: `【枪炮、刺刀&猎犬】`,
        [Locale.en]: `[Ｗeapons & Hounds]`,
        [Locale.jp]: `「銃砲、銃剣&ハウンド」`,
        [Locale.kr]: `【총포, 총검&하운드】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0118,
    newUnit: []
}

export default EVENT_0118