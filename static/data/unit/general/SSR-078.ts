import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10115: Unit = {
    ID: "10115",
    metaCode: "m_britney",
    prefix: {
        [Locale.tc]: "魔法少女",
        [Locale.sc]: null,
        [Locale.en]: "Magical Maiden",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "布蘭妮",
        [Locale.sc]: null,
        [Locale.en]: "Britney",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "風軍" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "為了阻止神秘的犯罪集團在邊境犯下罪行，布蘭妮隨軍前去平叛，卻意外碰上危機。情急之下，她握住D之一族古老的聖物，化身成魔法少女，成功將敵人全數驅逐。只不過，機智如她仍無法想到的是，成為魔法少女不只要身穿羞恥的暴露服裝，還要被迫念出奇怪又羞恥的台詞。倒楣的魔法少女布蘭妮必須和自己失魂落魄的夥伴朱諾安，可疑的吉祥物，以及不可靠的魔法少女前輩，一起對抗奇怪的變態犯罪集團。究竟，布蘭妮是否能夠成功打倒四處亂偷男人性器官的邪惡組織，將眾人的男根盡數解放呢？\n\n『溫柔自信，熱情洋溢☆閃亮的天才魔法少女布蘭妮，要代替正義懲罰你～☆』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/04/07",
    essence: UnitEssence[UnitCode.m_britney],
    thumbnail: UnitEssence[UnitCode.m_britney],
    selection: UnitSelection[UnitCode.m_britney],
    clothes: UnitFullImage[UnitCode.m_britney],
    tagList: [],
    otherVersion: [ UnitCode.britney, UnitCode.h_britney ],
    puzzle: [],
    skillSet: []
}