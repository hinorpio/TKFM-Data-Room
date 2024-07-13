import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10078: Unit = {
    ID: "10078",
    metaCode: "c_lulu",
    prefix: {
        [Locale.tc]: "慵懶貓貓",
        [Locale.sc]: null,
        [Locale.en]: "Lazy Cat",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "露露",
        [Locale.sc]: null,
        [Locale.en]: "Lulu",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "貓露" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "只想安逸度日的公主，一覺醒來，不曉得為什麼突然變成貓了！喵？發生了什麼事？為什麼自己會有跟娜娜一樣的耳朵，還忍不住喵喵叫呢？面對未知的身體變化，露露並沒有感到慌張，反而充滿一股迷之自信。「人家是偉大的露露，其他人都是為了服侍露露而存在的，這就是世界的真理喵！」雖然大家好像都在忙什麼重要的事情，但那都和露露沒關係，從今天開始，她想做什麼就做什麼！\n\n『喵嗚，奴僕們，把飯飯送上來喵～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/03/08",
    essence: UnitEssence[UnitCode.c_lulu],
    thumbnail: UnitEssence[UnitCode.c_lulu],
    selection: UnitSelection[UnitCode.c_lulu],
    clothes: UnitFullImage[UnitCode.c_lulu],
    tagList: [],
    otherVersion: [ UnitCode.lulu, UnitCode.s_lulu, UnitCode.w_lulu, UnitCode.p_lulu ],
    puzzle: [],
    skillSet: []
}