import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0035: Event = {
    code: '0035',
    type: EventType.CHALLENGE,
    startDate: '2021/12/29',
    endDate: '2021/01/12',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【絕倫性誕夜】`,
        [Locale.sc]: `【绝伦性诞夜】`,
        [Locale.en]: `[Sexmas Eve]`,
        [Locale.jp]: `「絶倫セックスマス」`,
        [Locale.kr]: `【황당한 섹스마스 이브】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0035,
    newUnit: []
}

export default EVENT_0035