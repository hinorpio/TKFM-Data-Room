import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0065: Event = {
    code: '0065',
    type: EventType.POINT,
    startDate: '2022/10/26',
    endDate: '2022/11/16',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【鮮血城 X 少女狂想曲】`,
        [Locale.sc]: `【鲜血城 X 少女狂想曲】`,
        [Locale.en]: `[City of Blood X]`,
        [Locale.jp]: `「鮮血の城 X 少女狂想曲」`,
        [Locale.kr]: `【선혈의 성 X 소녀의 광상곡】`
    },
    image: EventBanner.EVENT_0065,
    newUnit: [ UnitCode.h_leona, UnitCode.h_lotiya ]
}

export default EVENT_0065