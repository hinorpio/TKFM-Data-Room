import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10153: Unit = {
    ID: "10153",
    metaCode: "h_satan",
    prefix: {
        [Locale.tc]: "純真殺意",
        [Locale.sc]: "纯真杀意",
        [Locale.en]: "Genuine Murderess",
        [Locale.jp]: "ピュアな殺意",
        [Locale.kr]: "순수한 살의"
    },
    name: {
        [Locale.tc]: "撒旦",
        [Locale.sc]: "撒旦",
        [Locale.en]: "Satan",
        [Locale.jp]: "サタン",
        [Locale.kr]: "사탄"
    },
    abbreviation: {
        [Locale.tc]: [ "幼撒", "幼旦", "萬撒", "萬旦" ],
        [Locale.sc]: [ "幼撒", "幼旦", "万撒", "万旦" ],
        [Locale.en]: [ "H.Satan" ],
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
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/10/16",
    essence: UnitEssence[UnitCode.h_satan],
    thumbnail: UnitEssence[UnitCode.h_satan],
    selection: UnitSelection[UnitCode.h_satan],
    clothes: UnitFullImage[UnitCode.h_satan],
    tagList: [],
    otherVersion: [ UnitCode.satan, UnitCode.e_satan, UnitCode.b_satan, UnitCode.v_satan, UnitCode.s_satan ],
    puzzle: [],
    skillSet: []
}