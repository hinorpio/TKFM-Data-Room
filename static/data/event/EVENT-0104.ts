import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0104: Event = {
    code: '0104',
    type: EventType.CHALLENGE,
    startDate: '2023/09/06',
    endDate: '2023/09/13',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【祈願的復仇者-復刻-】`,
        [Locale.sc]: `【祈愿的复仇者-复刻-】`,
        [Locale.en]: `[Wishing Avenger -Comeback-]`,
        [Locale.jp]: `「祈りの復讐者-復刻-」`,
        [Locale.kr]: `【기도하는 어벤저-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0104,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0104