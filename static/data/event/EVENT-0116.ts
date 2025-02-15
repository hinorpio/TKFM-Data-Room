import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0116: Event = {
    code: '0116',
    type: EventType.POINT,
    startDate: '2023/12/13',
    endDate: '2024/01/17',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【聖誕之約】`,
        [Locale.sc]: `【圣诞之约】`,
        [Locale.en]: `[Christmas Vow]`,
        [Locale.jp]: `「クリスマスの約束」`,
        [Locale.kr]: `【크리스마스 약속】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0116,
    newUnit: [ UnitCode.x_aridya, UnitCode.x_iblis, UnitCode.w_evie, UnitCode.salina ]
}

export default EVENT_0116