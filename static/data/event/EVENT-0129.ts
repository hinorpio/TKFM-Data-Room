import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0129: Event = {
    code: '0129',
    type: EventType.SPIRE,
    startDate: '2024/04/03',
    endDate: '2024/05/22',
    color: EventTypeColor.SPIRE,
    name: {
        [Locale.tc]: `【魔獄塔】第十八季`,
        [Locale.sc]: `【魔狱塔】第十八季`,
        [Locale.en]: `[The Demon Spire] Season 18`,
        [Locale.jp]: `「魔獄塔」第18シーズン`,
        [Locale.kr]: `【마옥탑】 제18시즌`
    },
    image: EventBanner.EVENT_0129,
    newUnit: []
}

export default EVENT_0129