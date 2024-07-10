import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10108: Unit = {
    ID: "10108",
    metaCode: "v_baal",
    prefix: {
        [Locale.tc]: "甜心可可",
        [Locale.sc]: null,
        [Locale.en]: "Sweet Cocoa",
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
        [Locale.tc]: [ "可巴" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "古代文明竟然有送巧克力來示愛的傳統？嗅到賺大錢的機會，身為商人的巴爾自然不會放過。充滿愛意的少女，向心儀的對象送出巧克力，就應該要不擇手段。在如此的宣傳攻勢之下，魔界各地出現了充滿濃情愛意的甜蜜氛圍。身為商會的主人，巴爾也親自投入了這波宣傳，身穿新衣，將氣氛拉抬到最高點。穿著微露酥胸的毛衣，展現如小惡魔後輩般可愛的巴爾，讓所有人都不禁向她投射目光。\n\n『嘿嘿嘿～看見人家這副模樣，是不是很想跟人家約會了呢？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/02/08",
    essence: UnitEssence[UnitCode.v_baal],
    thumbnail: UnitEssence[UnitCode.v_baal],
    selection: UnitSelection[UnitCode.v_baal],
    clothes: UnitFullImage[UnitCode.v_baal],
    tagList: [],
    otherVersion: [ UnitCode.baal, UnitCode.f_baal, UnitCode.b_baal, UnitCode.s_baal ],
    puzzle: [],
    skillSet: []
}