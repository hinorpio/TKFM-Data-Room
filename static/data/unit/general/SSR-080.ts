import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10113: Unit = {
    ID: "10113",
    metaCode: "n_caesar",
    prefix: {
        [Locale.tc]: "嬌蠻兇護",
        [Locale.sc]: "娇蛮凶护",
        [Locale.en]: "Tsundere Nurse",
        [Locale.jp]: "ツンデレ看護師",
        [Locale.kr]: "츤데레 간호사"
    },
    name: {
        [Locale.tc]: "凱薩",
        [Locale.sc]: "凯萨",
        [Locale.en]: "Caesar",
        [Locale.jp]: "シーザー",
        [Locale.kr]: "시저"
    },
    abbreviation: {
        [Locale.tc]: [ "護凱" ],
        [Locale.sc]: [ "护凯" ],
        [Locale.en]: [ "N.Caesar" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "간뷰" ]
    },
    background: {
        [Locale.tc]: `來自異世界的嬌小魔王，自從來到這個世界之後，就整天無所事事的悠哉過活。「這種日子太無聊了，余想要做點更刺激有趣的事！」正好那個總是被自己欺負的貓娘向自己提出了熱烈的請求，身為魔王，偶爾還是要回應一下僕人的願望。換上純白的制服，拿起針具，來自異世界的護士魔王向著病人們冷冷發笑。他們究竟能否逃過魔王的『治療』，成功康復出院呢。\n\n『打針？哼，太簡單了，反正只要朝屁股扎進去就對了吧。』`,
        [Locale.sc]: `来自异世界的娇小魔王，自从来到这个世界之后，就整天无所事事的悠哉过活。「这种日子太无聊了，余想要做点更刺激有趣的事！」正好那个总是被自己欺负的猫娘向自己提出了热烈的请求，身为魔王，偶尔还是要回应一下仆人的愿望。换上纯白的制服，拿起针具，来自异世界的护士魔王向着病人们冷冷发笑。他们究竟能否逃过魔王的『治疗』，成功康复出院呢。\n\n『打针？哼，太简单了，反正只要朝屁股扎进去就对了吧。』`,
        [Locale.en]: `Since her arrival from another world, this petite archdemon has led a life of relative leisure. "This is so damn boring! I wanna do something exciting!" Right on cue, Nana makes an impassioned plea—and as an archdemon, Caesar knows she must grant her servants' wishes from time to time. Dressed in a pristine white uniform and armed with an array of needles, the archdemon nurse from another world stalks her patients with a nefarious gleam in her eye. Will they be able to escape her "treatment" with their health intact?\n\n"A needle? Hmph, too easy. All you have to do is point it at your ass and stick it in."`,
        [Locale.jp]: `異世界から来た小さな魔王は、この世界に来てから毎日のんびりとした生活を送っていた。「つまらない毎日だな。何か刺激的な事をしたい！」するとちょうどよく毎日イジメていた猫娘にとあるお願いをされ、魔王である彼女は下僕の願いを叶えてやることにしたのだった。純白の白衣に身を包み、注射器を手にした異世界の看護師魔王。病人を見ると、冷ややかな笑みを浮かべた。果たして病人たちは魔王の「治療」から逃れ、健やかな身体で退院することはできるのだろうか？\n\n『注射？そんなの朝飯前だ。とにかく尻に刺せばいいんだろう？』`,
        [Locale.kr]: `이세계에서 온 작은 마왕은 이곳으로 오고 난 후 어떠한 일도 하지 않고 유유히 살아왔다. 「무료한 나날들이군. 뭔가 자극적이면서도 재미난 일을 하고 싶다!」 마침 자신에게 괴롭힘을 당하던 고양이녀의 간곡한 부탁으로 마왕성에서 수하의 소원을 들어주게 되었는데... 순백의 제복으로 갈아입고 주사기를 집어든 이세계 출신의 간호사 마왕이 병자들을 바라보며 차가운 미소를 짓는다. 그들은 과연 마왕의 『치료』를 피해 성공적으로 퇴원할 수 있을는지.\n\n『주사? 훗, 간단하지. 그냥 엉덩이에 냅다 찔러버리면 되는 거잖아?』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/05/10",
    essence: UnitEssence[UnitCode.n_caesar],
    thumbnail: UnitEssence[UnitCode.n_caesar],
    selection: UnitSelection[UnitCode.n_caesar],
    clothes: UnitFullImage[UnitCode.n_caesar],
    tagList: [],
    otherVersion: [ UnitCode.f_caesar, UnitCode.s_caesar ],
    puzzle: [],
    skillSet: []
}