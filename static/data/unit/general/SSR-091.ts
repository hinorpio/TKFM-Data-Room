import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10123: Unit = {
    ID: "10123",
    metaCode: "d_miru",
    prefix: {
        [Locale.tc]: "惡魔貓娘",
        [Locale.sc]: null,
        [Locale.en]: "Demon Kitty",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "杏仁咪嚕",
        [Locale.sc]: null,
        [Locale.en]: "Annin Miru",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "咪黑", "黑咪", "惡咪" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "雖然上次挑戰魔王失敗了好幾次，但身為資深遊戲實況主，杏仁咪嚕可不會這麼輕易放棄。在不斷練習翻滾、不斷修練貓咪之力之後，今晚的杏仁咪嚕沒有極限！她將要準備和兩個小夥伴，一起體驗《天下布魔》最新出的DLC。俏皮可愛的電子小惡魔咪嚕，會把杏眾們的心還有斗內通通偷走。惡魔貓娘，你今晚的春夢！\n\n『嘿嘿嘿～穿上這套衣服之後，咪嚕的36D是不是變得更明顯了呀～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/09/13",
    essence: UnitEssence[UnitCode.d_miru],
    thumbnail: UnitEssence[UnitCode.d_miru],
    selection: UnitSelection[UnitCode.d_miru],
    clothes: UnitFullImage[UnitCode.d_miru],
    tagList: [],
    otherVersion: [ UnitCode.miru ],
    puzzle: [],
    skillSet: []
}