import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0167: Event = {
    code: '0167',
    type: EventType.POINT,
    startDate: '2025/02/12',
    endDate: '2025/03/05',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【烈日逢妖譚】`,
        [Locale.sc]: `【烈日逢妖谭】`,
        [Locale.en]: `[Demon Encounters]`,
        [Locale.jp]: `「妖魔邂逅録」`,
        [Locale.kr]: `【태양과 요물의 만남】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0167,
    newUnit: [ UnitCode.p_aiko, UnitCode.ni_caesar, UnitCode.f_kana ]
}

export default EVENT_0167