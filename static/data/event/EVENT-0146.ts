import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0146: Event = {
    code: '0146',
    type: EventType.POINT,
    startDate: '2024/08/28',
    endDate: '2024/09/11',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【來自星空的妳-復刻-】`,
        [Locale.sc]: `【来自星空的妳-复刻-】`,
        [Locale.en]: `[From the Stars -Comeback-]`,
        [Locale.jp]: `「星から来たあなた-復刻-」`,
        [Locale.kr]: `【별에서 온 그녀-복각-】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0146,
    newUnit: [],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0146