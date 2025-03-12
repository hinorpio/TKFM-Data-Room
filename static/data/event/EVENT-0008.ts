import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0008: Event = {
    code: '0008',
    type: EventType.EVOLVE,
    startDate: '2021/03/17',
    endDate: '2021/03/24',
    color: EventTypeColor.EVOLVE,
    name: {
        [Locale.tc]: `【蛇女戰記】`,
        [Locale.sc]: `【蛇女战记】`,
        [Locale.en]: `[Mes-merized]`,
        [Locale.jp]: `「ナーガ戦記」`,
        [Locale.kr]: `【나가 전기】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0008,
    newUnit: [ UnitCode.mesmiia ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0008