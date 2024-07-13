import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10015: Unit = {
    ID: "10015",
    metaCode: "juneau",
    prefix: {
        [Locale.tc]: "大將軍",
        [Locale.sc]: null,
        [Locale.en]: "General",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "朱諾安",
        [Locale.sc]: null,
        [Locale.en]: "Juneau",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "將軍", "將", "扶他" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "朱諾安是法斯帝國的大將軍，統率著帝國最強部隊。作為將軍的她熟讀兵法、擅於指揮，雖然身居高位也依然沒有放下劍術的訓練，文武雙全的朱諾安在帝國境內擁有很高的人望，是法斯皇帝最為倚賴的重臣。朱諾安一直以來對外都戴著張冷酷的面具，以掩飾她真實的內心以及想法，且對於所有異性的獻媚總是不假辭色，但在她被稱作難攻不落要塞的背後，其實是為了隱藏一個不可告人的祕密……\n\n『將勝利獻給陛下與帝國！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.juneau],
    thumbnail: UnitEssence[UnitCode.juneau],
    selection: UnitSelection[UnitCode.juneau],
    clothes: UnitFullImage[UnitCode.juneau],
    tagList: [
        TagID.ELEMENT_DARK, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_GIANT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_SUPPORT,
    ], 
    otherVersion: [ UnitCode.m_juneau ],
    puzzle: [],
    skillSet: []
}