import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10182: Unit = {
    ID: "10182",
    metaCode: "ria",
    prefix: {
        [Locale.tc]: "精英白領",
        [Locale.sc]: "精英白领",
        [Locale.en]: "White-Collar Elitist",
        [Locale.jp]: "エリートOL",
        [Locale.kr]: "커리어 우먼"
    },
    name: {
        [Locale.tc]: "神田莉央",
        [Locale.sc]: "神田莉央",
        [Locale.en]: "Ria",
        [Locale.jp]: "神田莉央",
        [Locale.kr]: "칸다 리오"
    },
    abbreviation: {
        [Locale.tc]: [ "勇媽", "田媽" ],
        [Locale.sc]: [ "勇妈", "田妈" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `沉著果斷、精明能幹，這是每個人在初次見到神田莉央時，最直觀的第一印象。作為商業貿易公司的部長，神田莉央的行事風格相當著名，她雷厲風行、恩威並濟，以強硬的手腕將整個部門上下統合成一塊鐵板。在其所負責的職場上，神田莉央甚至有著冰之女王的稱號。不過，外人並不知道是，她在和丈夫離婚之後，便一直在獨力撫養自己的女兒。儘管她大部分時間都在外工作，沒時間打理家務，所以只能雇傭保母來照顧小孩，但只要工作上有空閒時間，她就一定會盡心盡力地為自己女兒準備驚喜和禮物，且從不吝於給予關愛和讚美。她或許不是個完美的母親，但對神田綾音來說，卻是最值得驕傲和自豪的媽媽。\n\n『繁冗又沒有效率的會議就不必開了，如果連會議的目的都無法確認，那開會就是徹底無用的行為。』`,
        [Locale.sc]: `沉着果断、精明能干，这是每个人在初次见到神田莉央时，最直观的第一印象。作为商业贸易公司的部长，神田莉央的行事风格相当着名，她雷厉风行、恩威并济，以强硬的手腕将整个部门上下统合成一块铁板。在其所负责的职场上，神田莉央甚至有着冰之女王的称号。不过，外人并不知道是，她在和丈夫离婚之后，便一直在独力抚养自己的女儿。儘管她大部分时间都在外工作，没时间打理家务，所以只能雇佣保母来照顾小孩，但只要工作上有空闲时间，她就一定会尽心尽力地为自己女儿准备惊喜和礼物，且从不吝于给予关爱和赞美。她或许不是个完美的母亲，但对神田绫音来说，却是最值得骄傲和自豪的妈妈。\n\n『繁冗又没有效率的会议就不必开了，如果连会议的目的都无法确认，那开会就是彻底无用的行为。』`,
        [Locale.en]: `Calm, decisive, and highly capable... this is the immediate first impression everyone gets upon meeting Ria Kanda. As the head of a commercial trading company, Ria's leadership style is well-known. She acts swiftly and decisively, balancing authority with compassion, and with a firm hand, she unites her entire department into an unshakable force. In her workplace, Ria even earns the title of "Office Ice Queen". However, what outsiders don't know is that, after divorcing her husband, she single-handedly raises her daughter. Though she spends most of her time working and has little time for household chores, relying on a nanny to care for her daughter, whenever she has a moment of free time from work, she wholeheartedly prepares surprises and gifts for her daughter, never hesitating to shower her with love and praise. She may not be a perfect mother, but to Ayane, she is the most admirable and cherished mom ever.\n\n"Pointless, inefficient meetings are a waste of time. If the purpose of a meeting isn't clear, it's utterly useless."`,
        [Locale.jp]: `沈着冷静で判断力があり、何でもできる人──神田莉央に初めて会う人が抱くのは、まさにそんな第一印象だ。商社の部長として名を馳せる神田莉央は、迅速果断、アメとムチのスタイルで知られており、その強硬な手腕によって部門全体を一枚岩にまとめ上げた。その働きぶりから、職場では「氷の女王」とまで呼ばれている。だが、皆が知らない事実がある。それは、離婚後ずっと娘を一人で育てているということだ。普段は多忙で家事に割く時間がなく、ベビーシッターに子どもの世話を頼まざるを得ないが、仕事に余裕ができれば必ず娘のためにサプライズや贈り物を用意し、惜しみない愛情と称賛を注いでいる。完璧な母親とは言えないかもしれない。しかし、神田綾音にとって彼女は、何より誇り高い自慢の母親なのだ。\n\n『長々と効率の悪い会議は開くべきじゃないわ。目的が明確じゃない会議なんて、無駄なだけだもの』`,
        [Locale.kr]: `침착함, 단호함, 영리함, 유능함. 칸다 리오를 처음 만난 사람들이 가장 먼저 받는 인상은 늘 이렇다. 상사무역회사의 부장으로서 그녀의 업무 스타일은 이미 유명하다. 번개처럼 빠르고, 위엄과 강단 있는 태도로 부서를 하나의 철기둥처럼 단단히 통솔한다. 그 덕에 직장 내에서는 얼음 여왕이라는 별명까지 얻었다. 하지만 외부 사람들은 모른다. 그녀가 남편과 이혼한 뒤로 줄곧 혼자 힘으로 딸을 키워왔다는 사실을. 대부분의 시간을 회사에서 보내느라 집안일을 챙길 겨를이 없었기에 보모를 고용해야 했지만, 일에서 여유가 생기는 순간만큼은 반드시 딸에게 정성을 다해 선물과 깜짝 이벤트를 준비했고, 사랑과 칭찬을 아끼지 않았다. 그녀는 어쩌면 완벽한 어머니는 아닐지 모른다. 하지만 칸다 아야네에게 있어 리오는 누구보다 자랑스럽고 가장 큰 자부심이 되는 엄마였다.\n\n『번잡하고 비효율적인 회의는 할 필요 없어요. 회의의 목적조차 확인할 수 없다면 회의는 완전히 무의미한 행동이에요.』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/09/10",
    essence: UnitEssence[UnitCode.ria],
    thumbnail: UnitEssence[UnitCode.ria],
    selection: UnitSelection[UnitCode.ria],
    clothes: UnitFullImage[UnitCode.ria],
    tagList: [],
    otherVersion: [],
    initHP: 3732.8,
    initATK: 944,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.ria],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}