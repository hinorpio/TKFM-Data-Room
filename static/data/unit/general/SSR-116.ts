import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10146: Unit = {
    ID: "10146",
    metaCode: "d_minayomi",
    prefix: {
        [Locale.tc]: "魔獸獵手",
        [Locale.sc]: "魔兽猎手",
        [Locale.en]: "Apex Hunter",
        [Locale.jp]: "魔獣ハンター",
        [Locale.kr]: "몬스터헌터"
    },
    name: {
        [Locale.tc]: "神無雪",
        [Locale.sc]: "神无雪",
        [Locale.en]: "Minayomi",
        [Locale.jp]: "神無雪",
        [Locale.kr]: "미나요미"
    },
    abbreviation: {
        [Locale.tc]: [ "魔劍", "黑劍" ],
        [Locale.sc]: [ "魔剑", "黑剑" ],
        [Locale.en]: [ "D.Mina", "D.Minayomi" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "헌미나" ]
    },
    background: {
        [Locale.tc]: `在挑戰凱薩卻又再次落敗之後，神無雪陷入苦思，他不明白，自己的求道之路究竟是在何時走上了錯誤的方向。劍為何物？武道又為何物？漸漸地，神無雪發現自己已經沒辦法再給出這兩個問題的答案。為了斬斷心中迷惘，斷除心魔，曾經的烈日國劍聖拿起狩獵魔獸專用的刀具，開始在魔界獵殺各種兇獸。帶著追求武道巔峰的心，神無雪踏上了狩獵強大魔獸的道路，希望能夠在挑戰強敵的戰鬥中，再次找到心裡疑問的解答。\n\n『我手中的刀劍只斬強者，這些弱小的魔獸，連讓我拔刀的資格都沒有。』`,
        [Locale.sc]: `在挑战凯萨却又再次落败之后，神无雪陷入苦思，他不明白，自己的求道之路究竟是在何时走上了错误的方向。剑为何物？武道又为何物？渐渐地，神无雪发现自己已经没办法再给出这两个问题的答案。为了斩断心中迷惘，断除心魔，曾经的烈日国剑圣拿起狩猎魔兽专用的刀具，开始在魔界猎杀各种凶兽。带着追求武道巅峰的心，神无雪踏上了狩猎强大魔兽的道路，希望能够在挑战强敌的战斗中，再次找到心里疑问的解答。\n\n『我手中的刀剑只斩强者，这些弱小的魔兽，连让我拔刀的资格都没有。』`,
        [Locale.en]: `After once again losing to a challenge against Caesar, Minayomi starts to ponder... When did the path to seeking her truth go awry?What is a sword? What even is the art of swordsmanship? She finds she can no longer find the answers to these questions. Once Isorath's top blademaster, Minayomi finally decides to end this confusion and quell her inner demons. Using her blades specially designed for monster hunting, she sets out on a journey to kill all manner of ferocious creatures. In pursuit of perfecting her swordsmanship, Minayomi hopes to find all the answers and eventually defeat her foe.\n\n"My blades only kill those strong enough. I won't even unsheathe them for a weakling."`,
        [Locale.jp]: `シーザーに挑んで再び敗北した神無雪は、深く考え込んでいた。彼女には自分の修練の道がいつから誤った方向に進んでしまったのか理解できなかったのだ。剣とは何か？武道とは何か？次第に神無雪はこの二つの問いに対する答えを出すことができなくなっていった。心の迷いを断ち切り心魔を取り除くために、かつての烈陽国の剣聖は魔獣狩り専用の刀を手に取り、魔界で様々な魔獣を狩り始めた。武道の頂点を追求する心を持ち、強大な魔獣を狩る道に踏み出した神無雪。強敵との戦いの中で、再び心の疑問の答えを見つけられることを強く願っている。\n\n『私の手にある剣は強者だけを斬る。弱小な魔獣どもは、私に刀を抜かせる資格すらない』`,
        [Locale.kr]: `시저에게 도전했다가 다시 패배한 뒤, 고심에 빠진 미나요미는 자신이 추구하는 길이 잘못된 방향으로 나아가고 있음을 알지 못한다. 검이란 무엇인가? 무도란 무엇인가? 차츰 미나요미는 두 질문에 대한 답을 스스로 찾아낼 수 없다는 결론에 이른다.마음속의 번뇌와 방황을 모두 떨쳐내기 위해 전 태양국의 검성은 마물 사낭용 칼을 꺼내 들고 각종 흉수를 사냥하기 시작한다. 무도의 정점을 목표로 미나요미는 초강력 마수 사냥의 길로 들어섰고, 강적과의 싸움에서 다시 한번 자신의 질문에 대한 답을 찾을 수 있길 바랐다.\n\n『내 손에 쥐어진 칼은 오직 강자를 베기 위한 것. 이런 조무래기들은 칼집에서 칼을 뽑을 가치조차 없어.』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/07/17",
    essence: UnitEssence[UnitCode.d_minayomi],
    thumbnail: UnitEssence[UnitCode.d_minayomi],
    selection: UnitSelection[UnitCode.d_minayomi],
    clothes: UnitFullImage[UnitCode.d_minayomi],
    tagList: [],
    otherVersion: [ UnitCode.minayomi, UnitCode.tm_minayomi ],
    puzzle: [],
    skillSet: []
}