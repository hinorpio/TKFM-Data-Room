import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10903: Unit = {
    ID: "10903",
    metaCode: "flay",
    prefix: {
        [Locale.tc]: "魔族戰士",
        [Locale.sc]: null,
        [Locale.en]: "Demon Soldier",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "芙蕾",
        [Locale.sc]: null,
        [Locale.en]: "Flay",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "芙蕾" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "芙蕾是一位天生的魔族戰士。相較於其他智力低下只知道殺戮的魔族，她更知曉虐待人類才能得到更大的快感跟甜美的靈魂。她對於自身的魔族身份充滿自傲，認為魔族是最優秀的種族。\n\n『光殺死他們也未免太仁慈了，呵。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.LIGHT,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.flay],
    thumbnail: UnitEssence[UnitCode.flay],
    selection: UnitSelection[UnitCode.flay],
    clothes: UnitFullImage[UnitCode.flay],
    tagList: [ 
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.DEMON_FLAY ],
    skillSet: []
}