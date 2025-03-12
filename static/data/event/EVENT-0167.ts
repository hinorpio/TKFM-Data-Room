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
        [Locale.tc]: `久未返鄉的香奈，前往與自己頗有淵源的神社，然而就在與老朋友敘舊時，神社封印邪物的御神體卻遭神秘人士破壞，邪惡的妖力從中蜂湧而出。`,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0167,
    newUnit: [ UnitCode.p_aiko, UnitCode.ni_caesar, UnitCode.f_kana ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [ '0168' ],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0167