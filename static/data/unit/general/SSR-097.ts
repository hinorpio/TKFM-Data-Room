import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10127: Unit = {
    ID: "10127",
    metaCode: "x_aridya",
    prefix: {
        [Locale.tc]: "雪夜幻夢",
        [Locale.sc]: null,
        [Locale.en]: "Snowy Fantasy",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "阿爾蒂雅",
        [Locale.sc]: null,
        [Locale.en]: "Aridya",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "誕蘿" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "對於永遠睡不飽的食夢獸一族來說，寒冷的冬天是最適合睡覺的季節。穿上又軟又舒服的馴鹿睡衣，阿爾蒂雅本來想要舒舒服服地待在房間裡睡覺。結果卻因為名為性誕節的節日，導致她身邊到處都是做愛的吵鬧聲響，吵得這頭小小馴鹿難以入睡。看著周圍一片白茫茫，就好像又軟又白的大棉被一般的雪地，阿爾蒂雅飄了出去。不論是性誕還是聖誕，食夢獸都毫無興趣，她只想要在這適合躺著不動的天氣裡，美美的睡上一覺。\n\n『下雪的時候…最適合躲在被窩裡面睡覺了……』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/12/13",
    essence: UnitEssence[UnitCode.x_aridya],
    thumbnail: UnitEssence[UnitCode.x_aridya],
    selection: UnitSelection[UnitCode.x_aridya],
    clothes: UnitFullImage[UnitCode.x_aridya],
    tagList: [],
    otherVersion: [ UnitCode.aridya, UnitCode.s_aridya ],
    puzzle: [],
    skillSet: []
}