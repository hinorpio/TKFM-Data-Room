import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10152: Unit = {
    ID: "10152",
    metaCode: "susan",
    prefix: {
        [Locale.tc]: "治癒之星",
        [Locale.sc]: "治愈之星",
        [Locale.en]: "Healing Star",
        [Locale.jp]: "治癒のスター",
        [Locale.kr]: "치유의 별"
    },
    name: {
        [Locale.tc]: "蘇珊",
        [Locale.sc]: "苏珊",
        [Locale.en]: "Susan",
        [Locale.jp]: "スーザン",
        [Locale.kr]: "수잔"
    },
    abbreviation: {
        [Locale.tc]: [ "萬煌" ],
        [Locale.sc]: [],
        [Locale.en]: [ "H.Daphne", "H.Susan" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/10/16",
    essence: UnitEssence[UnitCode.susan],
    thumbnail: UnitEssence[UnitCode.susan],
    selection: UnitSelection[UnitCode.susan],
    clothes: UnitFullImage[UnitCode.susan],
    tagList: [],
    otherVersion: [ UnitCode.daphne ],
    puzzle: [],
    skillSet: []
}