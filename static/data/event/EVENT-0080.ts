import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0080: Event = {
    code: '0080',
    type: EventType.CHALLENGE,
    startDate: '2023/02/15',
    endDate: '2023/03/01',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【巧克力帝國的野心】`,
        [Locale.sc]: `【巧克力帝国的野心】`,
        [Locale.en]: `[Chocolate Ambitions]`,
        [Locale.jp]: `「チョコレート帝国の野心」`,
        [Locale.kr]: `【초콜릿 제국의 야심】`
    },
    image: EventBanner.EVENT_0080,
    newUnit: []
}

export default EVENT_0080