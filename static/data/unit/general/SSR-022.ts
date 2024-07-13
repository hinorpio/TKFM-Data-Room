import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10033: Unit = {
    ID: "10033",
    metaCode: "aridya",
    prefix: {
        [Locale.tc]: "食夢",
        [Locale.sc]: null,
        [Locale.en]: "Dreameater",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "阿爾蒂雅",
        [Locale.sc]: null,
        [Locale.en]: "Aridya",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "食夢", "睡蘿", "夢蘿" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "總是沒睡飽的女孩子…其實是以其他生物的夢境為食的食夢獸！食夢獸能夠自由在虛實狀態切換，並且潛入他人的夢境，更改夢境內容，甚至將人永遠囚禁在夢中。但由於種族天生自帶的詛咒，食夢獸永遠會處於沒睡飽的狀態，自然也就對睡覺以外的一切都不感興趣了。食夢獸的一生往往只會在他人的夢境中不斷漂流。雖然沒有天敵，但因為總是在睡覺，連進食的慾望都很低，更別提說交配了。至今食夢獸數量已經非常稀少，據學者推測，或許在百年之內食夢獸就會徹底滅絕……\n\n『哈姆…好睏…好想睡……』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2021/08/25",
    essence: UnitEssence[UnitCode.aridya],
    thumbnail: UnitEssence[UnitCode.aridya],
    selection: UnitSelection[UnitCode.aridya],
    clothes: UnitFullImage[UnitCode.aridya],
    tagList: [
        TagID.ELEMENT_DARK,
        TagID.POSITION_OBSTRUCTER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BREAST_FLAT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_WEAKEN,
    ],
    otherVersion: [ UnitCode.s_aridya, UnitCode.x_aridya ],
    puzzle: [],
    skillSet: []
}