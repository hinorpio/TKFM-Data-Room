import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10200: Unit = {
    ID: "10200",
    metaCode: "egypt_milae",
    prefix: {
        [Locale.tc]: "強欲天使",
        [Locale.sc]: "强欲天使",
        [Locale.en]: "Greedy Angel",
        [Locale.jp]: "強欲天使",
        [Locale.kr]: "강욕의 천사"
    },
    name: {
        [Locale.tc]: "聖米勒",
        [Locale.sc]: "圣米勒",
        [Locale.en]: "Saint Milae",
        [Locale.jp]: "聖女ミラ",
        [Locale.kr]: "성녀 밀레"
    },
    abbreviation: {
        [Locale.tc]: [ "埃天" ],
        [Locale.sc]: [ "埃天" ],
        [Locale.en]: [ "Egypt.Milae" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "강밀레" ]
    },
    background: {
        [Locale.tc]: `在聖米勒這位大天使眼中，傳播神的思想，解放迷茫的世人，是她最重要的使命。哪怕在挖掘遺跡的過程中，被一個神秘的石板傳送到陌生的地方，她的行動準則也不會有任何變化。不過，這並不代表她是個死板、不知變通的天使。事實上，聖米勒非常樂於在這個充滿沙漠風情的異域中，體驗當地的決鬥文化。所以在回家之前，她決定稍微耽擱一些時間，代替至高無上的神對那些被黑暗汙染、崇拜偽神的邪教徒降下淨化之光。\n\n『呵呵，賭上彼此的靈魂，開始愉快的決鬥吧♡』`,
        [Locale.sc]: `在圣米勒这位大天使眼中，传播神的思想，解放迷茫的世人，是她最重要的使命。哪怕在挖掘遗迹的过程中，被一个神秘的石板传送到陌生的地方，她的行动准则也不会有任何变化。不过，这并不代表她是个死板、不知变通的天使。事实上，圣米勒非常乐于在这个充满沙漠风情的异域中，体验当地的决斗文化。所以在回家之前，她决定稍微耽搁一些时间，代替至高无上的神对那些被黑暗汙染、崇拜伪神的邪教徒降下淨化之光。\n\n『呵呵，赌上彼此的灵魂，开始愉快的决斗吧♡』`,
        [Locale.en]: `In the eyes of the Archangel Saint Milae, her paramount mission is to propagate divine thought and liberate the world's wandering souls. Even after being whisked away to an unfamiliar land by a mysterious stone tablet during a ruin excavation, her principles remain steadfast. However, do not mistake her for a rigid or inflexible celestial being. In truth, Saint Milae is quite delighted to immerse herself in the local dueling culture of this exotic, desert-swept realm. Before finding her way home, she has decided to linger a while longer to rain down the light of purification—on behalf of the Supreme God—upon those cultists who worship false idols and wallow in darkness.\n\n"Hehe... With our very souls on the line, let us begin this delightful duel! ♡"`,
        [Locale.jp]: `大天使である聖女ミラにとって、神の教えを広め、迷える世人を解放することこそが、最も重要な使命である。遺跡の発掘中に謎の石板によって見知らぬ場所へと転送されようとも、そのポリシーが揺らぐことは一切ない。 しかしそれは、彼女が融通の利かない堅物の天使だということを意味しているわけでもない。実のところ、聖女ミラはこの砂漠が漂う異郷で、現地のデュエル文化を体験することを大いに楽しんでいた。そのため、帰る前に至高なる神に代わって、闇に染まった偽りの神を崇める邪教徒たちへ、浄化の光を降り注ぐことにしたのだった。\n\n『フフッ、お互いの魂をかけて、楽しいデュエルをしようじゃない♡』`,
        [Locale.kr]: `대천사 성녀 밀레에게 있어 신의 사상을 전파하고 방황하는 세상 사람들을 해방하는 것은 가장 중요한 사명이라 할 수 있다. 유적을 발굴하던 중 신비로운 석판에 의해 낯선 곳으로 전송되었을지라도, 그녀의 행동 원칙은 변하지 않는다. 하지만 그렇다고 그녀가 융통성이 없고 고리타분한 천사라는 뜻도 아니다. 사실 성녀 밀레는 사막의 정취가 가득한 이 이국적인 땅에서 현지의 듀얼 문화를 체험하는 것을 무척 즐거워하고 있다. 그래서 그녀는 집으로 돌아가기 전, 시간을 조금 내어 지고무상한 신을 대신해 어둠에 오염되고 거짓 신을 숭배하는 사교도들에게 정화의 빛을 비추기로 결심하였는데.\n\n『후훗, 서로의 영혼을 건 즐거운 듀얼을 시작해 볼까요♡』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/04/08",
    essence: UnitEssence[UnitCode.egypt_milae],
    thumbnail: UnitEssence[UnitCode.egypt_milae],
    selection: UnitSelection[UnitCode.egypt_milae],
    clothes: UnitFullImage[UnitCode.egypt_milae],
    tagList: [],
    otherVersion: [ UnitCode.milae, UnitCode.s_milae ],
    initHP: 4174.4,
    initATK: 884.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.egypt_milae],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}