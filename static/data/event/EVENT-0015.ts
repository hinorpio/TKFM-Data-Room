import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0015: Event = {
    code: '0015',
    type: EventType.POINT,
    startDate: '2021/06/02',
    endDate: '2021/07/14',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【集合啦！魔王渡假村】`,
        [Locale.sc]: `【集合啦！魔王渡假村】`,
        [Locale.en]: `[Summer By the Cae-side]`,
        [Locale.jp]: `「集まれ！魔王休暇村」`,
        [Locale.kr]: `【집합! 마왕 리조트】`
    },
    image: EventBanner.EVENT_0015,
    newUnit: [ UnitCode.s_shizuka, UnitCode.s_lulu, UnitCode.s_ks8, UnitCode.s_nana ]
}

export default EVENT_0015