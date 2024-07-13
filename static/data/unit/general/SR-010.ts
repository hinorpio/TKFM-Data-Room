import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10038: Unit = {
    ID: "10038",
    metaCode: "tyrella",
    prefix: {
        [Locale.tc]: "魔法少女",
        [Locale.sc]: null,
        [Locale.en]: "Magical Knight",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "托特拉",
        [Locale.sc]: null,
        [Locale.en]: "Tyrella",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "托特拉", "托" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "托特拉一直有個夢想，希望能行走於四處，幫助弱勢的人。因此當她發現自己有魔法的天賦時，決定踏上這條路，開始在各地流浪。也開始以魔法美少女之名行走於各處，貫徹自己的夢想。對於功名、利益等等一概沒有什麼興趣，只想要更加努力在自己的夢想之中。勇於挑戰各種事物，不管是任何的狀況，她都無畏無懼。\n\n『以魔法美少女之名，我會懲罰你！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/07/14",
    essence: UnitEssence[UnitCode.tyrella],
    thumbnail: UnitEssence[UnitCode.tyrella],
    selection: UnitSelection[UnitCode.tyrella],
    clothes: UnitFullImage[UnitCode.tyrella],
    tagList: [
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_WEAKEN,
        TagID.OTHER_EXPLOSIVENESS,
    ], 
    otherVersion: [ UnitCode.p_tyrella ],
    puzzle: [],
    skillSet: []
}