import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10077: Unit = {
    ID: "10077",
    metaCode: "bayliss",
    prefix: {
        [Locale.tc]: "黑鷹",
        [Locale.sc]: null,
        [Locale.en]: "Black Hawk",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "貝里絲",
        [Locale.sc]: null,
        [Locale.en]: "Bayliss",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "黑鷹" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "貝里絲是一位經驗豐富的旅行家，也是一位天生的嚮導。對未知充滿好奇心的她，熱衷於到世界各地探險，體驗新奇的經驗。她爬過陡峭如懸崖的高山，橫越過危險四伏的沙漠，探索過漆黑神秘的洞窟，甚至在某個遙遠的部落學習魔法，通過試煉，獲得了「黑鷹」的稱號。儘管有時候她會因為過於旺盛的好奇心，讓自己遭遇危險，但是貝里絲總是能憑藉著不錯的運氣、以及強大的生存技巧逢凶化吉。在她看來，沒有什麼比面對未知的挑戰更令人刺激的事情了！\n\n『對於真正喜歡、熱愛的事情，不需要猶豫，馬上就去做吧！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/08/09",
    essence: UnitEssence[UnitCode.bayliss],
    thumbnail: UnitEssence[UnitCode.bayliss],
    selection: UnitSelection[UnitCode.bayliss],
    clothes: UnitFullImage[UnitCode.bayliss],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}