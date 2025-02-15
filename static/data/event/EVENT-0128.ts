import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0128: Event = {
    code: '0128',
    type: EventType.CHALLENGE,
    startDate: '2024/04/17',
    endDate: '2024/04/24',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【後宮們的睡衣枕頭戰】`,
        [Locale.sc]: `【后宫们的睡衣枕头战】`,
        [Locale.en]: `[Harem's Pillow Fight]`,
        [Locale.jp]: `「後宮枕投げバトル」`,
        [Locale.kr]: `【후궁들의 파자마 베개 싸움】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0128,
    newUnit: []
}

export default EVENT_0128