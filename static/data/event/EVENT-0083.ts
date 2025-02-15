import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0083: Event = {
    code: '0083',
    type: EventType.CHALLENGE,
    startDate: '2023/03/15',
    endDate: '2023/03/29',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【全魔族獸耳化計畫】`,
        [Locale.sc]: `【全魔族兽耳化计画】`,
        [Locale.en]: `[The Animal-Ear Plan]`,
        [Locale.jp]: `「魔族ALL獣耳化計画」`,
        [Locale.kr]: `【전마족 동물귀화 계획】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0083,
    newUnit: []
}

export default EVENT_0083