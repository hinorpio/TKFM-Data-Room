import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10066: Unit = {
    ID: "10066",
    metaCode: "anjelica",
    prefix: {
        [Locale.tc]: "千咒魔女",
        [Locale.sc]: null,
        [Locale.en]: "Enchantress",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "安西莉卡",
        [Locale.sc]: null,
        [Locale.en]: "Anjelica",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "千咒", "魔女", "老師" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "安西莉卡是活了千年以上，窮極魔道的魔法師。跨出常人範疇的她，已經不再是人類，而是名為「魔女」的種族。對於魔法的渴求以及好奇心，讓安西莉卡致力於收集魔導書以及遺失的古代魔法。她非常樂意將這些知識分享出去，而不是單純的收藏。唯有讓所有魔法師的水平提升，才有可能誕生更多嶄新的魔法。安西莉卡渴求於一切與魔法相關的知識，並熱衷於創新，在許多地方被視為魔道上的先驅被崇敬。然而在安西莉卡看來，她僅只是執念於魔法，專注於魔法，社會適應不良的求道者罷了。\n\n『這裡只是通往魔法極致的半途，不要在此駐足。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/08/24",
    essence: UnitEssence[UnitCode.anjelica],
    thumbnail: UnitEssence[UnitCode.anjelica],
    selection: UnitSelection[UnitCode.anjelica],
    clothes: UnitFullImage[UnitCode.anjelica],
    tagList: [
        TagID.ELEMENT_DARK,
        TagID.POSITION_ATTACKER,
        TagID.CLASS_LEADER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
        TagID.OTHER_MORE_POWER,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}