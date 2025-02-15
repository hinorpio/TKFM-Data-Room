import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0001_RETURN: Event = {
    code: '0001_RETURN',
    type: EventType.POINT,
    startDate: '2022/01/12',
    endDate: '2022/01/26',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【魔族的新年祭典-復刻-】`,
        [Locale.sc]: `【魔族的新年祭典-复刻-】`,
        [Locale.en]: `[DEMON'S New Year Party -Comeback-]`,
        [Locale.jp]: `「魔族の新年祭り-復刻-」`,
        [Locale.kr]: `【마족의 신년 축제-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0001_RETURN,
    newUnit: []
}

export default EVENT_0001_RETURN