import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10032: Unit = {
    ID: "10032",
    metaCode: "s_nana",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "娜娜",
        [Locale.sc]: null,
        [Locale.en]: "Nana",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "夏娜", "夏貓", "泳娜", "泳貓" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "配合凱薩的任性，娜娜不得不跟隨凱薩一起到海邊享受難得的假期。聽起來有點矛盾，但這就是現實。若是不盯著凱薩，他就會惹出天大的麻煩，最後還不是要由本喵來善後！強調著這樣的說法，娜娜清楚的明白，自己即使到海邊渡假也不能掉以輕心。想到之後海邊假期可能遭遇的麻煩，娜娜懷揣著不安，精心挑選了到時要用的新泳衣。\n\n『本喵可不想去海邊，是為了看好笨蛋凱薩，別讓他闖禍才不得不跟來的喵。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/05/28",
    essence: UnitEssence[UnitCode.s_nana],
    thumbnail: UnitEssence[UnitCode.s_nana],
    selection: UnitSelection[UnitCode.s_nana],
    clothes: UnitFullImage[UnitCode.s_nana],
    tagList: [],
    otherVersion: [ UnitCode.nana ],
    puzzle: [ PuzzleCode.EVENT_2021_SUMMER_4 ],
    skillSet: []
}