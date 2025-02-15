import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0003_RETURN: Event = {
    code: '0003_RETURN',
    type: EventType.CHALLENGE,
    startDate: '2022/01/19',
    endDate: '2022/01/26',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【祭典逆襲-復刻-】`,
        [Locale.sc]: `【庆典反击-复刻-】`,
        [Locale.en]: `[Crash the Party!! -Comeback-]`,
        [Locale.jp]: `【祭りの逆襲-復刻-】`,
        [Locale.kr]: `【Crash the Party!!-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0003_RETURN,
    newUnit: []
}

export default EVENT_0003_RETURN