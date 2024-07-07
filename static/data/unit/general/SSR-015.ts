import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10029: Unit = {
    ID: "10029",
    metaCode: "s_shizuka",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "靜",
        [Locale.sc]: null,
        [Locale.en]: "Shizuka",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "夏狐", "夏靜", "泳狐", "泳靜" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "既然到了海邊就要暢快的玩耍！儘管厚重的毛吸了水會變沉，但只要套上游泳圈就沒問題！為了能夠盡情的玩耍，不惜打聽了自己都搞不懂的魔導科技知識，製作了如同角色扮演般的泳裝。人生首次見到大海，不管是堆沙、海灘排球、美食，還是所有水上運動都要玩過一遍。不只自己要痛快的玩，就連熟識的人也會被捲入其中。在夏天的魔力用盡之前，靜都會不斷玩耍。\n\n『好開心，接下來要玩什麼才好喏～』",
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
    releaseDate: "2021/05/28",
    essence: UnitEssence[UnitCode.s_shizuka],
    thumbnail: UnitEssence[UnitCode.s_shizuka],
    selection: UnitSelection[UnitCode.s_shizuka],
    clothes: UnitFullImage[UnitCode.s_shizuka],
    tagList: [],
    otherVersion: [],
    puzzle: [ PuzzleCode.EVENT_2021_SUMMER_1, PuzzleCode.EVENT_2021_SUMMER_1_DMM ],
    skillSet: []
}