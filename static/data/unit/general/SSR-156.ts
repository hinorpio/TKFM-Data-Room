import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10185: Unit = {
    ID: "10185",
    metaCode: "lilinor",
    prefix: {
        [Locale.tc]: "狂妄雌仙",
        [Locale.sc]: "狂妄雌仙",
        [Locale.en]: "Arrogant Fairy",
        [Locale.jp]: "狂気の妖精",
        [Locale.kr]: "광망의 페어리"
    },
    name: {
        [Locale.tc]: "莉莉諾",
        [Locale.sc]: "莉莉诺",
        [Locale.en]: "Lilinor",
        [Locale.jp]: "リリナ",
        [Locale.kr]: "리리나"
    },
    abbreviation: {
        [Locale.tc]: [ "仙子", "雌仙" ],
        [Locale.sc]: [ "仙子", "雌仙" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `世界上有各式各樣的小仙子，莉莉諾本人就是其中之一。沒有人知道她為何擁有和人類一樣大小的身形，而她本人對此也是絕口不提。作為管理小仙子的組織「小仙子協會」的部長之一，莉莉諾的行為可以說是囂張到極點。她喜歡盡情嘲諷弱者，想辦法壓榨底下員工的所有價值。狂妄的行事作風讓她在「小仙子協會」裡的風評並不是那麼友善，不過她本人似乎一點都不在意別人怎麼看待自己。而在她那欠揍行為的背後，好像也隱藏著不為人知的一面…？\n\n『笨蛋～雜魚～怎麼連這種小事情都要我來教啊？真是拿你沒辦法呢，我只示範一次喔♡』`,
        [Locale.sc]: `世界上有各式各样的小仙子，莉莉诺本人就是其中之一。没有人知道她为何拥有和人类一样大小的身形，而她本人对此也是绝口不提。作为管理小仙子的组织「小仙子协会」的部长之一，莉莉诺的行为可以说是嚣张到极点。她喜欢尽情嘲讽弱者，想办法压榨底下员工的所有价值。狂妄的行事作风让她在「小仙子协会」里的风评并不是那麽友善，不过她本人似乎一点都不在意别人怎麽看待自己。而在她那欠揍行为的背后，好像也隐藏着不为人知的一面…？\n\n『笨蛋～杂鱼～怎麽连这种小事情都要我来教啊？真是拿你没办法呢，我只示范一次喔♡』`,
        [Locale.en]: `There are all sorts of fairies, and Lilinor is but one of them. Nobody knows why she's as big as a human, though, and she doesn't seem to want to talk about it. As a higher-up of the Realmwide Fairy Association, an administrative fairy organization, Lilly can sometimes behave a bit... arrogant. She gets a kick out of mocking those beneath her and milks them for all their worth. Such behavior has garnered her a mountain of unfriendly feedback within the Realmwide Fairy Association, but she doesn't seem to give a rat's behind what others think or say about her anyway. But behind this provocative behavior... might she be hiding another side of herself...?\n\n"You idiot~ Useless pleb~ Do you need me to teach you how to tie your shoes too?! You're hopeless, but I guess I can teach ya a thing or two ♡"`,
        [Locale.jp]: `世界にはさまざまな妖精が存在しており、リリナ自身もそのひとりである。なぜ彼女が人間と同じ大きさの身体をしているのかは誰も知らず、本人も決して口にしない。「妖精協会」を管理する部長のひとりとして、リリナの振る舞いは傲慢そのものだった。彼女は弱者を徹底的に嘲笑い、部下を好きなだけこき使う。その傲慢な態度から、協会内での評判は決して良いものではなかったが、当の本人は他人の目など気にする素振りもない。しかし、彼女の憎たらしい行動の裏には、どうやら知られざる一面も隠されているようだ。\n\n『バ～カ、ザ～コ、こんな簡単なことまで私に教えてもらわなきゃできないの？しょうがないなぁ。特別に一度だけ手本を見せてあげる♡』`,
        [Locale.kr]: `세상에는 각양각색의 페어리들이 존재하고, 리리나 역시 그중 하나였다. 왜 그녀가 인간과 똑같은 크기의 몸을 가지고 있는지는 아무도 알지 못하며, 정작 그녀 본인도 이에 대해서는 전혀 입을 열지 않았다. 「페어리 협회」를 관리하는 부장 중 한 명으로서, 리리나의 행실은 가히 오만함의 극치라 할 만했다. 그녀는 약자를 마음껏 비웃고, 부하들의 가치를 끝까지 쥐어짜내는 걸 즐겼다. 그런 방자한 행실 탓에 페어리 협회 내에서의 평판은 그리 좋지 않았지만, 그녀는 타인의 시선을 전혀 개의치 않는 듯했다. 그리고 그 얄미운 행동 뒤에는, 어쩌면 남들이 모르는 또 다른 모습이 숨어 있는지도 모른다...\n\n『바보~ 잡어야~ 이런 사소한 일까지 내가 가르쳐 줘야 해? 참 별수 없네. 단 한 번만 시범을 보여줄게♡』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/10/15",
    essence: UnitEssence[UnitCode.lilinor],
    thumbnail: UnitEssence[UnitCode.lilinor],
    selection: UnitSelection[UnitCode.lilinor],
    clothes: UnitFullImage[UnitCode.lilinor],
    tagList: [],
    otherVersion: [],
    initHP: 3280,
    initATK: 1075.2,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.lilinor],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}