import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10125: Unit = {
    ID: "10125",
    metaCode: "h_ayane",
    prefix: {
        [Locale.tc]: "南瓜魔女",
        [Locale.sc]: null,
        [Locale.en]: "Pumpkin Witch",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "神田綾音",
        [Locale.sc]: null,
        [Locale.en]: "Ayane",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "萬勇", "瓜勇", "南勇" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "萬聖節對神田綾音來說，是一個能夠輕鬆獲得大量點心的美好節日。來到異世界，發現這裡也有萬聖節後，神田綾音套上紙袋，準備和以往一樣到處去收集點心。沒想到，一場『意外』讓這次的萬聖節全部變了調。原本尊敬的人變成搗蛋鬼，自己也被迫換上性感的萬聖裝扮。為了解決這次事件並守護萬聖節就該把糖果拿好拿滿的美好習俗，神田綾音選擇無視自己的羞恥心，化身成南瓜魔女，開始屬於自己的萬聖冒險。\n\n『不給糖就搗蛋…但是我一點都不想對你搗蛋，所以趕快把糖果交出來吧。』",
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
    releaseDate: "2023/10/18",
    essence: UnitEssence[UnitCode.h_ayane],
    thumbnail: UnitEssence[UnitCode.h_ayane],
    selection: UnitSelection[UnitCode.h_ayane],
    clothes: UnitFullImage[UnitCode.h_ayane],
    tagList: [],
    otherVersion: [ UnitCode.ayane, UnitCode.s_ayane ],
    puzzle: [],
    skillSet: []
}