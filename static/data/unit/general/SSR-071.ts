import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10107: Unit = {
    ID: "10107",
    metaCode: "ny_lana",
    prefix: {
        [Locale.tc]: "龍飛鳳舞",
        [Locale.sc]: null,
        [Locale.en]: "Dragon Dancer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "蘭兒",
        [Locale.sc]: null,
        [Locale.en]: "Lana",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "春矮", "春蘭" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "在確定要參加精靈對抗矮人的大運動會後，從『雪泥糊』手上拿到了新的服裝和看起來超厲害的武器。雖然不曉得手上的巨龍形狀為什麼這麼奇怪，但拿起來的手感感覺就非常適合拿它來砸人。沒有錯，只要提到比試，矮人就永遠不會缺席。矮人日常不可或缺的三大娛樂，那絕對就是喝酒、挖礦還有比試了！\n\n『力大無比的矮人加上凶狠的巨龍，這樣就是兩倍的力量囉！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/01/18",
    essence: UnitEssence[UnitCode.ny_lana],
    thumbnail: UnitEssence[UnitCode.ny_lana],
    selection: UnitSelection[UnitCode.ny_lana],
    clothes: UnitFullImage[UnitCode.ny_lana],
    tagList: [],
    otherVersion: [ UnitCode.lana, UnitCode.x_lana, UnitCode.o_lana ],
    puzzle: [],
    skillSet: []
}