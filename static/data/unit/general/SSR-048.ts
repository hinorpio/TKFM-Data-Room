import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10100: Unit = {
    ID: "10100",
    metaCode: "usagihime",
    prefix: {
        [Locale.tc]: "惡兔魔王",
        [Locale.sc]: "恶兔魔王",
        [Locale.en]: "Evil Archdemon",
        [Locale.jp]: "悪兎魔王",
        [Locale.kr]: "악토끼 마왕"
    },
    name: {
        [Locale.tc]: "兔姬",
        [Locale.sc]: "兔姬",
        [Locale.en]: "Usagihime",
        [Locale.jp]: "兎姫",
        [Locale.kr]: "우사기 히메"
    },
    abbreviation: {
        [Locale.tc]: [ "兔", "土雞" ],
        [Locale.sc]: [ "兔", "土鸡" ],
        [Locale.en]: [ "Usagi", "OG.Usagi", "OG.Usagihime" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `兔姬是一位清純可愛、車速過快的Vtuber兼繪畫實況主。平時的她，以大而化之的親民性格與零到一百k只需四秒鐘的開車速度，廣受觀眾們的喜愛。這次，兔姬接受了朋友杏仁咪嚕的安麗，也開始直播起天下布魔這款最新的VR遊戲。作為資深老司姬的她究竟會給【天下布魔】的世界帶來什麼樣的風波。一切的答案，都將展現在當晚的直播中！\n\n『從現在開始，我就是惡兔魔王兔姬！』`,
        [Locale.sc]: `兔姬是一位清纯可爱、车速过快的Vtuber兼绘画实况主。平时的她，以大而化之的亲民性格与零到一百k只需四秒钟的开车速度，广受观众们的喜爱。这次，兔姬接受了朋友杏仁咪噜的安丽，也开始直播起天下布魔这款最新的VR游戏。作为资深老司姬的她究竟会给【天下布魔】的世界带来什么样的风波。一切的答案，都将展现在当晚的直播中！\n\n『从现在开始，我就是恶兔魔王兔姬！』`,
        [Locale.en]: `Usagihime is a popular Vtuber and artist who flies by the seat of her panties. Usagihime usually has viewers drooling in the palm of her hand within seconds of starting up her pervy streams. This time, after Annin Miru's recommendation, Usagi hunkers down to play everyone's favorite hentai VR game, TenkafuMA! Being an expert horn-dog (or, horn-rabbit) herself, what kind of debauchery will Usagihime bring to the Tenka table? Find out tonight on the stream!!\n\n"Hey, that's Archdemon Usagihime to you!"`,
        [Locale.jp]: `兎姫は清楚で可愛く、すぐに下ネタに走るVtuber兼イラストレーター。親しみやすい性格と、突然現れるHな一面がファンに愛される理由だ。今回は友達の杏仁ミルに勧められ、天下布魔の最新VRゲームを実況することに。下ネタ大好きな兎姫は「天下布魔」の世界でどのような騒ぎを起こすのだろうか。その答えは、今晩の配信でご覧あれ。\n\n『今日から私は魔王兎姫！』`,
        [Locale.kr]: `순결함과 귀여움을 겸비한, 후방주의 자료 공유자(?)이자 버튜버이자 일러스트레이터. 므훗한 자료들을 빛과 같은 속도로 나누어준 덕분에 모든 이에게 환영받고 있다. 이번엔 안닌 미루의 꾀임에 넘어가 텐카푸마의 최신 VR 버전을 방송하기 시작했다. 우사기 히메, 그녀는 과연 【텐카푸마】의 세계에 어떤 폭풍을 일게 할런지? 모든 해답은 그녀의 라이브를 통해 확인할 수 있다!\n\n『이제부터 난 악토끼 마왕 우사기 히메다!』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2022/05/25",
    essence: UnitEssence[UnitCode.usagihime],
    thumbnail: UnitEssence[UnitCode.usagihime],
    selection: UnitSelection[UnitCode.usagihime],
    clothes: UnitFullImage[UnitCode.usagihime],
    tagList: [],
    otherVersion: [ UnitCode.a_usagihime ],
    initHP: 3732.7978189810988,
    initATK: 943.9978070037291,
    puzzle: [],
    outfits: [],
    skillSet: []
}