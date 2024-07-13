import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10056: Unit = {
    ID: "10056",
    metaCode: "karina",
    prefix: {
        [Locale.tc]: "墮龍",
        [Locale.sc]: null,
        [Locale.en]: "Fallen Dragon",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "凱茜菲娜",
        [Locale.sc]: null,
        [Locale.en]: "Karina",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "墮龍", "螃蟹" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "感染了被視為龍族絕症的結晶病，族群內的龍族為了避免病毒擴散，將凱茜菲娜關押了起來。有一天凱茜菲娜在結晶化的折磨下，發狂掙脫了鐐銬。結晶化的症狀雖然讓凱茜菲娜無時不刻都感受著疼痛，卻沒有削弱她的戰力，反而給予了凱茜菲娜比起其他龍族更堅硬的防禦。不想再繼續過著以往那不見天日的囚禁生活，凱茜菲娜逃離了聚落，並且為了緩解痛苦捨棄了龍身，只以半龍人的面貌行動。今日的凱茜菲娜也在世界上遊盪著，希望能在被病魔擊垮之前，找尋到屬於她生命的意義。\n\n『…好痛…好痛…好痛啊啊啊……』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: false,
    releaseDate: "2021/09/29",
    essence: UnitEssence[UnitCode.karina],
    thumbnail: UnitEssence[UnitCode.karina],
    selection: UnitSelection[UnitCode.karina],
    clothes: UnitFullImage[UnitCode.karina],
    tagList: [
        TagID.ELEMENT_WATER,
        TagID.POSITION_PROTECTOR,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_GIANT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_COUNTERSTRIKE,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}