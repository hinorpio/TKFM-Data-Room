import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0040: Event = {
    code: '0040',
    type: EventType.CHALLENGE,
    startDate: '2022/02/16',
    endDate: '2022/03/09',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【魔王的執念】`,
        [Locale.sc]: `【魔王的执念】`,
        [Locale.en]: `[Archdemon's Obsession]`,
        [Locale.jp]: `「魔王の執念」`,
        [Locale.kr]: `【마왕의 집념】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0040,
    newUnit: []
}

export default EVENT_0040