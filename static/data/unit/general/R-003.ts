import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10803: Unit = {
    ID: "10803",
    metaCode: "iris",
    prefix: {
        [Locale.tc]: "龍女",
        [Locale.sc]: null,
        [Locale.en]: "Dragoon",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "伊維絲",
        [Locale.sc]: null,
        [Locale.en]: "Iris",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "龍女", "龍", "焚化爐" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "伊維絲是龍人族的少女，雖然已經活了三百多年，但依然不改孩子心性，個性開朗且親切。對於男女之間情感一點都不了解，更沒有性的概念，天真的伊維絲從別處得知了魔族大軍的侵略，本是為了勸說凱薩停止入侵而來，但不知怎麼的卻和凱薩打成一片，自然而然的成為了凱薩麾下的其中一員。據凱薩的親信推測，兩人異常投緣的原因可能是心理年齡相近……\n\n『今天要玩甚麼好呢？嘻嘻！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.R,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.iris],
    thumbnail: UnitEssence[UnitCode.iris],
    selection: UnitSelection[UnitCode.iris],
    clothes: UnitFullImage[UnitCode.iris],
    tagList: [ 
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_SMALL_SIZED, 
        TagID.BREAST_FLAT_TITS, 
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_MORE_POWER,
        TagID.OTHER_AOE,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}