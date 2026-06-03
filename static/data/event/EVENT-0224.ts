import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0224: Event = {
    code: '0224',
    type: EventType.CHALLENGE,
    startDate: '2026/06/10',
    endDate: '2026/07/01',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【怪獸大戰爭】`,
        [Locale.sc]: `【怪兽大战争】`,
        [Locale.en]: `[Big Baddie Boss Bash]`,
        [Locale.jp]: `「怪獣大戦争」`,
        [Locale.kr]: `【괴수 대전쟁】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0224,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0224
