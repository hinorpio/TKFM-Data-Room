import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10083: Unit = {
    ID: "10083",
    metaCode: "sakuya",
    prefix: {
        [Locale.tc]: "夢天堂店長",
        [Locale.sc]: null,
        [Locale.en]: "Store Manager",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "咲野夢",
        [Locale.sc]: null,
        [Locale.en]: "Sakuya Yume",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "店長", "店" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "咲野夢雖然是剛踏入社會的新鮮人，但性經驗卻無人能比。由於天使臉蛋魔鬼身材，願意跟她發生關係的男人數量多不可數。在性愛方面一開始都會欲拒還迎，一旦被開啟了某個開關就會變成極其下流的痴女。充滿了服務精神的咲野夢即使在工作時候，也會適當的秀一下「福利」給男同事們一個沙必死。在2021年進入情趣夢天堂工作，卻在某天下班打掃店內環境的時候遇到了時空亂流而被傳送至凱薩的世界……異世界x現代情趣用品販售員的異想物語現在才剛剛開始！\n\n『太好了，人家做到了，這是異世界開店的第一步！』",
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
    releaseDate: "2021/12/01",
    essence: UnitEssence[UnitCode.sakuya],
    thumbnail: UnitEssence[UnitCode.sakuya],
    selection: UnitSelection[UnitCode.sakuya],
    clothes: UnitFullImage[UnitCode.sakuya],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}