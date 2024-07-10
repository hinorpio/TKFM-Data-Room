import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10093: Unit = {
    ID: "10093",
    metaCode: "c1_nana",
    prefix: {
        [Locale.tc]: "適格者",
        [Locale.sc]: null,
        [Locale.en]: "Chosen One",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "娜娜",
        [Locale.sc]: null,
        [Locale.en]: "Nana",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "秋娜", "星娜", "適娜" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "自從拾獲了奇異的隕石碎片後，娜娜獲得了神奇的變身能力。跑得比風還快，飛得跟星星一樣高，徒手能抓碎岩石、超強的感知，甚至能發射奇妙的光線。如果是現在的她，說不定就算魔王也有一戰之力？然而自從可以變身以後，神祕第六感就一直警示危險。似乎在某個地方，有著她命中註定得要打倒的宿敵……不過在這之前，娜娜決定把這份新力量先用在工作上，使它發光發熱。\n\n『現在本喵可以做更多的工作了喵。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/09/07",
    essence: UnitEssence[UnitCode.c1_nana],
    thumbnail: UnitEssence[UnitCode.c1_nana],
    selection: UnitSelection[UnitCode.c1_nana],
    clothes: UnitFullImage[UnitCode.c1_nana],
    tagList: [],
    otherVersion: [ UnitCode.nana, UnitCode.s_nana, UnitCode.o_nana ],
    puzzle: [],
    skillSet: []
}