import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0183: Event = {
    code: '0183',
    type: EventType.EVOLVE,
    startDate: '2025/07/02',
    endDate: '2025/07/16',
    color: EventTypeColor.EVOLVE,
    name: {
        [Locale.tc]: `【請問要來點獸耳嗎？-復刻-】`,
        [Locale.sc]: `【请问要来点兽耳吗？-复刻-】`,
        [Locale.en]: `[Want Animal Ears? -Comeback-]`,
        [Locale.jp]: `「ご注文はケモ耳ですか？-復刻-」`,
        [Locale.kr]: `【동물귀 주문하시겠어요?-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0183,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0183