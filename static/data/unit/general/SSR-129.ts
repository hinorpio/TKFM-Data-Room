import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10158: Unit = {
    ID: "10158",
    metaCode: "x_britney",
    prefix: {
        [Locale.tc]: "聖夜奇謀",
        [Locale.sc]: "圣夜奇谋",
        [Locale.en]: "Conspirator",
        [Locale.jp]: "聖夜の奇策",
        [Locale.kr]: "크리스마스의 기책"
    },
    name: {
        [Locale.tc]: "布蘭妮",
        [Locale.sc]: "布兰妮",
        [Locale.en]: "Britney",
        [Locale.jp]: "ブリトニー",
        [Locale.kr]: "브리트니"
    },
    abbreviation: {
        [Locale.tc]: [ "誕軍", "性軍", "聖軍" ],
        [Locale.sc]: [ "诞军", "性军", "圣军" ],
        [Locale.en]: [ "X.Britney", "C.Britney" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "크브리" ]
    },
    background: {
        [Locale.tc]: `對天才軍師布蘭妮而言，所謂的節慶不過就是藉機放假的理由。所以每逢過節假日，要怎麼好好利用自己的閒暇時光，就變成了布蘭妮最重要的課題……前提是自己沒有被某些節日狂熱的不速之客打擾。原本布蘭妮是一點都不想和那些聖誕黑幫扯上關係的，但因為對方的態度實在太過「誠懇」和「熱情」，以至於她實在沒辦法，只能答應為他們出謀劃策。不過…雖然一開始的確是出於非自願，但在發現自己對立面的人，竟然是那個一直和自己不對盤的魔王巴爾之後，布蘭妮發現事情似乎變得有趣起來了。天才軍師與狡詐魔王，各自藉著聖誕與性誕的名義，準備上演一場史詩級別的勾心鬥角。\n\n『根據本天才的計算，復興聖誕節的第一步，就要先從大喊聖誕快樂開始～』`,
        [Locale.sc]: `对天才军师布兰妮而言，所谓的节庆不过就是藉机放假的理由。所以每逢过节假日，要怎麽好好利用自己的闲暇时光，就变成了布兰妮最重要的课题……前提是自己没有被某些节日狂热的不速之客打扰。原本布兰妮是一点都不想和那些圣诞黑帮扯上关係的，但因为对方的态度实在太过「诚恳」和「热情」，以至于她实在没办法，只能答应为他们出谋划策。不过…虽然一开始的确是出于非自愿，但在发现自己对立面的人，竟然是那个一直和自己不对盘的魔王巴尔之后，布兰妮发现事情似乎变得有趣起来了。天才军师与狡诈魔王，各自藉着圣诞与性诞的名义，准备上演一场史诗级别的勾心斗角。\n\n『根据本天才的计算，復兴圣诞节的第一步，就要先从大喊圣诞快乐开始～』`,
        [Locale.en]: `For the brilliant strategist Britney, the so-called holidays are merely an excuse to take a break from the mundane. Each festive season, the question of how to make the most of her leisure time becomes her most pressing concern—provided, of course, that she isn't disturbed by certain overly enthusiastic holiday revelers. Initially, Brittany has no desire to entangle herself with the Christmas mafia, but the earnestness and fervor of her would-be collaborators are impossible to resist, so she reluctantly finds herself agreeing to devise strategies for them. However, as fate would have it, upon discovering that her adversary is none other than the infuriating Archdemon Ba'al, she realizes that things are about to get interesting. What ensues is a grand duel of wits between the genius tactician and the cunning demon lord, both preparing to engage in a battle of intrigue under the guise of Christmas and Sexmas.\n\n"According to my calculations, the first step to reviving Christmas is to start with a resounding shout of 'Merry Christmas!'"`,
        [Locale.jp]: `天才軍師ブリトニーにとって、祭日とは単なる休暇の口実に過ぎない。そのため、休日をいかに有意義に過ごすかが彼女の重要課題となっている……祭日に憑り付かれた厄介な来客に邪魔されないことが前提だが。彼女は元々、クリスマスのヤクザとは関わり合いたくなかったのだが、あまりにも「誠意」と「情熱」のこもった態度を見せられ、策を授けることを承諾せざるを得なくなってしまった。しかし……最初こそ不本意だったものの、対立する相手があの因縁の魔王バルと知り、事態は面白い方向に向かい始めた。天才軍師と狡猾な魔王が、クリスマスとセックスマスを名目に、壮大な駆け引きを繰り広げようとしている。\n\n『天才の私の計算によると、クリスマス復興の第一歩は、大きな声でメリークリスマスと叫ぶこと！』`,
        [Locale.kr]: `천재 군사 브리트니에게 축제라는 것은 그저 휴가를 위한 핑계일 뿐이다. 그래서 명절 휴일이 다가올 때마다, 자신의 여유로운 시간을 어떻게 잘 활용할 것인지가 브리트니에게 가장 중요한 과제가 되곤 한다... 물론 어디까지나 예상치 못한 명절 불청객들이 나타나 그녀를 방해하지 않는다는 전제 하에서. 원래 브리트니는  크리스마스 갱단들과 얽히고 싶은 생각이 조금도 없었다. 하지만 그들의 지나친 「성실함」과 「열정」으로 인해 어쩔 수 없이 그들을 위한 책략을 짜주기로 약속하게 됐다. 처음엔 마지못해 시작한 일이었지만, 자신의 상대가 늘 티격태격하던 마왕 바알이라는 사실을 알게 된 순간, 브리트니는 이번 일에 흥미를 느끼기 시작했다. 천재 군사와 교활한 마왕, 크리스마스와 섹스마스의 명분을 위해 서로를 겨냥한 역사에 남을 두뇌 싸움이 이제 곧 벌어지려 한다.\n\n『이 천재의 계산에 따르면, 크리스마스 부흥의 첫걸음은 바로 큰 소리로 외치는 크리스마스 축하 인사로부터 시작된다는 말씀~』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2024/12/11",
    essence: UnitEssence[UnitCode.x_britney],
    thumbnail: UnitEssence[UnitCode.x_britney],
    selection: UnitSelection[UnitCode.x_britney],
    clothes: UnitFullImage[UnitCode.x_britney],
    tagList: [],
    otherVersion: [ UnitCode.britney, UnitCode.h_britney, UnitCode.m_britney ],
    puzzle: [ PuzzleCode.EVENT_2024_XMAS_1 ],
    skillSet: []
}