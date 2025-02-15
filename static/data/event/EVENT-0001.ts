import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0001: Event = {
    code: '0001',
    type: EventType.POINT,
    startDate: '2020/12/30',
    endDate: '2021/01/13',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【魔族的新年祭典】`,
        [Locale.sc]: `【魔族的新年祭典】`,
        [Locale.en]: `[DEMON'S New Year Party]`,
        [Locale.jp]: `「魔族の新年祭り」`,
        [Locale.kr]: `【마족의 신년 축제】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0001,
    newUnit: [ UnitCode.f_baal ]
}

export default EVENT_0001