import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0007: Event = {
    code: '0007',
    type: EventType.POTENTIAL,
    startDate: '2021/02/03',
    endDate: '2021/02/24',
    color: EventTypeColor.POTENTIAL,
    name: {
        [Locale.tc]: `【狩獵假期】`,
        [Locale.sc]: `【狩猎假期】`,
        [Locale.en]: `[Hunting Season]`,
        [Locale.jp]: `「狩猟休暇」`,
        [Locale.kr]: `【사냥 휴가】`
    },
    image: EventBanner.EVENT_0007,
    newUnit: []
}

export default EVENT_0007