import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10197: Unit = {
    ID: "10197",
    metaCode: "cos_yanko",
    prefix: {
        [Locale.tc]: "浪行魅狐",
        [Locale.sc]: "浪行魅狐",
        [Locale.en]: "Vagabond Vixen",
        [Locale.jp]: "流浪の妖狐",
        [Locale.kr]: "유랑하는 요호"
    },
    name: {
        [Locale.tc]: "小泱",
        [Locale.sc]: "小泱",
        [Locale.en]: "Yanko",
        [Locale.jp]: "ヤンコ",
        [Locale.kr]: "얀코"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [ "Cos.Yanko", "C.Yanko" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `小泱是隻喜歡四處遊走、遊戲人間的妖狐。對這位浪跡天涯的狐狸小姐來說，她從未將任何地方當作是家，永遠都以過客的身份自居。熱心和重情感的她時常被捲入各種事件之中，但也因此結交了許多朋友。比起聽故事和看書，小泱更喜歡身體力行去親眼見證那些精彩的故事。不問今日身在何處，只問明日該往何方，這就是小泱的旅行風格。\n\n『明天又有什麼樣的冒險等著我們呢～？呵呵。』`,
        [Locale.sc]: `小泱是隻喜欢四处游走、游戏人间的妖狐。对这位浪迹天涯的狐狸小姐来说，她从未将任何地方当作是家，永远都以过客的身份自居。热心和重情感的她时常被捲入各种事件之中，但也因此结交了许多朋友。比起听故事和看书，小泱更喜欢身体力行去亲眼见证那些精彩的故事。不问今日身在何处，只问明日该往何方，这就是小泱的旅行风格。\n\n『明天又有什麽样的冒险等着我们呢～？呵呵。』`,
        [Locale.en]: `Yanko is a fox yokai who loves to wander and treat the world as her playground. To this wayfaring fox lady, no place has ever truly been "home"; she has always seen herself as a mere passerby. Kind-hearted and sentimental, she often finds herself swept up in various incidents, but has made many friends because of it. Rather than listening to stories or reading books, Yanko prefers to go out and witness those grand tales with her own eyes. Never asking where she is today, only where she should head tomorrow. That is Yanko's style of travel.\n\n"Tomorrow, I wonder what kind of adventure awaits us? Hehe."`,
        [Locale.jp]: `ヤンコは各地を放浪し、世界を遊び歩くことを好む妖狐。天涯を流浪するこのキツネのお姉さんには、故郷と呼べる場所はなく、常に旅人として身を置いている。心優しく情に厚い彼女は、よく様々な出来事に巻き込まれるが、そのおかげで多くの友人を作ることができた。ヤンコは物語を聞いたり本を読んだりするより、自ら行動し、その目で素晴らしい物語を目撃することを好む。今日どこにいるかは問わず、明日どこへ向かうべきかだけを問う。それがヨウの旅のスタイルなのだ。\n\n『明日はどんな冒険が私たちを待っているのでしょう～ふふっ』`,
        [Locale.kr]: `얀코는 도처를 유람하며 세상을 즐기는 요호이다. 천하를 방랑하는 이 여우에게 있어 정착지란 존재하지 않으며, 그녀는 언제나 스스로를 나그네라 여기며 살아간다. 정이 많고 열정적인 성격 탓에 수많은 사건에 휘말리곤 하지만, 그 과정에서 수많은 인연을 맺어왔다. 타인의 이야기를 전해 듣거나 서적을 탐독하기보다는, 직접 몸을 움직여 찬란한 이야기를 직접 두 눈과 귀로 보고 듣는 것을 선호한다. 오늘 어디에 머무는가보다 내일 어디로 향할 것인가를 중시하는 것, 그것이 바로 얀코가 추구하는 여행 스타일이랄까?\n\n『내일은 또 어떤 모험이 우리를 기다리고 있을까? 후후.』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/03/11",
    essence: UnitEssence[UnitCode.cos_yanko],
    thumbnail: UnitEssence[UnitCode.cos_yanko],
    selection: UnitSelection[UnitCode.cos_yanko],
    clothes: UnitFullImage[UnitCode.cos_yanko],
    tagList: [],
    otherVersion: [],
    initHP: 3737.6,
    initATK: 988.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.cos_yanko],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}