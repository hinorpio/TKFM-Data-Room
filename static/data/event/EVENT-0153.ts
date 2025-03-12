import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0153: Event = {
    code: '0153',
    type: EventType.POINT,
    startDate: '2024/10/16',
    endDate: '2024/11/06',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【驚懼撒旦夜】`,
        [Locale.sc]: `【惊惧撒旦夜】`,
        [Locale.en]: `[Fear Satan's Night]`,
        [Locale.jp]: `「恐怖のサタンナイト」`,
        [Locale.kr]: `【공포스러운 사탄의 밤】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0153,
    newUnit: [ UnitCode.susan, UnitCode.h_satan ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0153