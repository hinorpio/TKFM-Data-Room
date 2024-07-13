import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10923: Unit = {
    ID: "10923",
    metaCode: "steed",
    prefix: {
        [Locale.tc]: "人馬",
        [Locale.sc]: null,
        [Locale.en]: "Centaur Girl",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "賽希",
        [Locale.sc]: null,
        [Locale.en]: "Steed",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "賽希" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "賽希是直率且開朗的人馬騎兵。雖然人馬都是天生的神射手，然而賽希卻是罕見不擅長奔跑拉弓的異類。不過賽希卻從未因此煩惱，既然弓箭射不好，那就專注在騎兵衝鋒的領域！作為先鋒軍的她，今天也一馬當先的衝在騎兵隊的最前方。\n\n『要衝鋒囉－！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2023/12/13",
    essence: UnitEssence[UnitCode.steed],
    thumbnail: UnitEssence[UnitCode.steed],
    selection: UnitSelection[UnitCode.steed],
    clothes: UnitFullImage[UnitCode.steed],
    tagList: [ 
        TagID.ELEMENT_WIND, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMIHUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_GIANT_TITS,
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.DEMON_STEED ],
    skillSet: []
}