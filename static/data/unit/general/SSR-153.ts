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
        [Locale.tc]: `沉著果斷、精明能幹，這是每個人在初次見到神田莉央時，最直觀的第一印象。作為商業貿易公司的部長，神田莉央的行事風格相當著名，她雷厲風行、恩威並濟，以強硬的手腕將整個部門上下統合成一塊鐵板。在其所負責的職場上，神田莉央甚至有著冰之女王的稱號。不過，外人並不知道是，她在和丈夫離婚之後，便一直在獨力撫養自己的女兒。儘管她大部分時間都在外工作，沒時間打理家務，所以只能雇傭保母來照顧小孩，但只要工作上有空閒時間，她就一定會盡心盡力地為自己女兒準備驚喜和禮物，且從不吝於給予關愛和讚美。她或許不是個完美的母親，但對神田綾音來說，卻是最值得驕傲和自豪的媽媽。實際上，以上提及的所有情報，都是從神田綾音的腦海深處讀取出來的資訊。「神田莉央」的真實身分，是一種擁有讀取記憶和幻化他人模樣能力的魔族。這些名為幻身魔的魔族因為本體戰鬥力弱小，不適合在弱肉強食的魔界生存，所以在很久很久以前就躲到人界，融入了人類的生活中。直到那天，死靈大軍突然出現，摧毀了「神田莉央」的家鄉，甚至連她的家人也都一併被殺害。如果不是手持聖劍的勇者，即時出現保護了剩下的人，她可能也和自己的丈夫孩子一樣，早早就加入了不死大軍的行列。而為了報答勇者的救命之恩，這位弱小的魔族來到魔王城，和兩位魔王一同展開了一場鋪天蓋地的龐大計畫。\n\n『繁冗又沒有效率的會議就不必開了，如果連會議的目的都無法確認，那開會就是徹底無用的行為。』`,
        [Locale.sc]: `沉着果断、精明能干，这是每个人在初次见到神田莉央时，最直观的第一印象。作为商业贸易公司的部长，神田莉央的行事风格相当着名，她雷厉风行、恩威并济，以强硬的手腕将整个部门上下统合成一块铁板。在其所负责的职场上，神田莉央甚至有着冰之女王的称号。不过，外人并不知道是，她在和丈夫离婚之后，便一直在独力抚养自己的女儿。儘管她大部分时间都在外工作，没时间打理家务，所以只能雇佣保母来照顾小孩，但只要工作上有空闲时间，她就一定会尽心尽力地为自己女儿准备惊喜和礼物，且从不吝于给予关爱和赞美。她或许不是个完美的母亲，但对神田绫音来说，却是最值得骄傲和自豪的妈妈。实际上，以上提及的所有情报，都是从神田绫音的脑海深处读取出来的资讯。「神田莉央」的真实身分，是一种拥有读取记忆和幻化他人模样能力的魔族。这些名为幻身魔的魔族因为本体战斗力弱小，不适合在弱肉强食的魔界生存，所以在很久很久以前就躲到人界，融入了人类的生活中。直到那天，死灵大军突然出现，摧毁了「神田莉央」的家乡，甚至连她的家人也都一併被杀害。如果不是手持圣剑的勇者，即时出现保护了剩下的人，她可能也和自己的丈夫孩子一样，早早就加入了不死大军的行列。而为了报答勇者的救命之恩，这位弱小的魔族来到魔王城，和两位魔王一同展开了一场铺天盖地的庞大计画。\n\n『繁冗又没有效率的会议就不必开了，如果连会议的目的都无法确认，那开会就是彻底无用的行为。』`,
        [Locale.en]: `Calm, decisive, and highly capable... this is the immediate first impression everyone gets upon meeting Ria Kanda. As the head of a commercial trading company, Ria's leadership style is well-known. She acts swiftly and decisively, balancing authority with compassion, and with a firm hand, she unites her entire department into an unshakable force. In her workplace, Ria even earns the title of "Office Ice Queen". However, what outsiders don't know is that, after divorcing her husband, she single-handedly raises her daughter. Though she spends most of her time working and has little time for household chores, relying on a nanny to care for her daughter, whenever she has a moment of free time from work, she wholeheartedly prepares surprises and gifts for her daughter, never hesitating to shower her with love and praise. She may not be a perfect mother, but to Ayane, she is the most admirable and cherished mom ever. All the information mentioned above is actually data read from the depths of Ayane's mind. The true identity of Ria Kanda is that of a demon with the ability to read memories and shapeshift into others' appearances. These demons, called Phantom Demons, have weak combat abilities and are ill-suited for survival in the dog-eat-dog Demon Realm. Long ago, they fled to the human world and blended into human society. That is, until the day an undead army suddenly appears, destroying "Ria Kanda's" hometown and even killing her family. If not for the Blademaster-wielding Hero, who arrives in time to protect the survivors, she might have joined the ranks of the undead alongside her husband and child. To repay the Hero's life-saving kindness, this frail demon comes to Caesar's Palace and, alongside two Archdemons, embarking on a grand, earth-shaking plan.\n\n"Pointless, inefficient meetings are a waste of time. If the purpose of a meeting isn't clear, it's utterly useless."`,
        [Locale.jp]: `沈着冷静で判断力があり、何でもできる人──神田莉央に初めて会う人が抱くのは、まさにそんな第一印象だ。商社の部長として名を馳せる神田莉央は、迅速果断、アメとムチのスタイルで知られており、その強硬な手腕によって部門全体を一枚岩にまとめ上げた。その働きぶりから、職場では「氷の女王」とまで呼ばれている。だが、皆が知らない事実がある。それは、離婚後ずっと娘を一人で育てているということだ。普段は多忙で家事に割く時間がなく、ベビーシッターに子どもの世話を頼まざるを得ないが、仕事に余裕ができれば必ず娘のためにサプライズや贈り物を用意し、惜しみない愛情と称賛を注いでいる。完璧な母親とは言えないかもしれない。しかし、神田綾音にとって彼女は、何より誇り高い自慢の母親なのだ。実は、ここまで語られたすべての情報は、神田綾音の記憶の奥底から読み取られたものにすぎない。「神田莉央」の正体──それは、他人の記憶を読み取り、その姿に変わる力を持つ魔族だった。この幻体魔と呼ばれる魔族は、戦闘力が極めて低く、弱肉強食の魔界では生き残れないため、はるか昔に人間界へと身を隠し、人間の社会へ溶け込んでいた。しかし、あの日のこと。突如として現れた死霊の大軍が「神田莉央」の故郷を滅ぼし、彼女の家族すらも殺めてしまった。もしあの時、聖剣を携えた勇者が駆けつけ、残された人々を守っていなければ、彼女も夫や子供と同じく、不死の軍勢に加わっていたに違いない。命を救われた恩に報いるため、弱き魔族は魔王城へ赴き、二人の魔王と共に空前の大計画を始動させるのであった。\n\n『長々と効率の悪い会議は開くべきじゃないわ。目的が明確じゃない会議なんて、無駄なだけだもの』`,
        [Locale.kr]: `침착함, 단호함, 영리함, 유능함. 칸다 리오를 처음 만난 사람들이 가장 먼저 받는 인상은 늘 이렇다. 상사무역회사의 부장으로서 그녀의 업무 스타일은 이미 유명하다. 번개처럼 빠르고, 위엄과 강단 있는 태도로 부서를 하나의 철기둥처럼 단단히 통솔한다. 그 덕에 직장 내에서는 얼음 여왕이라는 별명까지 얻었다. 하지만 외부 사람들은 모른다. 그녀가 남편과 이혼한 뒤로 줄곧 혼자 힘으로 딸을 키워왔다는 사실을. 대부분의 시간을 회사에서 보내느라 집안일을 챙길 겨를이 없었기에 보모를 고용해야 했지만, 일에서 여유가 생기는 순간만큼은 반드시 딸에게 정성을 다해 선물과 깜짝 이벤트를 준비했고, 사랑과 칭찬을 아끼지 않았다. 그녀는 어쩌면 완벽한 어머니는 아닐지 모른다. 하지만 칸다 아야네에게 있어 리오는 누구보다 자랑스럽고 가장 큰 자부심이 되는 엄마였다. 사실 지금까지 언급된 모든 정보는 칸다 아야네의 기억 깊은 곳에서 읽어낸 것에 불과하다. 「칸다 리오」의 진짜 정체는 타인의 기억을 읽고 모습까지 바꿀 수 있는 마족이었다. 이른바 환신마라 불리는 이 마족들은 본체의 전투력이 지나치게 약해, 약육강식의 마계에서는 살아남기 쉽지 않기 때문에 오래전부터 인간계로 숨어들어와 인간 사회에 녹아들었다. 그러던 어느 날, 갑자기 몰려온 네크로맨서 대군이 「칸다 리오」의 고향을 파괴하고, 그녀의 가족마저 모조리 살해해 버렸다. 만약 성검을 든 용자가 제때 나타나 남은 사람들을 지켜내지 않았다면, 그녀 역시 남편과 아이처럼 이미 언데드의 군세에 합류했을 것이다. 그 은혜를 갚기 위해, 이 나약한 마족은 마왕성으로 향했고 두 마왕과 함께 하늘을 뒤덮는 거대한 계획을 세우기 시작하는데...\n\n『번잡하고 비효율적인 회의는 할 필요 없어요. 회의의 목적조차 확인할 수 없다면 회의는 완전히 무의미한 행동이에요.』`
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