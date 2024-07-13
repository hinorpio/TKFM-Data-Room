import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10021: Unit = {
    ID: "10021",
    metaCode: "shiro",
    prefix: {
        [Locale.tc]: "賢者",
        [Locale.sc]: null,
        [Locale.en]: "Sage",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "白",
        [Locale.sc]: null,
        [Locale.en]: "Shiro",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "賢者", "白" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "存活了相當漫長的歲月，隱居在法斯帝國境內的賢者。曾在法斯帝國還很弱小時給予當時的皇帝許多有用的意見，因此至今仍擁有著極高的身份地位。由於對法斯帝國歧視異族以及日益膨脹的天選意識不滿而避世，直到感受到勇者召喚儀式的魔力波動才重新出現在世人面前。雖然不喜爭鬥，實際上卻是文武雙全的通才，許多歷史上有名的勇者都曾接受過她的指導。\n\n『若遇到不懂之事，隨時能請教老身。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2023/01/04",
    essence: UnitEssence[UnitCode.shiro],
    thumbnail: UnitEssence[UnitCode.shiro],
    selection: UnitSelection[UnitCode.shiro],
    clothes: UnitFullImage[UnitCode.shiro],
    tagList: [
        TagID.ELEMENT_WIND,
        TagID.POSITION_HEALER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.CLASS_LEADER,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_SUPPORT,
    ],
    otherVersion: [ UnitCode.h_shiro ],
    puzzle: [],
    skillSet: []
}