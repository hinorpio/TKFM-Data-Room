import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10116: Unit = {
    ID: "10116",
    metaCode: "s_ayane",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "神田綾音",
        [Locale.sc]: null,
        [Locale.en]: "Ayane",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "夏勇" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "說到炎炎夏日最受人們歡迎的活動，那自然是到清涼暢快的海邊肆意玩水！對於失去網路和手機這些現代娛樂的神田綾音來說，到海灘玩水已經可以算得上是難得的娛樂活動了。只不過，因為某些不可張揚的原因，神田綾音來到了巴爾商會擔任志工，腦中裝著『這裡只是普通的渡假村，不會發生什麼奇怪事情』的想法。勇者並不曉得，自己在異世界度過的第一個夏天註定不會平凡；抱持著錯誤期待，努力揮灑甘甜的汗水，神田綾音的夏天，才正要開始！\n\n『請不要小看少女對季節限定甜點的決心！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/06/07",
    essence: UnitEssence[UnitCode.s_ayane],
    thumbnail: UnitEssence[UnitCode.s_ayane],
    selection: UnitSelection[UnitCode.s_ayane],
    clothes: UnitFullImage[UnitCode.s_ayane],
    tagList: [],
    otherVersion: [ UnitCode.ayane, UnitCode.h_ayane ],
    puzzle: [],
    skillSet: []
}