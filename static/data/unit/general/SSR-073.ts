import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10109: Unit = {
    ID: "10109",
    metaCode: "v_iblis",
    prefix: {
        [Locale.tc]: "純情可可",
        [Locale.sc]: null,
        [Locale.en]: "Pure Cocoa",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "伊布力斯",
        [Locale.sc]: null,
        [Locale.en]: "Iblis",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "可伊" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "贈送巧克力有向戀慕之人傳達自己愛意的意義？哼，巴爾難道以為偉大的伊布力斯會相信這種拙劣、只為推銷商品而說出口的謊言嗎。一邊說著這樣的話，一邊準備巧克力的材料，即便早已成年卻依舊有著一顆少女心的魔王攪拌醇香的巧克力。並不是因為自己想送，只是因為大家都送了自己要是不送那就太失禮了。而自己既然是正室，那自然要送出最高級、最美味的那一顆巧克力。會送凱薩只是出於禮節，絕不是因為自己很好奇他吃下巧克力之後會有什麼反應於是在那天，從來不曾自己下過廚的大小姐一邊羞紅著臉，一邊遞出巧克力邊說道。\n\n『這些巧克力才不是為你做的，只是本小姐剛好想練習一下廚藝而已，別誤會了！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/02/08",
    essence: UnitEssence[UnitCode.v_iblis],
    thumbnail: UnitEssence[UnitCode.v_iblis],
    selection: UnitSelection[UnitCode.v_iblis],
    clothes: UnitFullImage[UnitCode.v_iblis],
    tagList: [],
    otherVersion: [ UnitCode.iblis, UnitCode.i_iblis, UnitCode.b_iblis, UnitCode.s_iblis ],
    puzzle: [],
    skillSet: []
}