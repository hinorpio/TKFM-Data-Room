import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0092: Event = {
    code: '0092',
    type: EventType.CHALLENGE,
    startDate: '2023/05/17',
    endDate: '2023/05/31',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【醫療器材錯誤使用法】`,
        [Locale.sc]: `【医疗器材的错误使用法】`,
        [Locale.en]: `[Misuse]`,
        [Locale.jp]: `「医療機器の誤った使い方」`,
        [Locale.kr]: `【의료기기의 잘못된 사용법】`
    },
    image: EventBanner.EVENT_0092,
    newUnit: []
}

export default EVENT_0092