import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10146: Unit = {
    ID: "10146",
    metaCode: "d_minayomi",
    prefix: {
        [Locale.tc]: "魔獸獵手",
        [Locale.sc]: null,
        [Locale.en]: "Apex Hunter",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "神無雪",
        [Locale.sc]: null,
        [Locale.en]: "Minayomi",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "魔劍", "黑劍" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "在挑戰凱薩卻又再次落敗之後，神無雪陷入苦思，他不明白，自己的求道之路究竟是在何時走上了錯誤的方向。劍為何物？武道又為何物？漸漸地，神無雪發現自己已經沒辦法再給出這兩個問題的答案。為了斬斷心中迷惘，斷除心魔，曾經的烈日國劍聖拿起狩獵魔獸專用的刀具，開始在魔界獵殺各種兇獸。帶著追求武道巔峰的心，神無雪踏上了狩獵強大魔獸的道路，希望能夠在挑戰強敵的戰鬥中，再次找到心裡疑問的解答。\n\n『我手中的刀劍只斬強者，這些弱小的魔獸，連讓我拔刀的資格都沒有。』",
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
    releaseDate: "2024/07/17",
    essence: UnitEssence[UnitCode.d_minayomi],
    thumbnail: UnitEssence[UnitCode.d_minayomi],
    selection: UnitSelection[UnitCode.d_minayomi],
    clothes: UnitFullImage[UnitCode.d_minayomi],
    tagList: [],
    otherVersion: [ UnitCode.minayomi, UnitCode.tm_minayomi ],
    puzzle: [],
    skillSet: []
}