import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10045: Unit = {
    ID: "10045",
    metaCode: "ibuki",
    prefix: {
        [Locale.tc]: "極樂之鬼",
        [Locale.sc]: '极乐之鬼',
        [Locale.en]: "Oni of Bliss",
        [Locale.jp]: "極楽の鬼",
        [Locale.kr]: "탐닉의 오니"
    },
    name: {
        [Locale.tc]: "伊吹朱點",
        [Locale.sc]: "伊吹朱点",
        [Locale.en]: "Ibuki Shuten",
        [Locale.jp]: "伊吹朱点",
        [Locale.kr]: "이부키 슈텐"
    },
    abbreviation: {
        [Locale.tc]: [ "伊吹" ],
        [Locale.sc]: [ "伊吹" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `外貌顯得幼小的朱點實質上已是成年許久的鬼人，身為極端的享樂主義者，從年輕開始就已在暴力與酒精中盡情抒發自己的享樂主義，也因此聲名狼籍。最終導致了自己被陰陽師所封印的命運。被凱薩解開封印的朱點，打算繼續自己酒池肉林的計畫與生活，但在她眼前，或許就是將改變她一生的相遇……\n\n『妾身喜歡享樂，隨心所欲，想到什麼一定會立刻去做，呵呵，是無法忍耐的麻煩女人呢。』`,
        [Locale.sc]: `外貌显得幼小的朱点实质上已是成年许久的鬼人，身为极端的享乐主义者，从年轻开始就已在暴力与酒精中尽情抒发自己的享乐主义，也因此声名狼籍。最终导致了自己被阴阳师所封印的命运。被凯萨解开封印的朱点，打算继续自己酒池肉林的计画与生活，但在她眼前，或许就是将改变她一生的相遇……\n\n『妾身喜欢享乐，随心所欲，想到什么一定会立刻去做，呵呵，是无法忍耐的麻烦女人呢。』`,
        [Locale.en]: `Almost childlike in stature, Shuten is in fact an age-old Oni. A self-confessed extreme hedonist. Ever since her youth she had always exhibited her pleasure-seeking tendencies with terrifying acts of drinking and violence, garnering her a reputation as a total wild child. This led to her eventually being magically sealed away by an Onmyoji. After being released from the seal by Caesar, Shuten plans to continue her debaucherous ways, but perhaps this is an encounter that will change her life forever...\n\n"I enjoy pleasure, following my heart's every desire. Any time I decide I want something, I instantly go get it, hehe. I suppose I'm a troublesome woman, completely lacking in restraint."`,
        [Locale.jp]: `見た目の幼い伊吹朱点は、成人になって久しい鬼人族だ。極端な極楽主義者として。若いころから暴力と酒で気晴らしをしていたことで有名だ。そして最後には陰陽師に封印される運命となった。シーザーによって封印から解かれた伊吹朱点は、再び酒池肉林の生活を送ろうと考えた。しかし今、彼女の運命を変える出来事に遭遇したのであった……\n\n『思いついたらすぐに行動して、ありのままの今を楽しむ。それが私の生き方よ。フフッ、じっとしていられない女って面倒でしょ？』`,
        [Locale.kr]: `어려보이는 이부키 슈텐, 사실 성년 오니족이 된 지 이미 한참이나 되었으며 극단적인 향락주의자이다. 젊었을 때부터 폭력과 음주를 통해 온갖 쾌락을 누리곤 했다. 결국 이런 이유로 그녀에 대한 안 좋은 평판이 만연하게 됐고 음양사에게 봉인당하고 말았다. 시저에 의해 봉인에서 풀려난 이부키 슈텐이 다시 주지육림의 생활을 보내려 하지만...... 어쩌면 시저와의 만남이 그녀에게 인생을 바꾸는 계기가 될지도......\n\n『하고 싶은 건 반드시 해야만 직성이 풀리지. 참는 건 딱 질색이랄까~』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/10/13",
    essence: UnitEssence[UnitCode.ibuki],
    thumbnail: UnitEssence[UnitCode.ibuki],
    selection: UnitSelection[UnitCode.ibuki],
    clothes: UnitFullImage[UnitCode.ibuki],
    tagList: [ 
        TagID.ELEMENT_FIRE,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_FLAT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_DAMAGE_OUTPUT,
     ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}