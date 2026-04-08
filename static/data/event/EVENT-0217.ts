import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0217: Event = {
    code: '0217',
    type: EventType.POINT,
    startDate: '2026/04/01',
    endDate: '2026/04/15',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【超超超超超喜歡凱薩的一百個伊布力斯】`,
        [Locale.sc]: `【超超超超超喜欢凯萨的一百个伊布力斯】`,
        [Locale.en]: `[XOXOXOXO 100 Caesar-Adoring Iblises]`,
        [Locale.jp]: `「シーザーのことが大大大大大好きな100人のイブリース」`,
        [Locale.kr]: `【시저를 너무너무너무너무 좋아하는 100명의 이블리스】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0217,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0217