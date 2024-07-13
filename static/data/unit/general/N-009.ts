import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10909: Unit = {
    ID: "10909",
    metaCode: "charlene",
    prefix: {
        [Locale.tc]: "雙蛇軍團士兵",
        [Locale.sc]: null,
        [Locale.en]: "Mercenary",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "夏琳",
        [Locale.sc]: null,
        [Locale.en]: "Charlene",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "夏琳" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "夏琳自從成年後就一直在雙蛇軍團工作，跟隨著軍團從東到西，由南到北。身經百戰的她至今已經是一名非常資深的傭兵。她一直偷偷愛慕著團長克里斯，只是卻沒有勇氣說出自己的感情。\n\n『為了雙蛇軍團！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.FIRE,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.charlene],
    thumbnail: UnitEssence[UnitCode.charlene],
    selection: UnitSelection[UnitCode.charlene],
    clothes: UnitFullImage[UnitCode.charlene],
    tagList: [ 
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_AOE,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_CHARLENE ],
    skillSet: []
}