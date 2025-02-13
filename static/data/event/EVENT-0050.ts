import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0050: Event = {
    code: '0050',
    type: EventType.POINT,
    startDate: '2022/06/08',
    endDate: '2022/07/13',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【渡假村改建王！】`,
        [Locale.sc]: `【渡假村改建王！】`,
        [Locale.en]: `[Queen of the Beach]`,
        [Locale.jp]: `「休暇村改築王！」`,
        [Locale.kr]: `【리모델링의 왕!】`
    },
    image: EventBanner.EVENT_0050,
    newUnit: [ UnitCode.s_iblis, UnitCode.s_milae, UnitCode.s_noel, UnitCode.s_aridya ]
}

export default EVENT_0050