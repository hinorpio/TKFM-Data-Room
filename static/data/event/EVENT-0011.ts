import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0011: Event = {
    code: '0011',
    type: EventType.CHALLENGE,
    startDate: '2021/04/14',
    endDate: '2021/04/21',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【十倍怨念奉還】`,
        [Locale.sc]: `【十倍怨念奉还】`,
        [Locale.en]: `[Tenfold Payback]`,
        [Locale.jp]: `「怨念を十倍にして晴らせ」`,
        [Locale.kr]: `【10배로 되갚아준 원념】`
    },
    image: EventBanner.EVENT_0011,
    newUnit: []
}

export default EVENT_0011