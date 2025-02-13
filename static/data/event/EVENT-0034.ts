import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0034: Event = {
    code: '0034',
    type: EventType.POINT,
    startDate: '2021/12/15',
    endDate: '2022/01/12',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【女僕響叮噹】`,
        [Locale.sc]: `【女仆响叮当】`,
        [Locale.en]: `[Maid's Bell]`,
        [Locale.jp]: `「メイドがベルを鳴らす」`,
        [Locale.kr]: `【메이드의 종소리】`
    },
    image: EventBanner.EVENT_0034,
    newUnit: [ UnitCode.x_aiko, UnitCode.x_lana, UnitCode.evie ]
}

export default EVENT_0034