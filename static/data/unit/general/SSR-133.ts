import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10162: Unit = {
    ID: "10162",
    metaCode: "p_aiko",
    prefix: {
        [Locale.tc]: "虔信神祀",
        [Locale.sc]: "虔信神祀",
        [Locale.en]: "Devout Priestess",
        [Locale.jp]: "敬虔な神祭",
        [Locale.kr]: "경신신사"
    },
    name: {
        [Locale.tc]: "艾可",
        [Locale.sc]: "艾可",
        [Locale.en]: "Aiko",
        [Locale.jp]: "アイカ",
        [Locale.kr]: "아이카"
    },
    abbreviation: {
        [Locale.tc]: [ "信艾", "巫艾", "祭艾" ],
        [Locale.sc]: [ "信艾", "巫艾", "祭艾" ],
        [Locale.en]: [ "P.Aiko" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "무이카" ]
    },
    background: {
        [Locale.tc]: `凱薩大人是世界上最偉大的人，凱薩大人沒有缺點，凱薩大人的肉棒是最大最粗的肉棒。每天早上起床，艾可都會好好復誦自己主人的一百個優點，並且一邊唱著凱薩大人最棒之歌開始自己的早晨。如果有機會的話，她真的很希望能夠讓更多的人知道，自己的主人到底是個多麼優秀的人。正好這天，因為凱薩心血來潮想要到神社當被祭拜的神明。於是，身為隨身女僕的艾可，便順理成章的成為了侍奉「凱薩大明神」的巫女，既然機會出現在自己面前，艾可便不會放過任何機會，會努力將凱薩的偉大和崇高，推廣給所有人！\n\n『作為凱薩大人專屬的巫女，艾可會把「凱薩大明神」的名號，推廣給所有人知道的～』`,
        [Locale.sc]: `凱薩大人是世界上最偉大的人，凱薩大人沒有缺點，凱薩大人的肉棒是最大最粗的肉棒。每天早上起床，艾可都會好好複誦自己主人的一百個優點，並且一邊唱著凱薩大人最棒之歌開始自己的早晨。如果有機會的話，她真的很希望能夠讓更多的人知道，自己的主人到底是個多麼優秀的人。正好這天，因為凱薩心血來潮想要到神社當被祭拜的神明。於是，身為隨身女僕的艾可，便順理成章的成為了侍奉「凱薩大明神」的巫女，既然機會出現在自己面前，艾可便不會放過任何機會，會努力將凱薩的偉大和崇高，推廣給所有人！\n\n『身為凱薩大人專屬的巫女，艾可會把「凱薩大明神」的名號，推廣給所有人知道的～』`,
        [Locale.en]: `Master Caesar is the greatest individual this world has ever witnessed. He has no flaws and is blessed with the largest and thickest member. Every morning, Aiko recites her master's one hundred virtues and sings an ode to Master Caesar to start her day. If given the chance, she truly hopes to let more people know just how excellent her master is. That day, on a whim, Caesar wants to be worshipped as a deity at the shrine. As his personal maid, Aiko naturally becomes a Miko to serve "Deus Caesar". Aiko seizes the opportunity right in front of her, working hard to spread the news of Caesar's noble greatness to everyone!\n\n"As Master Caesar's exclusive Miko, Aiko will spread the name of Deus Caesar for all to know~"`,
        [Locale.jp]: `シーザー様はこの世で最も偉大。シーザー様は完全無欠。シーザー様の肉棒は最大にして最強。毎朝目覚めるたび、アイカは主の百の美徳をしっかりと復唱し、「シーザー様最高」の歌を歌いながら一日をスタートさせるのが日課だ。彼女はチャンスさえあれば、もっと多くの人々にシーザー様の素晴らしさを広めたいと願っている。とある日、シーザーが突然、神として祀られたいと言い出した。そこでメイドであるアイカは、「シーザー大明神」に仕える巫女になった。千載一遇のチャンスを前に、アイカは迷うことなく決意した。シーザーの偉大さと崇高さを、全世界に広めるのだ！\n\n『シーザー様専用の巫女として、『シーザー大明神』の名を広めます～』`,
        [Locale.kr]: `시저 님은 세상에서 가장 위대하신 분. 결점이란 하나도 존재하지 않으며, 그분의 육봉은 가장 크고 굵답니다. 매일 아침에 일어날 때마다, 아이카는 자신의 주인의 장점 100가지를 정성스럽게 복창하면서 하루를 시작한다. 만약 기회가 있다면, 그녀는 진심으로 더 많은 사람들에게 자신의 주인이 얼마나 훌륭한 분이지 알리고 싶어했다. 마침 이날, 시저는 갑자기 자신을 숭배할 신사를 만들기로 했고, 그리하여 전속 메이드인 아이카는 자연스럽게 「시저 대명신」을 모시는 무녀가 되었다. 모처럼 찾아온 기회를 놓칠 리 없는 아이카는 시저의 위대함과 존귀함을 세상 모든 이들에게 널리 알리겠다고 결심한다!\n\n『시저 님의 전속 무녀로서, 「시저 대명신」의 이름을 세상 모든 이에게 널리 알리겠습니다~』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/02/12",
    essence: UnitEssence[UnitCode.p_aiko],
    thumbnail: UnitEssence[UnitCode.p_aiko],
    selection: UnitSelection[UnitCode.p_aiko],
    clothes: UnitFullImage[UnitCode.p_aiko],
    tagList: [],
    otherVersion: [ UnitCode.aiko, UnitCode.x_aiko, UnitCode.xx_aiko, UnitCode.s_aiko ],
    puzzle: [],
    outfits: [],
    skillSet: []
}