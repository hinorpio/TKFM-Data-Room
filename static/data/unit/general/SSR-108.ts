import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10138: Unit = {
    ID: "10138",
    metaCode: "p_lulu",
    prefix: {
        [Locale.tc]: "迷情薄紗",
        [Locale.sc]: null,
        [Locale.en]: "Lingerie Lolita",
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
        [Locale.tc]: [ "睡露" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "某天，偶然鼓起幹勁的露露，下定決心要在自己的房間舉辦一場睡衣派對。要舉辦一場睡衣派對，除了要有好玩的活動、美味的點心、軟綿綿的枕頭之外，當然，還要穿著可愛的睡衣吧！為了順利舉行派對，露露製作了邀請函、規劃了有趣的行程，和好朋友們一起邀請凱薩的後宮們來參加。然而，當歡樂的派對開始後，露露總覺得事情的發展…好像和她想的不太一樣…？\n\n『嗯，那個…今晚要不要來人家的房間一起睡覺？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/04/02",
    essence: UnitEssence[UnitCode.p_lulu],
    thumbnail: UnitEssence[UnitCode.p_lulu],
    selection: UnitSelection[UnitCode.p_lulu],
    clothes: UnitFullImage[UnitCode.p_lulu],
    tagList: [],
    otherVersion: [ UnitCode.lulu, UnitCode.s_lulu, UnitCode.w_lulu, UnitCode.c_lulu ],
    puzzle: [],
    skillSet: []
}