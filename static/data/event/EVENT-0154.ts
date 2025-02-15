import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0154: Event = {
    code: '0154',
    type: EventType.CHALLENGE,
    startDate: '2024/10/30',
    endDate: '2024/11/06',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【殺意的行進】`,
        [Locale.sc]: `【杀意的行进】`,
        [Locale.en]: `[Murderous Path]`,
        [Locale.jp]: `「殺意の行進」`,
        [Locale.kr]: `【살의의 행진】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0154,
    newUnit: []
}

export default EVENT_0154