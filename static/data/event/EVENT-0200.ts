import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0200: Event = {
    code: '0200',
    type: EventType.POINT,
    startDate: '2025/11/12',
    endDate: '2025/12/03',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【髒污退散！老宅清潔中】`,
        [Locale.sc]: `【脏污退散！老宅清洁中】`,
        [Locale.en]: `[Dirt Begone! Old Mansion Cleanup]`,
        [Locale.jp]: `「汚れ退散！古民家清掃中」`,
        [Locale.kr]: `【오염 퇴치! 오래된 집 청소중】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0200,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0200