import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10021: Unit = {
    ID: "10021",
    metaCode: "shiro",
    prefix: {
        [Locale.tc]: "賢者",
        [Locale.sc]: "贤者",
        [Locale.en]: "Sage",
        [Locale.jp]: "賢者",
        [Locale.kr]: "현자"
    },
    name: {
        [Locale.tc]: "白",
        [Locale.sc]: "白",
        [Locale.en]: "Shiro",
        [Locale.jp]: "ハク",
        [Locale.kr]: "하쿠"
    },
    abbreviation: {
        [Locale.tc]: [ "賢者", "白" ],
        [Locale.sc]: [ "贤者", "白" ],
        [Locale.en]: [ "OG.Shiro" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `存活了相當漫長的歲月，隱居在法斯帝國境內的賢者。曾在法斯帝國還很弱小時給予當時的皇帝許多有用的意見，因此至今仍擁有著極高的身份地位。由於對法斯帝國歧視異族以及日益膨脹的天選意識不滿而避世，直到感受到勇者召喚儀式的魔力波動才重新出現在世人面前。雖然不喜爭鬥，實際上卻是文武雙全的通才，許多歷史上有名的勇者都曾接受過她的指導。\n\n『若遇到不懂之事，隨時能請教老身。』`,
        [Locale.sc]: `存活了相当漫长的岁月，隐居在法斯帝国境内的贤者。曾在法斯帝国还很弱小时给予当时的皇帝许多有用的意见，因此至今仍拥有着极高的身份地位。由于对法斯帝国歧视异族以及日益膨胀的天选意识不满而避世，直到感受到勇者召唤仪式的魔力波动才重新出现在世人面前。虽然不喜争斗，实际上却是文武双全的通才，许多历史上有名的勇者都曾接受过她的指导。\n\n『若遇到不懂之事，随时能请教老身。』`,
        [Locale.en]: `Shiro is a great sage, having lived for many years in the Phasi Empire. She started out when the Phasi Empire was small and weak, advising the emperor at the time. Her advice works, and now she holds a high, respected position. She tends to avoid the empire, harboring a distate for their racist, ignorant ways, living her life as a hermit up until the current emperor performs the Ceremony of Heroes. While she doesn't like fighting, she is well-versed in war strategy, with many great warriors having learned from her in the past.\n\n"If there's anything you don't understand, please do not hesistate to ask me."`,
        [Locale.jp]: `非常に長い年月を生きてきた、フォス帝国領土内に隠居している賢者。かつてフォス帝国の勢力が微々たるものだった頃、当時の皇帝に多くの有用なアドバイスをしたため、今でもなお非常に高い地位を与えられている。フォス帝国の民族差別と、日に日に膨らむ選民思想に嫌気がさして隠居していたが、勇者召喚の儀式をきっかけに、再び人々の前へと現れた。争いは好まないが、実際は文武両道であらゆる分野に精通している。多くの歴史上の有名な勇者たちがかつて彼女の指導を受けたことがあるほどだ。\n\n『何か分からないことがあれば、いつでも私に聞いてくださいね』`,
        [Locale.kr]: `오랜 영겁의 세월을 살아오며 현재 파스제국에서 은거 중인 현자. 파스제국이 강대해지기 전, 당시 황제에게 수많은 조언으로 도움을 준 일을 계기로 지금에 이르러서도 매우 극진한 대접을 받고 있다. 만연해진 종족차별과 편협적인 선민사상으로 물든 파스제국에게 환멸을 느낀 후 속세를 떠났지만, 용자 소환 의식에서 비롯된 마력의 파동을 감지한 후 다시 인류 앞에 모습을 드러냈다. 싸움을 좋아하진 않지만 문무에 매우 정통하여 역사에 이름을 남긴 수많은 용자들 모두 그녀의 가르침을 받았다.\n\n『무지의 영역과 맞닥뜨릴 경우, 언제라도 제게 가르침을 구하십시오.』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2023/01/04",
    essence: UnitEssence[UnitCode.shiro],
    thumbnail: UnitEssence[UnitCode.shiro],
    selection: UnitSelection[UnitCode.shiro],
    clothes: UnitFullImage[UnitCode.shiro],
    tagList: [
        TagID.ELEMENT_WIND,
        TagID.POSITION_HEALER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.CLASS_LEADER,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_SUPPORT,
    ],
    otherVersion: [ UnitCode.h_shiro ],
    initHP: 3668.8,
    initATK: 872,
    puzzle: [ PuzzleCode.EVENT_2024_XMAS_2 ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.shiro],
    skillSet: []
}