import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0076: Event = {
    code: '0076',
    type: EventType.POINT,
    startDate: '2023/01/18',
    endDate: '2023/02/08',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【風雲！新春大運動會】`,
        [Locale.sc]: `【风云！新春大运动会】`,
        [Locale.en]: `[Field Day]`,
        [Locale.jp]: `「風雲！新春大運動会」`,
        [Locale.kr]: `【풍운! 신춘 대운동회】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0076,
    newUnit: [ UnitCode.ny_salucia, UnitCode.ny_lana ]
}

export default EVENT_0076