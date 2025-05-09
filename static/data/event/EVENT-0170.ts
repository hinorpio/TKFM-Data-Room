import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0170: Event = {
    code: '0170',
    type: EventType.POINT,
    startDate: '2025/03/12',
    endDate: '2025/04/02',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【星欲機工隊】`,
        [Locale.sc]: `【星欲机工队】`,
        [Locale.en]: `[Star Lusts Squad]`,
        [Locale.jp]: `「星欲機工隊」`,
        [Locale.kr]: `【스타러스트 기공대】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0170,
    newUnit: [ UnitCode.star_mia, UnitCode.star_annee ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0170