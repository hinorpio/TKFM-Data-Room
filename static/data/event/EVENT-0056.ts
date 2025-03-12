import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0056: Event = {
    code: '0056',
    type: EventType.DISCIPLINE,
    startDate: '2022/08/24',
    endDate: '2022/09/07',
    color: EventTypeColor.DISCIPLINE,
    name: {
        [Locale.tc]: `【女僕&魔法】`,
        [Locale.sc]: `【女仆&魔法】`,
        [Locale.en]: `[Magic & Maids]`,
        [Locale.jp]: `「メイド&マジック」`,
        [Locale.kr]: `【메이드&마법】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0056,
    newUnit: [ UnitCode.emily, UnitCode.anjelica ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0056