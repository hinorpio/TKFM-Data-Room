import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10922: Unit = {
    ID: "10922",
    metaCode: "prototype",
    prefix: {
        [Locale.tc]: "",
        [Locale.sc]: null,
        [Locale.en]: "Prototype",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "試作機三號",
        [Locale.sc]: null,
        [Locale.en]: "#3",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "嗶嗶" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "沒有任何感情，就連基礎的人工智能也沒有安裝，只會執行命令的機械兵。因為材料的關係，在建造時突破性的使用了魔晶石作為能源。物理防禦極強，但相對的對魔法的抵抗能力非常差勁。因為直到開發到第三型才能投入實戰，因此戰場上不會看到一號與二號機型。\n\n『滴、滴滴…偵查到敵蹤。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/03/10",
    essence: UnitEssence[UnitCode.prototype],
    thumbnail: UnitEssence[UnitCode.prototype],
    selection: UnitSelection[UnitCode.prototype],
    clothes: UnitFullImage[UnitCode.prototype],
    tagList: [ 
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_ATTACKER, 
        TagID.BODY_SMALL_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}