import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0120: Event = {
    code: '0120',
    type: EventType.CHALLENGE,
    startDate: '2024/02/14',
    endDate: '2024/02/28',
    color: EventTypeColor.CHALLENGE,
    name: {
        [Locale.tc]: `【星光璀璨☆超級偶像大對決～♪】`,
        [Locale.sc]: `【星光璀璨☆超级偶像大对决～♪】`,
        [Locale.en]: `[Streaming with the Stars☆Idol Showdown~♪]`,
        [Locale.jp]: `「キラキラ☆スーパーアイドル対決」`,
        [Locale.kr]: `【반짝이는 별☆슈퍼아이돌 대결】`
    },
    image: EventBanner.EVENT_0120,
    newUnit: []
}

export default EVENT_0120