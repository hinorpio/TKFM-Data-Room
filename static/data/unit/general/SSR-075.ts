import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10069: Unit = {
    ID: "10069",
    metaCode: "lillane",
    prefix: {
        [Locale.tc]: "尋情慾兔",
        [Locale.sc]: null,
        [Locale.en]: "Lusty Bunny",
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
        [Locale.tc]: [ "鈴蘭" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "鈴蘭雖屬於獸人一族，卻是隻非常沒有威脅性的兔子。本身沒什麼戰鬥力，又容易受到驚嚇，偏偏還是個天天發情的性子。因兔族體質而產生的種種問題與歧視，都讓仰慕純情戀愛的鈴蘭困擾不已。為了能找到戀人，談上一場浪漫的戀愛，鈴蘭今天依然與自身的情慾努力奮鬥著。\n\n『雖然很弱小，但鈴蘭會努力幫上忙的！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/03/08",
    essence: UnitEssence[UnitCode.lillane],
    thumbnail: UnitEssence[UnitCode.lillane],
    selection: UnitSelection[UnitCode.lillane],
    clothes: UnitFullImage[UnitCode.lillane],
    tagList: [],
    otherVersion: [ UnitCode.w_lillane ],
    puzzle: [],
    skillSet: []
}