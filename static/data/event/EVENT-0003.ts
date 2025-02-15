import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0003: Event = {
    code: '0003',
    type: EventType.CHALLENGE,
    startDate: '2021/01/06',
    endDate: '2021/01/13',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【祭典逆襲】`,
        [Locale.sc]: `【庆典反击】`,
        [Locale.en]: `[Crash the Party!!]`,
        [Locale.jp]: `【祭りの逆襲】`,
        [Locale.kr]: `【Crash the Party!!】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0003,
    newUnit: []
}

export default EVENT_0003