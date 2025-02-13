import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0071: Event = {
    code: '0071',
    type: EventType.CHALLENGE,
    startDate: '2022/12/07',
    endDate: '2022/12/14',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【十倍怨念大奉還-復刻-】`,
        [Locale.sc]: `【十倍怨念奉还-复刻-】`,
        [Locale.en]: `[Tenfold Payback -Comeback-]`,
        [Locale.jp]: `「怨念を十倍にして晴らせ-復刻-」`,
        [Locale.kr]: `【10배로 되갚아준 원념-복각-】`
    },
    image: EventBanner.EVENT_0071,
    newUnit: []
}

export default EVENT_0071