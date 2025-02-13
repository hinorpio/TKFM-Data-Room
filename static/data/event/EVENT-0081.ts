import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0081: Event = {
    code: '0081',
    type: EventType.EVOLVE,
    startDate: '2023/02/22',
    endDate: '2023/03/08',
    color: EventTypeColor.EVOLVE,
    name: {
        [Locale.tc]: `【空氣怪獸大戰】`,
        [Locale.sc]: `【空气怪兽大战】`,
        [Locale.en]: `[The Battle of Thin Air]`,
        [Locale.jp]: `「空気怪獣ごっこ」`,
        [Locale.kr]: `【공기 괴수 대전】`
    },
    image: EventBanner.EVENT_0081,
    newUnit: []
}

export default EVENT_0081