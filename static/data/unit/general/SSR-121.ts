import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10150: Unit = {
    ID: "10150",
    metaCode: "bg_ayane",
    prefix: {
        [Locale.tc]: "勇者兔女郎",
        [Locale.sc]: "勇者兔女郎",
        [Locale.en]: "Bunny Croupier",
        [Locale.jp]: "勇者バニー",
        [Locale.kr]: "용자 바니걸"
    },
    name: {
        [Locale.tc]: "神田綾音",
        [Locale.sc]: "神田绫音",
        [Locale.en]: "Ayane",
        [Locale.jp]: "神田綾音",
        [Locale.kr]: "칸다 아야네"
    },
    abbreviation: {
        [Locale.tc]: [ "兔勇", "兔田" ],
        [Locale.sc]: [ "兔勇", "兔田" ],
        [Locale.en]: [ "Bg.Ayane" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "바야네" ]
    },
    background: {
        [Locale.tc]: `因為某些不可描述的意外，神田綾音積欠了巨額債務，自此踏上了打工還債的窮苦生活。在某個不具名的邪惡債主巴爾的要求下，神田綾音加入了凱薩的娛樂城事業，擔任兔女郎服務生。原本只想著正常工作，快點把債務還完的神田綾音，卻沒想到在看似一般的本大爺娛樂城，遇上了各種奇怪事件。再加上老闆凱薩的不正經行為，讓一切都變得越來越混亂。說真的，她只想要好好工作而已，一點都不想遇到這些麻煩事情。儘管無奈，神田綾音也只能拿出身為勇者的行動力，用最快的速度將麻煩一一解決。\n\n『歡迎光臨「本大爺娛樂城」在這裡你可以實現夢想，翻轉人生，過上人人稱羨的生活……這樣說真的會有人信嗎？』`,
        [Locale.sc]: `因为某些不可描述的意外，神田绫音积欠了巨额债务，自此踏上了打工还债的穷苦生活。在某个不具名的邪恶债主巴尔的要求下，神田绫音加入了凯萨的娱乐城事业，担任兔女郎服务生。原本只想着正常工作，快点把债务还完的神田绫音，却没想到在看似一般的本大爷娱乐城，遇上了各种奇怪事件。再加上老闆凯萨的不正经行为，让一切都变得越来越混乱。说真的，她只想要好好工作而已，一点都不想遇到这些麻烦事情。儘管无奈，神田绫音也只能拿出身为勇者的行动力，用最快的速度将麻烦一一解决。\n\n『欢迎光临「本大爷娱乐城」在这里你可以实现梦想，翻转人生，过上人人称羡的生活……这样说真的会有人信吗？』`,
        [Locale.en]: `Due to some indescribable accident, Ayane has accumulated a huge debt and, since then, has been working multiple jobs to pay it off. At the request of a mysterious and sinister creditor named Ba'al, Ayane joins Caesar's new entertainment business, working as a bunny girl croupier. Originally just hoping to work a normal job and quickly repay her debt, Ayane doesn't expect to encounter a series of bizarre events at what seems to be an ordinary entertainment venue run by her Archdemon boss. On top of that, Caesar's inappropriate behavior leads to even more chaos. Ayane honestly just wants to do her job well and avoid such trouble. Despite her helplessness, she has no choice but to muster her determination as a Hero and resolve the park issues one by one and as quickly as possible.\n\n"Welcome to Master's Wonderland, where you can chase your dreams, turn your life around, and live to be the envy of the world... Seriously, who would actually fall for this?"`,
        [Locale.jp]: `とあるトラブルのせいで、神田綾音は莫大な借金を背負い、それからというものアルバイトで借金を返済する貧しい生活を送っていた。匿名の邪悪な債権者―バルの要求の下、神田綾音はシーザーのカジノにてバニーガールを務めることになった。ただ普通に働いて、早く借金を返済したいと思っていた神田綾音。一見普通に見えるシーザーのカジノで様々な奇妙な出来事に遭遇する。さらに、オーナーであるシーザーの破天荒な行為により、全てがめちゃくちゃになっていく。正直なところ、彼女はただ真面目に働きたいだけで、面倒ごとには一切巻き込まれたくなかった。神田綾音は仕方なく勇者としての行動力を活かし、手早く問題を一つ一つ解決していくのだった。\n\n『「俺様のカジノ」へようこそ。ここでは夢をかなえたり、人生を変えたり、誰もが憧れる生活を送ったりすることできます……こんなこと、本当に信じる人なんているの？』`,
        [Locale.kr]: `어떤 말할 수 없는 사고로 인해, 칸다 아야네는 막대한 빚을 지게 되었고, 그때부터 빚을 갚기 위한 고달픈 아르바이트 생활이 시작되었다. 이름을 밝힐 수 없는 악덕 채권자의 요구로, 칸다 아야네는 시저의 엔터테인먼트 시티 사업에 합류해 바니걸 웨이트리스로 일하게 된다. 원래는 정상적으로 일하며 빚을 빨리 갚으려 했던 칸다 아야네, 결국 시저의 엔터테인먼트 시티에서 온갖 이상한 사건에 휘말리게 된다. 게다가 사장인 시저의 불성실한 행동까지 더해지면서 상황은 점점 더 혼란으로 치닫는다. 칸다 아야네는 그저 열심히 일하고 싶었을 뿐, 이런 귀찮은 일들에 휘말리고 싶은 생각은 없었다. 그래도 어쩔 수 없이, 용자로서의 행동력을 발휘해 가능한 한 빠르게 문제를 해결해 나가야만 한다.\n\n『어서 오세요, 「이 몸의 카지노」에 오시면 꿈을 이룰 수 있고, 인생을 역전시켜 모두가 부러워할 만한 삶을 살 수 있습니다... 이런 말을 진짜 믿는 사람이 있긴 한 건지?』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/09/11",
    essence: UnitEssence[UnitCode.bg_ayane],
    thumbnail: UnitEssence[UnitCode.bg_ayane],
    selection: UnitSelection[UnitCode.bg_ayane],
    clothes: UnitFullImage[UnitCode.bg_ayane],
    tagList: [],
    otherVersion: [ UnitCode.ayane, UnitCode.s_ayane, UnitCode.h_ayane, UnitCode.bu_ayane ],
    initHP: 3600,
    initATK: 979.2,
    puzzle: [],
    outfits: [],
    skillSet: []
}