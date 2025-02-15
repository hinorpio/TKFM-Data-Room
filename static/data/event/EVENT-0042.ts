import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0042: Event = {
    code: '0042',
    type: EventType.POINT,
    startDate: '2022/03/09',
    endDate: '2022/03/30',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【魔王被遠征】`,
        [Locale.sc]: `【魔王被远征】`,
        [Locale.en]: `[Demon Destroyers]`,
        [Locale.jp]: `「征伐される魔王」`,
        [Locale.kr]: `【켠 김에 마왕까지】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0042,
    newUnit: [ UnitCode.miru, UnitCode.uruta, UnitCode.ayane, UnitCode.muila ]
}

export default EVENT_0042