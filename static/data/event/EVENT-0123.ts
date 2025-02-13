import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

const EVENT_0123: Event = {
    code: '0123',
    type: EventType.POTENTIAL,
    startDate: '2024/02/21',
    endDate: '2024/03/06',
    color: EventTypeColor.POTENTIAL,
    name: {
        [Locale.tc]: `【悠閒無事的本大爺凱薩邊境城鎮成為冒險者展開緊張刺激大冒險-復刻-】`,
        [Locale.sc]: `【悠闲无事的本大爷凯萨边境城镇成为冒险者展开紧张刺激大冒险-复刻-】`,
        [Locale.en]: `[Caesar's bored... so he joins the Adventurer's Guild! -Comeback-]`,
        [Locale.jp]: `「暇で死にそうな俺様シーザー 辺境の村で冒険者になって 刺激満載の大冒險に出かけるとしよう-復刻-」`,
        [Locale.kr]: `【무료함을 느끼던 이 몸께서 변경 지대의 모험가가 되어 펼쳐나가는 스펙터클 어드벤처-복각-】`
    },
    image: EventBanner.EVENT_0123,
    newUnit: []
}

export default EVENT_0123