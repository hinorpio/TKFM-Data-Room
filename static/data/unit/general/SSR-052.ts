import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10092: Unit = {
    ID: "10092",
    metaCode: "s_aridya",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
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
        [Locale.tc]: [ "夏蘿", "夏夢", "瘋狗浪" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "如果說，永遠睡不飽是食夢貘一族永遠無法擺脫的詛咒。那麼，追求更好的睡眠品質就是阿爾蒂雅的畢生追求。雖然以前就曾聽說在海上漂著的感覺很舒服，但因為太麻煩，所以阿爾蒂雅一直都沒有去嘗試。直到某天，當她醒來的時候，卻發現自己被換上了泳裝，身旁還躺了一隻看起來非常適合當床的充氣海豚。雖然很想回去，但是因為太麻煩了，所以阿爾蒂雅決定，好好的享受這得來容易的海上漂流之旅。\n\n『姆嗯…泳裝？這種衣服和人家原本穿的沒什麼差別吧……』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/06/08",
    essence: UnitEssence[UnitCode.s_aridya],
    thumbnail: UnitEssence[UnitCode.s_aridya],
    selection: UnitSelection[UnitCode.s_aridya],
    clothes: UnitFullImage[UnitCode.s_aridya],
    tagList: [],
    otherVersion: [ UnitCode.aridya ],
    puzzle: [ PuzzleCode.EVENT_2022_SUMMER_4 ],
    skillSet: []
}