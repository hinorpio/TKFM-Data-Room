import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0027: Event = {
    code: '0027',
    type: EventType.EVOLVE,
    startDate: '2021/09/29',
    endDate: '2021/10/13',
    color: EventTypeColor.EVOLVE,
    name: {
        [Locale.tc]: `【龍「玉」之謎】`,
        [Locale.sc]: `【龙「玉」之谜】`,
        [Locale.en]: `[Last of the Silver Dragons]`,
        [Locale.jp]: `「ドラゴン玉の謎」`,
        [Locale.kr]: `【드레곤볼의 비밀】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0027,
    newUnit: [ UnitCode.karina ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0027