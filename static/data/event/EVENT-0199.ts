import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0199: Event = {
    code: '0199',
    type: EventType.POINT,
    startDate: '2025/10/29',
    endDate: '2025/11/12',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【鮮血城 X 少女狂想曲-復刻-】`,
        [Locale.sc]: `【鲜血城 X 少女狂想曲-复刻-】`,
        [Locale.en]: `[City of Blood X -Comeback-]`,
        [Locale.jp]: `「鮮血の城 X 少女狂想曲-復刻-」`,
        [Locale.kr]: `【선혈의 성 X 소녀의 광상곡-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0199,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0199