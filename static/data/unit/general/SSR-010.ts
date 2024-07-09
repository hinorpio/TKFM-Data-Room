import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10008: Unit = {
    ID: "10008",
    metaCode: "ks8",
    prefix: {
        [Locale.tc]: "魔人偶",
        [Locale.sc]: null,
        [Locale.en]: "Magic Automation",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "KS-VIII",
        [Locale.sc]: null,
        [Locale.en]: "KS-VIII",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "普K", "普機", "解K", "機娘", "KS8", "K", "KS-V三條線" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "KS-Ⅷ是法斯帝國從廢棄遺跡中發現，由古代文明帝國開發的魔導人偶。沒人知曉她的運作原理及構造，只能照她「KS型號Ⅷ號機」的自稱，將她命名為KS-Ⅷ。她沒有興趣、善惡觀與人類的價值觀，就如同真正的人偶，以完成主人的任務為第一優先。只聽從法斯帝國現任皇帝命令的KS-Ⅷ被視為法斯帝國的秘密兵器，當魔族入侵時KS-Ⅷ也被交付了任務，隨軍出征。\n\n『…指令已確認，火力管制解除，開始執行殲滅任務。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/02/24",
    essence: UnitEssence[UnitCode.ks8],
    thumbnail: UnitEssence[UnitCode.ks8],
    selection: UnitSelection[UnitCode.ks8],
    clothes: UnitFullImage[UnitCode.ks8],
    tagList: [
        TagID.ELEMENT_DARK,
        TagID.POSITION_ATTACKER,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
        TagID.OTHER_MORE_POWER,
    ],
    otherVersion: [ UnitCode.s_ks8 ],
    puzzle: [],
    skillSet: []
}