import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0022: Event = {
    code: '0022',
    type: EventType.CHALLENGE,
    startDate: '2021/08/11',
    endDate: '2021/08/25',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【祈願的復仇者】`,
        [Locale.sc]: `【祈愿的复仇者】`,
        [Locale.en]: `[Wishing Avenger]`,
        [Locale.jp]: `「祈りの復讐者」`,
        [Locale.kr]: `【기도하는 어벤저】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0022,
    newUnit: []
}

export default EVENT_0022