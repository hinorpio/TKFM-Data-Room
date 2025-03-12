import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0159: Event = {
    code: '0159',
    type: EventType.EVOLVE,
    startDate: '2024/11/27',
    endDate: '2024/12/11',
    color: EventTypeColor.EVOLVE,
    name: {
        [Locale.tc]: `【空氣怪獸大戰-復刻-】`,
        [Locale.sc]: `【空气怪兽大战-复刻-】`,
        [Locale.en]: `[The Battle of Thin Air -Comeback-]`,
        [Locale.jp]: `「空気怪獣ごっこ-復刻-」`,
        [Locale.kr]: `【공기 괴수 대전-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0159,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0159