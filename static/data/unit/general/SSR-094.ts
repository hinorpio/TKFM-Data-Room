import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10126: Unit = {
    ID: "10126",
    metaCode: "h_shiro",
    prefix: {
        [Locale.tc]: "調皮搗蛋",
        [Locale.sc]: null,
        [Locale.en]: "Naughty Tirxie",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "白",
        [Locale.sc]: null,
        [Locale.en]: "Shiro",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "小白", "幼白" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "一本正經的賢者在感染萬聖魔力後，變成了以四處搗蛋為樂的小惡魔。仗著自己的博學多聞，小小賢者的惡作劇讓人難以捉摸，就連魔王和勇者都被她視為掌中玩物。將魔王城改造成大型的惡作劇迷宮後，白露出了眾人都不曾見過的頑皮笑容。而在那份笑容之中，似乎還藏著不可告人的祕密…？\n\n『嘿嘿嘿，各位哥哥姐姐們，準備好要來挑戰白的關卡了嗎？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/10/18",
    essence: UnitEssence[UnitCode.h_shiro],
    thumbnail: UnitEssence[UnitCode.h_shiro],
    selection: UnitSelection[UnitCode.h_shiro],
    clothes: UnitFullImage[UnitCode.h_shiro],
    tagList: [],
    otherVersion: [ UnitCode.shiro ],
    puzzle: [],
    skillSet: []
}