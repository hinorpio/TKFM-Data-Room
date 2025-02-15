import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0024: Event = {
    code: '0024',
    type: EventType.POINT,
    startDate: '2021/09/08',
    endDate: '2021/09/29',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【月夜的童話】`,
        [Locale.sc]: `【月夜的童话】`,
        [Locale.en]: `[Moonlit Fairy Tale]`,
        [Locale.jp]: `「月夜の童話」`,
        [Locale.kr]: `【월야의 동화】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0024,
    newUnit: [ UnitCode.hm_fiora, UnitCode.fufu, UnitCode.teresa ]
}

export default EVENT_0024