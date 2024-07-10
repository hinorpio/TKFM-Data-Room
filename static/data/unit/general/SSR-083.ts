import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10117: Unit = {
    ID: "10117",
    metaCode: "s_baal",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
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
        [Locale.tc]: [ "夏巴", "下巴" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "說到夏天就是海灘、渡假還有觀光客，而在魔王巴爾的眼裡這些就是錢、錢、和很多的錢。根據以往經驗，只要自己下場主持活動，不管是銷售量還是營業額都會大幅度上升。因此，有著健康小麥膚色的少女今夏也換上泳裝，搖身一變，變成在海灘上四處招攬客人的辣妹系魔王。\n\n『啊囉哈～想要在海邊留下美好的夏日回憶嗎？巴爾商會的度假套組現正熱賣中喔！』",
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
    releaseDate: "2023/06/07",
    essence: UnitEssence[UnitCode.s_baal],
    thumbnail: UnitEssence[UnitCode.s_baal],
    selection: UnitSelection[UnitCode.s_baal],
    clothes: UnitFullImage[UnitCode.s_baal],
    tagList: [],
    otherVersion: [ UnitCode.baal, UnitCode.f_baal, UnitCode.b_baal, UnitCode.v_baal ],
    puzzle: [],
    skillSet: []
}