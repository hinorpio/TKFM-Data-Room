import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0168: Event = {
    code: '0168',
    type: EventType.GUILDBOSS,
    startDate: '2025/02/19',
    endDate: '2025/03/06',
    color: EventTypeColor.GUILDBOSS,
    name: {
        [Locale.tc]: `【極悅！春日祭】`,
        [Locale.sc]: `【极悦！春日祭】`,
        [Locale.en]: `[Ultimate Joy! Spring Festival]`,
        [Locale.jp]: `「喜極！春祭り」`,
        [Locale.kr]: `【극락! 봄맞이 축제】`
    },
    image: EventBanner.EVENT_0168,
    newUnit: []
}

export default EVENT_0168