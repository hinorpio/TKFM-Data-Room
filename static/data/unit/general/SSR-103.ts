import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10133: Unit = {
    ID: "10133",
    metaCode: "nanami",
    prefix: {
        [Locale.tc]: "甜心偶像",
        [Locale.sc]: null,
        [Locale.en]: "Sweetheart Idol",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "星空奈奈美",
        [Locale.sc]: null,
        [Locale.en]: "Nanami",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "奈奈美", "773" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "HS-Ⅲ星空奈奈美是古代魔導文明生產的魔導人偶，正式名稱為HS型Ⅲ號機。她和諾艾莉一樣，是作為娛樂用魔導人偶被開發出來的產品，但與諾艾莉有所不同的是，奈奈美的身上裝載了許多性愛機能，不管是要產乳、潮吹，愛液流出還是控制穴壓，都能夠輕鬆做到。在發現自己身處的世界發生天翻地覆的變化後，奈奈美雖然詫異，但卻並不迷茫。因為她很清楚，自己不管在哪個時代都只有一個目的——她要成為眾人心中最閃耀的那顆星。\n\n『大家～奈奈美最愛你們了唷～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/02/05",
    essence: UnitEssence[UnitCode.nanami],
    thumbnail: UnitEssence[UnitCode.nanami],
    selection: UnitSelection[UnitCode.nanami],
    clothes: UnitFullImage[UnitCode.nanami],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}