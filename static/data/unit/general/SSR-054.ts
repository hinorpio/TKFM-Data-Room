import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10085: Unit = {
    ID: "10085",
    metaCode: "kana",
    prefix: {
        [Locale.tc]: "花魁",
        [Locale.sc]: null,
        [Locale.en]: "Oiran",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "香奈",
        [Locale.sc]: null,
        [Locale.en]: "Kana",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "花魁", "魁", "香奈" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "香奈曾經是烈日國歌舞伎町的首席遊女，素有「傳說中的花魁」之稱。不僅集書、畫、文、舞等才藝於一身，在她那美麗、端莊而知性的外貌底下，更是有著寢技高超、精通烈日國四十八手的一面。烈日國的貴族上至皇室下至諸大名，若想見她一面，都必須要先通過各式各樣的禮節測驗，並顯露充足的財力，才有機會一親芳澤。曾經有位皇子為了見到她，甚至不惜將搭建城堡的一半資金挪用到宴會上，就只為了博得美人歡心。然而，在烈日國覆滅之後，這位傾國傾城之女的下落也隨之不明。那些昔日的國民謠傳道，香奈也許正隱居在某處的山中也說不定。\n\n『不論何時都要保持優雅的姿態，是花魁的基本哦。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2022/07/13",
    essence: UnitEssence[UnitCode.kana],
    thumbnail: UnitEssence[UnitCode.kana],
    selection: UnitSelection[UnitCode.kana],
    clothes: UnitFullImage[UnitCode.kana],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}