import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10084: Unit = {
    ID: "10084",
    metaCode: "miru",
    prefix: {
        [Locale.tc]: "貓娘Vtuber",
        [Locale.sc]: "猫娘Vtuber",
        [Locale.en]: "Cat-Eared Vtuber",
        [Locale.jp]: "猫娘Vtuber",
        [Locale.kr]: "인기 버튜버"
    },
    name: {
        [Locale.tc]: "杏仁咪嚕",
        [Locale.sc]: "杏仁咪噜",
        [Locale.en]: "Annin Miru",
        [Locale.jp]: "杏仁ミル",
        [Locale.kr]: "안닌 미루"
    },
    abbreviation: {
        [Locale.tc]: [ "咪嚕", "翻滾" ],
        [Locale.sc]: [ "咪噜", "翻滚" ],
        [Locale.en]: [ "Miru" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `杏仁咪嚕是一名貓娘虛擬Vtuber、遊戲實況主。活潑開朗、熱情大方，偶爾有點人來瘋的咪嚕被觀眾們喜愛著。這次為了挑戰全新的領域，咪嚕買下了傳說「最新科技」的VR遊戲進行直播。然而咪嚕以及看台的觀眾們並不知道，這款VR裝置所連結到的卻是一個真實的世界。以實況的心情，咪嚕將展現「第四天災」的強大實力！\n\n『晚安~咪嚕咪嚕~』`,
        [Locale.sc]: `杏仁咪噜是一名猫娘虚拟Vtuber、游戏实况主。活泼开朗、热情大方，偶尔有点人来疯的咪噜被观众们喜爱着。这次为了挑战全新的领域，咪噜买下了传说「最新科技」的VR游戏进行直播。然而咪噜以及看台的观众们并不知道，这款VR装置所连结到的却是一个真实的世界。以实况的心情，咪噜将展现「第四天灾」的强大实力！\n\n『晚安~咪噜咪噜~』`,
        [Locale.en]: `Annin Miru is a cat-eared virtual Youtuber, and obsessed with gaming. Everyone loves her outgoing, and slightly crazy, personality. Wanting to find something new, Annin Miru lucks out after getting the latest "Total-Immersion" VR game, "TenkafuMA", from a friend of a friend... of a friend. What she doesn't realize is that this new game doesn't just make you feel like you're in another world... but it actually transports you to another world! Will Annin Miru be able to handle this demonic new realm?\n\n"Good evening~ Miru Miru~"`,
        [Locale.jp]: `杏仁ミルは猫娘のVtuber兼実況主。明るく元気で、時々ハイテンションな彼女は多くのファンに愛されている。今回は新ジャンルにチャレンジしようと、伝説の「最新テクノロジー」であるVRゲームを購入して実況することになった。しかしミルと視聴者は、このVRデバイスがとある現実世界と繋がっていることを知らなかった。こうしてミルはゲームで大きな過ちを犯すのであった！\n\n『こんばんミルミル~』`,
        [Locale.kr]: `안닌 미루는 버튜버겸 게임 스트리머로 활동 중이다. 활발하고 열정이 넘치는 성격, 가끔 '뇌절'하는 미루의 모습은 시청자의 호응을 받게 되었다. 이번엔 완전히 새로운 영역에 도전하기 위해 미루는 [최신테크놀로지]의 VR게임으로 라이브를 하게 되는데. 미루와 시청자들은 알지 못했다. 그 VR게임이 또 다른 '실제 세계'와 연결되어 있었다는 것을… 그래도 언제나 씩씩한 우리의 미루는 '뇌절'이 무엇인지 확실하게 시청자들에게 각인시켜주었다.\n\n『굿나잇~ 미루미루~』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.DEFENCE,
    isLimited: false,
    releaseDate: "2022/03/09",
    essence: UnitEssence[UnitCode.miru],
    thumbnail: UnitEssence[UnitCode.miru],
    selection: UnitSelection[UnitCode.miru],
    clothes: UnitFullImage[UnitCode.miru],
    tagList: [
        TagID.ELEMENT_FIRE,
        TagID.POSITION_ATTACKER,
        TagID.CLASS_LEADER,
        TagID.OTHER_EXPLOSIVENESS,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [ UnitCode.d_miru ],
    initHP: 3326.4,
    initATK: 961.6,
    puzzle: [],
    outfits: [],
    skillSet: []
}