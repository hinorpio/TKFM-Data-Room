import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0105: Event = {
    code: '0105',
    type: EventType.POINT,
    startDate: '2023/09/13',
    endDate: '2023/10/11',
    color: EventTypeColor.POINT,
    name: {
        [Locale.tc]: `【遊戲夜驚魂】`,
        [Locale.sc]: `【游戏夜惊魂】`,
        [Locale.en]: `[Game Night of Panic]`,
        [Locale.jp]: `「ゲームナイトパニック」`,
        [Locale.kr]: `【게임 나이트 오브 소울】`
    },
    description: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    banner: EventBanner.EVENT_0105,
    newUnit: [ UnitCode.a_usagihime, UnitCode.d_miru, UnitCode.nyoro ],
    isParentEvent: true,
    parentEvent: null,
    childEvent: [],
    isReturn: false,
    returnFrom: null
}

export default EVENT_0105