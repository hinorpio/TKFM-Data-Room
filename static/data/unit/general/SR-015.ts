import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10041: Unit = {
    ID: "10041",
    metaCode: "yingying",
    prefix: {
        [Locale.tc]: "公會看板娘",
        [Locale.sc]: "公会看板娘",
        [Locale.en]: "Guild Receptionist",
        [Locale.jp]: "ギルドの看板娘",
        [Locale.kr]: "길드 간판 소녀"
    },
    name: {
        [Locale.tc]: "小螢",
        [Locale.sc]: "小萤",
        [Locale.en]: "Ying-Ying",
        [Locale.jp]: "ホタル",
        [Locale.kr]: "호타루"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `小螢是偏僻地區冒險者公會分部的接待員，協助公會分發委託，給予冒險者報酬，鼓勵他們，並帶著笑容迎接完成任務歸來的冒險者。因為親切開朗的態度，小螢被眾多冒險者喜愛，也被當作冒險者公會分部的看板娘。然而本該過著平凡而忙碌生活的小螢，卻遇上了因為無聊而出外遊玩的凱薩。幸運的是，偏僻的冒險者公會分部多數人沒有見過凱薩的樣貌，不幸的是，這裡所有人加在一起都不是凱薩對手。一方面試圖隱瞞凱薩身份以免引起騷動，一方面又得應付凱薩的「攻勢」。究竟小螢能夠維持自己的純潔之身到什麼時候呢？\n\n『帶著笑容迎接所有前來的冒險者，這就是公會接待員的任務。』`,
        [Locale.sc]: `小萤是偏僻地区冒险者公会分部的接待员，协助公会分发委托，给予冒险者报酬，鼓励他们，并带着笑容迎接完成任务归来的冒险者。因为亲切开朗的态度，小萤被众多冒险者喜爱，也被当作冒险者公会分部的看板娘。然而本该过着平凡而忙碌生活的小萤，却遇上了因为无聊而出外游玩的凯萨。幸运的是，偏僻的冒险者公会分部多数人没有见过凯萨的样貌，不幸的是，这里所有人加在一起都不是凯萨对手。一方面试图隐瞒凯萨身份以免引起骚动，一方面又得应付凯萨的「攻势」。究竟小萤能够维持自己的纯洁之身到什么时候呢？\n\n『带着笑容迎接所有前来的冒险者，这就是公会接待员的任务。』`,
        [Locale.en]: `Ying-Ying is the receptionist at the Adventurer's Guild. She's always helping Adventurers find jobs and claim their rewards. Because she's so nice, with such a winning smile, every adventurer can't help but obsess over her. One day, Ying-Ying's routine lifestyle is turned upside-down when a bored Caesar comes bumbling into the Adventurer's Guild. Fortunately for Caesar, none of these country folk have seen him before or know who he is. Unfortunately, for his ego, not even all of the villagers combined would stand a chance against him. Now that Ying-Ying has vowed to keep Caesar's identity a secret, she's had to take on a whole bunch of "extra assignments" at work. With all of this, how long can she really keep up this whole innocent look?\n\n"It's the receptionist's duty to meet every Adventurer with a big, bright smile!"`,
        [Locale.jp]: `ホタルは冒険者ギルドの受付嬢。依頼を紹介したり、報酬を渡したり、笑顔で冒険者を迎えるのが彼女の仕事だ。明るく親切な彼女は多くの冒険者から愛されており、それが理由でギルドの看板娘となっている。ずっと忙しくも平凡な生活を送っていた彼女だが、暇つぶしに外出していたシーザーと偶然にも出会ってしまった。幸運にもギルドの冒険者は皆シーザーを見たことが無かったため、魔王であることはバレなかった。だが万が一のことがあれば、ギルドの冒険者全員を合わせても、シーザーに敵うことはないだろう。それを不安に思った彼女はシーザーの正体隠しをすることに。しかしその反面シーザーの「攻勢」に応えなければならなかった。ホタルは一体いつまで純潔なカラダでいられるのだろうか。\n\n『やって来た冒険者を笑顔で出迎える。それが受付嬢の仕事だよ』`,
        [Locale.kr]: `호타루는 모험가 길드의 접수원이다. 길드 의뢰와 보수를 나누어주고 길드원들을 격려하는 등의 일을 돕고 있으며 임무를 마치고 돌아온 모험가들을 언제나 웃으며 맞이해주고 있다. 늘 친절한 태도로 호타루는 수많은 모험가들의 호감을 사게 되었고, 길드의 간판 소녀로 등극하게 된다. 바쁜 일상을 보내고 있던 호타루는 어느 날 무료함을 달래러 이리저리 돌아다니던 시저와 마주치게 되었다. 다행인 점은 변방에 있는 길드라 대다수가 시저의 모습을 본 적이 없다는 것이었고, 불행인 점은 길드에 있던 단 한 명도 시저의 적수가 되지 못했다는 것. 시저의 정체를 숨겨 소동이 일어나지 않게 함과 동시에 시저의 「공세」를 받아주게 된 호타루. 과연 호타루는 자신의 순결을 언제까지 지켜낼 수 있을런지?\n\n『길드 안내원이라면 이곳에 방문하는 모든 모험가들을 웃는 얼굴로 맞이해야죠.』`
    },
    rarity: Rarity.SR,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2022/10/12",
    essence: UnitEssence[UnitCode.yingying],
    thumbnail: UnitEssence[UnitCode.yingying],
    selection: UnitSelection[UnitCode.yingying],
    clothes: UnitFullImage[UnitCode.yingying],
    tagList: [
        TagID.ELEMENT_WATER,
        TagID.POSITION_HEALER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_FLAT_TITS,
        TagID.CLASS_ELITE,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_SUPPORT,
    ], 
    otherVersion: [],
    initHP: 3180.8,
    initATK: 770,
    puzzle: [],
    outfits: [],
    skillSet: []
}