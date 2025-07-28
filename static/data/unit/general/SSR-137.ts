import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10166: Unit = {
    ID: "10166",
    metaCode: "star_annee",
    prefix: {
        [Locale.tc]: "白熊武裝",
        [Locale.sc]: "白熊武装",
        [Locale.en]: "The White Cub",
        [Locale.jp]: "シロクマ装甲",
        [Locale.kr]: "폴라 베어"
    },
    name: {
        [Locale.tc]: "冬。艾妮",
        [Locale.sc]: "冬。艾妮",
        [Locale.en]: "Annee Winter",
        [Locale.jp]: "アイニー・ウィンター",
        [Locale.kr]: "애니．윈터"
    },
    abbreviation: {
        [Locale.tc]: [ "白熊" ],
        [Locale.sc]: [ "白熊" ],
        [Locale.en]: [ "Star.Annee" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `作為一個基因改造出來的新人類，冬。艾妮的體能非常貧弱。儘管天生病弱，但艾妮超乎常人的機甲控制技術卻補足了她天生病弱的缺點，以機工少女來說是十分特殊的存在。艾妮天真可愛的個性也使她受到眾人的愛戴，是艦隊中治癒人心的要角。或許會有人覺得艾妮其實不必上戰場，不過艾妮為了能和心愛的姊姊一起戰鬥，堅持成為了機工少女。這次和第五艦隊一起來到了新的世界，這裡的一切都讓艾妮十分驚奇。喜愛甜食的清純少女，將在這個奇妙的地方展開嶄新的冒險。\n\n『有好吃的甜點一定要告訴艾妮唷！』`,
        [Locale.sc]: `作为一个基因改造出来的新人类，冬。艾妮的体能非常贫弱。儘管天生病弱，但艾妮超乎常人的机甲控制技术却补足了她天生病弱的缺点，以机工少女来说是十分特殊的存在。艾妮天真可爱的个性也使她受到众人的爱戴，是舰队中治癒人心的要角。或许会有人觉得艾妮其实不必上战场，不过艾妮为了能和心爱的姊姊一起战斗，坚持成为了机工少女。这次和第五舰队一起来到了新的世界，这里的一切都让艾妮十分惊奇。喜爱甜食的清纯少女，将在这个奇妙的地方展开崭新的冒险。\n\n『有好吃的甜点一定要告诉艾妮唷！』`,
        [Locale.en]: `As a genetically engineered Neo-Human, Annee Winter's physical abilities are relatively weak. Despite her natural frailty, her extraordinary skills to control her mech gear make up for such shortcomings, making her a truly unique presence among her fellow Cadettes. Her innocent and lovable personality has endeared her to everyone, making her a cherished member of the fleet and a beacon of inner healing. Some might think that Annie shouldn't need to step onto the battlefield, but she is determined to fight alongside her beloved sister and has steadfastly chosen to become a Cadette. Now, together with the Fifth Regiment, they've arrived in a new world, and everything here fills Annee with absolute wonder. And thus, this pure girl who loves sweets is about to embark on an exciting new adventure in this extraordinary place.\n\n"If there's any sign of yummy desserts, make sure to tell me!"`,
        [Locale.jp]: `遺伝子改造によって生まれた新人類であるアイニー・ウィンターは虚弱体質であった。生まれつき病弱だったアイニーだが、常人離れした機甲操作テクニックでその欠点を補っていて、機工少女としては特殊な存在といえるだろう。誰からも好かれるアイニーの天真爛漫で可愛らしい性格が、艦隊で人々の心を癒すのに一役買っている。アイニーが戦場に出る必要はないと考える人もいるかもしれないが、アイニーは愛する姉と一緒に戦うために、機工少女になることを選んだ。今回、第五艦隊と共に新しい世界にやってきたが、何もかもに驚きを感じるアイニー。甘いものが大好きな彼女は、この奇妙な場所で新しい冒険を始めることになる。\n\n『おいしいデザートがあったら、アイニーに教えてね！』`,
        [Locale.kr]: `유전자 조작으로 탄생한 신인류 애니．윈터, 하지만 신체 능력은 매우 형편없었다. 천성적으로 허약했던 애니는 뛰어난 메카 조종술로 이러한 약점을 보완했고, 암즈걸 중에서도 특별한 존재로 거듭날 수 있었다. 애니는 천진난만하고 귀여운 성격으로 많은 이들의 사랑을 받았고, 함대원들의 힐링을 책임지는 역할을 톡톡히 해내고 있다. 어떤 이들은 애니가 전장에 나갈 필요가 없다고 생각하겠지만, 애니는 자신이 사랑하는 언니와 함께 싸우기 위해 암즈걸이 되기로 결심했었다. 이번 제5함대와 함께 새로운 세계에 도착한 애니는 이곳의 모든 것이 신기하기만 하다. 달콤한 디저트를 좋아하는 순수한 소녀는 이 신비로운 세계에서 새로운 모험을 시작하려 한다.\n\n『맛있는 디저트가 있으면 꼭 애니한테 말해줘야 해요!』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/03/12",
    essence: UnitEssence[UnitCode.star_annee],
    thumbnail: UnitEssence[UnitCode.star_annee],
    selection: UnitSelection[UnitCode.star_annee],
    clothes: UnitFullImage[UnitCode.star_annee],
    tagList: [],
    otherVersion: [],
    initHP: 3748.8,
    initATK: 940.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.star_annee],
    skillSet: []
}