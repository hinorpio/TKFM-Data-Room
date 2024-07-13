import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10810: Unit = {
    ID: "10810",
    metaCode: "sophie",
    prefix: {
        [Locale.tc]: "人馬女僕",
        [Locale.sc]: null,
        [Locale.en]: "Centaur Maid",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "蘇菲",
        [Locale.sc]: null,
        [Locale.en]: "Sophie",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "蘇菲", "人馬" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "蘇菲是直屬艾可的魔王城女僕隊的新人女僕。雖然冒失且天然，不過因為半人馬的體質，能夠擔任搬運或其他需要力氣的工作，很快就得到了重用。實際上原本蘇菲是預定要加入軍隊的士兵，但是個性內向且討厭爭鬥的她偷偷改了志願，成了女僕隊的一員。被艾可灌輸了凱薩偉大且無所不能的思想，和其他女僕一樣崇拜著凱薩。\n\n『料理是甜的…我、我放進去的明明是鹽呀！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.R,
    element: Element.WATER,
    position: Position.SUPPORTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/12/01",
    essence: UnitEssence[UnitCode.sophie],
    thumbnail: UnitEssence[UnitCode.sophie],
    selection: UnitSelection[UnitCode.sophie],
    clothes: UnitFullImage[UnitCode.sophie],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}