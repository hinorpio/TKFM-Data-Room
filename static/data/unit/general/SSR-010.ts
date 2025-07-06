import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10008: Unit = {
    ID: "10008",
    metaCode: "ks8",
    prefix: {
        [Locale.tc]: "魔人偶",
        [Locale.sc]: "魔人偶",
        [Locale.en]: "Magic Automaton",
        [Locale.jp]: "魔導人形",
        [Locale.kr]: "마도인형"
    },
    name: {
        [Locale.tc]: "KS-Ⅷ",
        [Locale.sc]: "KS-Ⅷ",
        [Locale.en]: "KS-Ⅷ",
        [Locale.jp]: "KS-Ⅷ",
        [Locale.kr]: "KS-Ⅷ"
    },
    abbreviation: {
        [Locale.tc]: [ "普K", "普機", "解K", "機娘", "KS8", "K", "KS-V三條線" ],
        [Locale.sc]: [ "普K", "普机", "解K", "机娘", "KS8", "K", "KS-V三条线" ],
        [Locale.en]: [ "KS", "KS8", "OG.KS", "OG.KS8" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "섹돌" ]
    },
    background: {
        [Locale.tc]: `KS-Ⅷ是法斯帝國從廢棄遺跡中發現，由古代文明帝國開發的魔導人偶。沒人知曉她的運作原理及構造，只能照她「KS型號Ⅷ號機」的自稱，將她命名為KS-Ⅷ。她沒有興趣、善惡觀與人類的價值觀，就如同真正的人偶，以完成主人的任務為第一優先。只聽從法斯帝國現任皇帝命令的KS-Ⅷ被視為法斯帝國的秘密兵器，當魔族入侵時KS-Ⅷ也被交付了任務，隨軍出征。\n\n『…指令已確認，火力管制解除，開始執行殲滅任務。』`,
        [Locale.sc]: `KS-Ⅷ是法斯帝国从废弃遗迹中发现，由古代文明帝国开发的魔导人偶。没人知晓她的运作原理及构造，只能照她「KS型号Ⅷ号机」的自称，将她命名为KS-Ⅷ。她没有兴趣、善恶观与人类的价值观，就如同真正的人偶，以完成主人的任务为第一优先。只听从法斯帝国现任皇帝命令的KS-Ⅷ被视为法斯帝国的秘密兵器，当魔族入侵时KS-Ⅷ也被交付了任务，随军出征。\n\n『…指令已确认，火力管制解除，开始执行歼灭任务。』`,
        [Locale.en]: `KS-Ⅷ is a Magic Automaton, recovered by the Phasi Empire from the ruins of an ancient kingdom. Other than its name—Magi-Tron KS Model Ⅷ, or KS-Ⅷ—no one in the empire knows its purpose or how it was created. It has no emotions or understanding of right and wrong, only knowing how to carry out the orders of its master—currently the Phasi emperor. The empire views KS-Ⅷ as a 'secret weapon' of sorts, choosing to send it out with the army on a mission to destroy the demons.\n\n"Order confirmed. Activate annihilation mode."`,
        [Locale.jp]: `KS-VIIIはフォス帝国が遺跡から発掘した、古代文明帝国が開発した魔導人形である。動作の原理と仕組みは解明されていないため、彼女が口にする「KSシリーズVIII号機」の自称からKS-VIIIと名付けられた。趣味や善悪、人類の価値観というものが一切ない本物の人形のようであり、主人に命じられた任務をこなすのを最優先に行動する。フォス帝国現皇帝の命令だけに従うKS-VIIIはフォス帝国の秘密兵器とされており、魔族が侵略を計ったときにはKS-VIIIも任務を任され、軍と共に出征する。\n\n『……命令確認、火力制限解除、殲滅任務を開始します』`,
        [Locale.kr]: `KS-Ⅷ는 파스제국의 폐허가 된 유적에서 발견되었으며 고대 문명 제국에서 개발한 마도 인형이다. 아무도 그녀의 작동 원리나 구조를 알지 못해 자신을「KS모델 Ⅷ호기」라고 칭하는 그녀를 따라 KS-Ⅷ로 명명되었다. 그녀는 취미, 선악 판단, 또는 인류의 가치관을 가지고 있지 않아 정말 인형과 다름없이 주인의 임무를 완수하는 것을 최우선으로 한다. 현재 파스제국 황제의 명령만을 듣는 KS-Ⅷ는 파스제국의 비밀 병기로서 마족의 침략에 대응하기 위해 군대와 함께 출정하였다.\n\n『... 명령 확인 완료. 화력 제어 해제. 섬멸 임무 실행을 시작합니다.』`
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
    otherVersion: [ UnitCode.s_ks8, UnitCode.m_ks8 ],
    initHP: 3388.796781159074,
    initATK: 943.9978070037291,
    puzzle: [],
    outfits: [],
    skillSet: []
}