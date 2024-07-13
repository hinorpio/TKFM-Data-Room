import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10132: Unit = {
    ID: "10132",
    metaCode: "cartilla",
    prefix: {
        [Locale.tc]: "幽夜女爵",
        [Locale.sc]: null,
        [Locale.en]: "Dark Countess",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "卡蒂雅",
        [Locale.sc]: null,
        [Locale.en]: "Cartilla",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "女爵" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "卡蒂雅的性格敏銳機靈，面對任何難關都游刃有餘，會以言語的調笑帶過，讓人摸不清底細與真意。她原本是受雇於伊娜絲的盜賊傭兵，在任務成功後一度想盜取寶物脫身，結果反被艾洛斯抓個正著。在受到艾洛斯的懲戒後便臣服於他，與兩人結伴同行。雖然表面看上去是個冰山美女，但實際上是個喜歡開玩笑的人。\n\n『那個魔王跟艾洛斯面對性慾的態度還真像，男人果然都是用下半身思考的動物吧。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/11/15",
    essence: UnitEssence[UnitCode.cartilla],
    thumbnail: UnitEssence[UnitCode.cartilla],
    selection: UnitSelection[UnitCode.cartilla],
    clothes: UnitFullImage[UnitCode.cartilla],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}