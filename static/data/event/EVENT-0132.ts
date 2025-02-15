import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0132: Event = {
    code: '0132',
    type: EventType.POINT,
    startDate: '2024/05/08',
    endDate: '2024/05/29',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【怪異村莊調查錄】`,
        [Locale.sc]: `【怪异村庄调查录】`,
        [Locale.en]: `[Bizarre Records]`,
        [Locale.jp]: `「奇妙な村の調査記録」`,
        [Locale.kr]: `【괴이한 마을 조사록】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0132,
    newUnit: [ UnitCode.lelya, UnitCode.a_nana ]
}

export default EVENT_0132