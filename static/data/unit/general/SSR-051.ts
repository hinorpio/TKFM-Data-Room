import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10091: Unit = {
    ID: "10091",
    metaCode: "s_noel",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "黑白諾艾莉",
        [Locale.sc]: null,
        [Locale.en]: "Noel",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "夏黑" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "炙熱的夏天！熙攘的人群！排隊、曬太陽、互相擠壓！這樣酷熱的天氣裡，人心浮躁，大家該如何排解心中的燥熱？沒錯！那就是大喊M‧O‧N‧O‧K‧U‧R‧O‧諾艾莉～♪慶典！比賽！泳裝！走光！大暴走！泳裝偶像節目可是夏天不可或缺的娛樂！為酷暑與炎熱而苦惱怠惰的人們，歡呼雀躍吧！因為，為眾人帶來希望與夢想的夏日之星，黑白諾艾莉登場了！\n\n『夏日節目最重要的三要素，當然就是偶像！泳裝！還有水上相撲囉！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2022/06/08",
    essence: UnitEssence[UnitCode.s_noel],
    thumbnail: UnitEssence[UnitCode.s_noel],
    selection: UnitSelection[UnitCode.s_noel],
    clothes: UnitFullImage[UnitCode.s_noel],
    tagList: [],
    otherVersion: [ UnitCode.noel ],
    puzzle: [ PuzzleCode.EVENT_2022_SUMMER_3 ],
    skillSet: []
}