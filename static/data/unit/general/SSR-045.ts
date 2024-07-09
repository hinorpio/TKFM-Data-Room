import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10075: Unit = {
    ID: "10075",
    metaCode: "w_chizuru",
    prefix: {
        [Locale.tc]: "夢遊魔境",
        [Locale.sc]: null,
        [Locale.en]: "Wonderland",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "千鶴",
        [Locale.sc]: null,
        [Locale.en]: "Chizuru",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "夢鶴", "夢千" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "作為不死生物的千鶴已經習慣了死去的肉體，某天卻產生了突然的變化。不可思議的力量讓她再次感受到手指的觸覺、身體的溫度。然而，她身處的卻不是熟悉的魔王城，而是一個不可思議的國度。露齒笑的貓與紙牌人陸續出現，還有一隻重傷垂危的兔子？！\n\n『我已經不行了…我的使命…懷錶就託付給妳了…！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2022/04/20",
    essence: UnitEssence[UnitCode.w_chizuru],
    thumbnail: UnitEssence[UnitCode.w_chizuru],
    selection: UnitSelection[UnitCode.w_chizuru],
    clothes: UnitFullImage[UnitCode.w_chizuru],
    tagList: [],
    otherVersion: [ UnitCode.chizuru ],
    puzzle: [],
    skillSet: []
}