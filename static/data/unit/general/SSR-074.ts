import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10110: Unit = {
    ID: "10110",
    metaCode: "v_satan",
    prefix: {
        [Locale.tc]: "致命可可",
        [Locale.sc]: null,
        [Locale.en]: "Killer Cocoa",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "撒旦",
        [Locale.sc]: null,
        [Locale.en]: "Satan",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "可撒", "可旦" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "愛情就只是掠奪與征服的美化說法而已，真正的魔族，就該在死亡與鮮血中展現彼此的愛意。不過，出乎意料的是，巧克力的味道，竟然和生命消亡時綻放的鮮血嘗起來一樣的甘甜。原來如此，當死亡與甜美合而為一時，不就產生值得奪取的價值了嗎？懷抱著這般心思，撒旦決定化身為魔王專屬的女僕，親自替心愛的『主人』狩獵最強、最致命的甜品……如果想收下她的贈禮，請千萬要小心，這塊巧克力可能會要了你的命！\n\n『比起砂糖，死亡才是最美味的調味料，你不這麼認為嗎～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/02/08",
    essence: UnitEssence[UnitCode.v_satan],
    thumbnail: UnitEssence[UnitCode.v_satan],
    selection: UnitSelection[UnitCode.v_satan],
    clothes: UnitFullImage[UnitCode.v_satan],
    tagList: [],
    otherVersion: [ UnitCode.satan, UnitCode.e_satan, UnitCode.b_satan ],
    puzzle: [],
    skillSet: []
}