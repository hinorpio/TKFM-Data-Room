import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10137: Unit = {
    ID: "10137",
    metaCode: "w_lillane",
    prefix: {
        [Locale.tc]: "春情白兔",
        [Locale.sc]: null,
        [Locale.en]: "Sensual Bunny",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "鈴蘭",
        [Locale.sc]: null,
        [Locale.en]: "Lillane",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "風鈴" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "在遇見凱薩之後，渴望愛情的清純白兔終於實現夢想，過上了不被性慾困擾的自由生活。為了不讓家人操心，也為了向自己的親朋好友報平安，在魔王城度過一段安穩日子的鈴蘭，打算啟程回到故鄉，跟父母報告自己的近況。在這春暖花開的美好季節，嬌小可愛的清純少女，穿著全新的白色洋裝，在春風的吹拂下漫步啟程，和朋友一同踏上了返鄉之路。\n\n『春天的太陽暖洋洋的，風也很溫柔，要和鈴蘭一起出去外面走走嗎？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/03/06",
    essence: UnitEssence[UnitCode.w_lillane],
    thumbnail: UnitEssence[UnitCode.w_lillane],
    selection: UnitSelection[UnitCode.w_lillane],
    clothes: UnitFullImage[UnitCode.w_lillane],
    tagList: [],
    otherVersion: [ UnitCode.lillane ],
    puzzle: [],
    skillSet: []
}