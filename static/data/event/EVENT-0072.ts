import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0072: Event = {
    code: '0072',
    type: EventType.POINT,
    startDate: '2022/12/14',
    endDate: '2023/01/11',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【絕對聖誕~靜的秘湯巡禮】`,
        [Locale.sc]: `【绝对圣诞~静的秘汤巡礼】`,
        [Locale.en]: `[Shizuka's Pilgrimage]`,
        [Locale.jp]: `「静の秘湯巡り」`,
        [Locale.kr]: `【시즈카의 온천 순례】`
    },
    image: EventBanner.EVENT_0072,
    newUnit: [ UnitCode.xx_aiko, UnitCode.x_shizuka ]
}

export default EVENT_0072