import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10124: Unit = {
    ID: "10124",
    metaCode: "nyoro",
    prefix: {
        [Locale.tc]: "沁夏淡粉",
        [Locale.sc]: '沁夏淡粉',
        [Locale.en]: "Fair Pixie",
        [Locale.jp]: "紺碧の薄紅",
        [Locale.kr]: "스며드는 핑크빛"
    },
    name: {
        [Locale.tc]: "香草奈若",
        [Locale.sc]: "香草奈若",
        [Locale.en]: "Vanilla Nyoro",
        [Locale.jp]: "香草奈若",
        [Locale.kr]: "바닐라 뇨로"
    },
    abbreviation: {
        [Locale.tc]: [ "奈若", "牛肉" ],
        [Locale.sc]: [ "奈若", "牛肉" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `有時是普通的遊戲實況主，有時是可愛的小小蠑螈，實際上是撒嬌女友系Vtuber的香草奈若。這次準備和兩位前輩一起進入《天下布魔》，享受沉浸式遊戲帶來的極致享受。究竟她會碰上什麼樣有趣的冒險與挑戰，會露出怎麼樣遜砲可愛的一面，就讓我們繼續看下去。今天晚上，香草奈若要在《天下布魔》的世界刮起一陣粉色旋風！\n\n『奈若我身為一個清楚系的Vtuber，會把你踩在腳下是很正常的吧？』`,
        [Locale.sc]: `有时是普通的游戏实况主，有时是可爱的小小蝾螈，实际上是撒娇女友系Vtuber的香草奈若。这次准备和两位前辈一起进入《天下布魔》，享受沉浸式游戏带来的极致享受。究竟她会碰上什么样有趣的冒险与挑战，会露出怎么样逊炮可爱的一面，就让我们继续看下去。今天晚上，香草奈若要在《天下布魔》的世界刮起一阵粉色旋风！\n\n『奈若我身为一个清楚系的Vtuber，会把你踩在脚下是很正常的吧？』`,
        [Locale.en]: `Sometimes mild-tempered, sometimes an adorable newt, but in truth, Vanilla Nyoro is a flirty Vtuber chick. She now joins her two cohorts and enters TenkafuMA, ready to enjoy the best pleasures this immersive game has to offer. Watch Nyoro pout her cute cheeks as she encounters interesting in-game adventures and challenges. Tonight, there's a pink whirlwind coming to TenkafuMA Town, and it's called Vanilla Nyoro!\n\n"As a seiso Vtuber, of course I'd crush you under my shoe. Isn't that what we're all about?"`,
        [Locale.jp]: `いたって普通な実況主の時もあれば、可愛いイモリになる時も……その正体はツンデレ彼女系Vtuberの香草奈若。今回は二人の先輩と共に《天下布魔》の世界へ行き、バーチャルゲームのもたらす至極の時間を楽しむことに。一体どんな冒険と挑戦が彼女を待っているのだろうか。可愛いおてんばな彼女をぜひお見逃しなく。今夜、《天下布魔》の世界にピンクの旋風が吹き荒れることだろう！\n\n『奈若は清楚系Vtuberだよ？脚で踏み踏みするのは普通でしょ？』`,
        [Locale.kr]: `가끔은 흔한 게임 스트리머, 가끔은 귀여운 도롱뇽. 애교 만점의 Vtuber 바닐라 뇨로. 이번에는 두 선배와 함께 《텐카푸마》라는 몰입형 게임을 즐겨보려 한다. 그녀는 과연 어떤 흥미진진한 모험과 도전을 마주하게 될지, 어떤 귀여운 모습을 보여줄지 함께 지켜보도록 하자. 오늘 밤, 바닐라 뇨로가 《텐카푸마》의 세계에 핑크빛 돌풍을 일으킨다!\n\n『뇨로는 청초계 Vtuber이니까, 당신을 발로 짓밟는 게 이상한 일은 아니잖아?』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/09/13",
    essence: UnitEssence[UnitCode.nyoro],
    thumbnail: UnitEssence[UnitCode.nyoro],
    selection: UnitSelection[UnitCode.nyoro],
    clothes: UnitFullImage[UnitCode.nyoro],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}