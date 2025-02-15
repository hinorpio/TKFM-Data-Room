import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0156: Event = {
    code: '0156',
    type: EventType.POINT,
    startDate: '2024/11/13',
    endDate: '2024/12/04',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【夢幻偶像☆一日女僕】`,
        [Locale.sc]: `【梦幻偶像☆一日女仆】`,
        [Locale.en]: `[Dreamy Idol ☆ Maid]`,
        [Locale.jp]: `「夢のアイドル☆1日メイド」`,
        [Locale.kr]: `【꿈의 아이돌☆일일 메이드】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0156,
    newUnit: [ UnitCode.m_nanami, UnitCode.m_ks8 ]
}

export default EVENT_0156