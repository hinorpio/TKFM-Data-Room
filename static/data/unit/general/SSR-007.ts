import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10017: Unit = {
    ID: "10017",
    metaCode: "f_baal",
    prefix: {
        [Locale.tc]: "祭典狂歡",
        [Locale.sc]: null,
        [Locale.en]: "Festive",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "巴爾",
        [Locale.sc]: null,
        [Locale.en]: "Ba'al",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "祭巴", "G8" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "在東方的烈日國有著在迎接新一年開始的第一天舉辦慶典的習俗。雖然魔界並沒有這樣的傳統，不過節慶即等同商機。像這種能大撈一筆的機會，擁有精明商業頭腦的魔王巴爾可不會放過。換上與以往不同風格的服飾，魔王巴爾打算在魔界推行與烈日國同樣的節日與慶典，並且從此定為傳統。祭典、搗年糕、攤販小吃…只要能搬能照抄的就原樣複製過來。在魔界舉辦的人類慶典最後究竟能收獲什麼樣的成果，目前尚無人知曉。\n\n『呀哈哈，人家要趁這機會大賺一票～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2020/12/30",
    essence: UnitEssence[UnitCode.f_baal],
    thumbnail: UnitEssence[UnitCode.f_baal],
    selection: UnitSelection[UnitCode.f_baal],
    clothes: UnitFullImage[UnitCode.f_baal],
    tagList: [],
    otherVersion: [ UnitCode.baal, UnitCode.b_baal ],
    puzzle: [],
    skillSet: []
}