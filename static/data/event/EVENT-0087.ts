import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0087: Event = {
    code: '0087',
    type: EventType.CHALLENGE,
    startDate: '2023/04/19',
    endDate: '2023/04/26',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【正義、智謀與魔杖】`,
        [Locale.sc]: `【正义、智谋与魔杖】`,
        [Locale.en]: `[Wise Wand & Justice]`,
        [Locale.jp]: `「正義・知謀・魔法の杖」`,
        [Locale.kr]: `【정의, 지략, 마법봉】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0087,
    newUnit: []
}

export default EVENT_0087