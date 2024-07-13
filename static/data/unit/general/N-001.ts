import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10901: Unit = {
    ID: "10901",
    metaCode: "saria",
    prefix: {
        [Locale.tc]: "法斯帝國士兵",
        [Locale.sc]: null,
        [Locale.en]: "Phasi Soldier",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "賽蓮",
        [Locale.sc]: null,
        [Locale.en]: "Saria",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "賽蓮" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "法斯帝國士兵賽蓮在法斯帝國工作已久，是一位熟練的士兵。對於戰爭沒有特別的喜惡，單純就是為了賺錢才投入這個工作。一直希望自己有朝一日可以賺大錢並卸甲歸田，只是距離那一天的到來還相當遙遠。\n\n『存錢存錢！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.DARK,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.saria],
    thumbnail: UnitEssence[UnitCode.saria],
    selection: UnitSelection[UnitCode.saria],
    clothes: UnitFullImage[UnitCode.saria],
    tagList: [ 
        TagID.ELEMENT_DARK, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_SARIA, PuzzleCode.DEMON_FLAY ],
    skillSet: []
}