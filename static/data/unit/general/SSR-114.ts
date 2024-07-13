import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10144: Unit = {
    ID: "10144",
    metaCode: "s_caesar",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "凱薩",
        [Locale.sc]: null,
        [Locale.en]: "Caesar",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "夏凱" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "是什麼和夏日的驕陽一樣耀眼，沒錯！是余的威光。是什麼比大海的濤浪還要強大，沒錯！是余的力量。來自異界的魔王凱薩，雖然身材小小，但氣勢卻比滔天巨浪還要高昂。她要征服大海，征服夏天，征服所有的一切，將美好的夏日時光納入自己手中！為此，不論在路上遇見什麼障礙她都會直接撞開，因為這就是她的王道！只有一種情況例外，那就是艾可做好了十層豪華大聖代，只有在這種情況下，征服大海什麼的倒是可以先放到一旁。畢竟，先享受臣子的上貢才是最重要的！\n\n『余是要征服夏日，統治大海的世界之王！』",
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
    releaseDate: "2024/06/05",
    essence: UnitEssence[UnitCode.s_caesar],
    thumbnail: UnitEssence[UnitCode.s_caesar],
    selection: UnitSelection[UnitCode.s_caesar],
    clothes: UnitFullImage[UnitCode.s_caesar],
    tagList: [],
    otherVersion: [ UnitCode.f_caesar, UnitCode.n_caesar ],
    puzzle: [ PuzzleCode.EVENT_2024_SUMMER_3 ],
    skillSet: []
}