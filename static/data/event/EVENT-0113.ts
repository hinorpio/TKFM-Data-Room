import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0113: Event = {
    code: '0113',
    type: EventType.CHALLENGE,
    startDate: '2023/11/22',
    endDate: '2023/12/06',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【黑夜倩影】`,
        [Locale.sc]: `【黑夜倩影】`,
        [Locale.en]: `[Femme Nocturne]`,
        [Locale.jp]: `「闇夜の妖艶」`,
        [Locale.kr]: `【어두운 밤】`
    },
    image: EventBanner.EVENT_0113,
    newUnit: []
}

export default EVENT_0113