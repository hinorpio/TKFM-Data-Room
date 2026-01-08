import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10193: Unit = {
    ID: "10193",
    metaCode: "m_usagihime",
    prefix: {
        [Locale.tc]: "御前神使",
        [Locale.sc]: "御前神使",
        [Locale.en]: "Messenger",
        [Locale.jp]: "神の使者",
        [Locale.kr]: "어전신사"
    },
    name: {
        [Locale.tc]: "兔姬",
        [Locale.sc]: "兔姬",
        [Locale.en]: "Usagihime",
        [Locale.jp]: "兎姫",
        [Locale.kr]: "우사기 히메"
    },
    abbreviation: {
        [Locale.tc]: [ "神兔" ],
        [Locale.sc]: [ "神兔" ],
        [Locale.en]: [ "M.Usagi", "M.Usagihime" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "신사기" ]
    },
    background: {
        [Locale.tc]: `在《天下布魔》體驗了驚悚的鬼屋後，身為老司姬的兔姬不但沒有停下來的意思，反而把油門一腳踩到底。這次，她將在這個熟悉的世界中，體驗全新的活動任務，化身為神明的使者，實現信徒的願望。只要誠心向兔姬祈禱，不論有多少煩惱都會瞬間煙消雲散！如果想知道她會遭遇多少有趣的事情，又會發放多少養眼的福利，就來她的直播中一探究竟吧。\n\n『各位姬友，一起來向偉大的兔姬大明神祈禱吧！』`,
        [Locale.sc]: `在《天下布魔》体验了惊悚的鬼屋后，身为老司姬的兔姬不但没有停下来的意思，反而把油门一脚踩到底。这次，她将在这个熟悉的世界中，体验全新的活动任务，化身为神明的使者，实现信徒的愿望。只要诚心向兔姬祈祷，不论有多少烦恼都会瞬间烟消云散！如果想知道她会遭遇多少有趣的事情，又会发放多少养眼的福利，就来她的直播中一探究竟吧。\n\n『各位姬友，一起来向伟大的兔姬大明神祈祷吧！』`,
        [Locale.en]: `After experiencing the thrilling haunted house in TenkafuMA, Usagihime—the veteran streamer—shows no signs of slowing down. Instead, she doubles down on new challenges. This time, she dives into brand-new event missions in this familiar world, transforming into a divine messenger to help fulfill her believers' wishes. As long as you pray sincerely to the great Usagihime, no matter how many troubles you may suffer, they shall all instantly vanish into the ether! If you want to see just how many fun adventures she encounters and how many eye-catching rewards she hands out, come check out her live stream.\n\n"Hey, chat! Let's all pray real hard to the wondrous Usagihime Daimyojin!"`,
        [Locale.jp]: `《天下布魔》でスリル満点のお化け屋敷を体験した後、ベテランの兎姫は立ち止まるどころか、さらにアクセル全開で突き進んでいく。今度は、この馴染みある世界で新しいイベントミッションを体験し、神の使者として信者たちの願いを叶えていく。兎姫に心から祈りを捧げれば、どんな悩みも一瞬で消え去ってしまう！彼女がどんな面白い出来事に遭遇し、どれだけ目の保養になるサービスを提供してくれるのか知りたければ、彼女の配信を覗いてみよう。\n\n『姫友のみんな、一緒に偉大なる兎姫大明神に祈りを捧げて！』`,
        [Locale.kr]: `《텐카푸마》에서 귀신의 집을 체험한 뒤, 우사기 히메는 멈추기는커녕 오히려 가속 페달을 끝까지 밟는다. 이번에 그녀는 이 익숙한 세계에서 새로운 이벤트 미션을 체험하며, 신의 사자로 변신해 신도들의 소원을 들어줄 예정이다. 진심을 다해 우사기 히메에게 기도한다면, 그 어떤 고민이라도 순식간에 연기처럼 사라질 것이다! 그녀가 얼마나 재미있는 일들을 겪게 될지, 또 얼마나 눈이 즐거운 팬 서비스를 선사할지 궁금하다면 그녀의 라이브 방송에서 직접 확인해 보시길.\n\n『히메타치들, 모두 함께 위대한 우사기 히메 대명신님께 기도를 드리자구!』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2026/01/07",
    essence: UnitEssence[UnitCode.m_usagihime],
    thumbnail: UnitEssence[UnitCode.m_usagihime],
    selection: UnitSelection[UnitCode.m_usagihime],
    clothes: UnitFullImage[UnitCode.m_usagihime],
    tagList: [],
    otherVersion: [ UnitCode.usagihime, UnitCode.a_usagihime ],
    initHP: 4816,
    initATK: 766.4,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.m_usagihime],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}