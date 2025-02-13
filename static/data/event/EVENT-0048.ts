import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0048: Event = {
    code: '0048',
    type: EventType.EVOLVE,
    startDate: '2022/05/11',
    endDate: '2022/05/25',
    color: EventTypeColor.EVOLVE,
    name: {
        [Locale.tc]: `【魔族朋友】`,
        [Locale.sc]: `【魔族朋友】`,
        [Locale.en]: `[Demon Friends]`,
        [Locale.jp]: `「魔族の友達」`,
        [Locale.kr]: `【마족 친구】`
    },
    image: EventBanner.EVENT_0048,
    newUnit: [ UnitCode.faya, UnitCode.tanocia ]
}

export default EVENT_0048