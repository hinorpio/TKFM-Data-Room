import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10194: Unit = {
    ID: "10194",
    metaCode: "b_aiko",
    prefix: {
        [Locale.tc]: "花嫁",
        [Locale.sc]: "花嫁",
        [Locale.en]: "Bride",
        [Locale.jp]: "花嫁",
        [Locale.kr]: "새신부"
    },
    name: {
        [Locale.tc]: "艾可",
        [Locale.sc]: "艾可",
        [Locale.en]: "Aiko",
        [Locale.jp]: "アイカ",
        [Locale.kr]: "아이카"
    },
    abbreviation: {
        [Locale.tc]: [ "花艾" ],
        [Locale.sc]: [ "花艾" ],
        [Locale.en]: [ "B.Aiko" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "신이카" ]
    },
    background: {
        [Locale.tc]: `愛是陪伴，是服侍，是將世界上最美好的事物通通奉獻給愛慕的那個人。儘管女僕之道並不鼓勵對主人懷抱過多的非分之想，更不支持「結婚」這項脫離女僕身分的行為。但在艾蜜莉與背後諸多人員的努力下，她們還是成功說服艾可穿上婚紗，參與這場決定誰是第一新娘的盛大比試。為了報答在那個雪夜對自己伸出手的他，艾可曾發誓要將自身的一切乃至性命，毫無保留地奉獻出去。而這一次，身為女僕的艾可，選擇為了主人披上白紗。在充滿眾多競爭者的新娘決鬥中，艾可必將拿下最後的勝利，以證她對主人的愛意與忠誠。\n\n『凱薩大人，這件用來與您相許的白紗，艾可就算是死也不會讓它染上任何髒污！』`,
        [Locale.sc]: `爱是陪伴，是服侍，是将世界上最美好的事物通通奉献给爱慕的那个人。儘管女僕之道并不鼓励对主人怀抱过多的非分之想，更不支持「结婚」这项脱离女僕身分的行为。但在艾蜜莉与背后诸多人员的努力下，她们还是成功说服艾可穿上婚纱，参与这场决定谁是第一新娘的盛大比试。为了报答在那个雪夜对自己伸出手的他，艾可曾发誓要将自身的一切乃至性命，毫无保留地奉献出去。而这一次，身为女僕的艾可，选择为了主人披上白纱。在充满众多竞争者的新娘决斗中，艾可必将拿下最后的胜利，以证她对主人的爱意与忠诚。\n\n『凯萨大人，这件用来与您相许的白纱，艾可就算是死也不会让它染上任何髒汙！』`,
        [Locale.en]: `Love is companionship, service, and offering every wonderful thing in the world to the one you adore. Though the path of a maid doesn't encourage harboring excessive improper thoughts toward one's master, nor does it support the act of "marriage" that would remove one from maid status. Yet through Emily's efforts and the support of many behind the scenes, they successfully convinced Aiko to wear a wedding dress and join this grand contest to decide who is the number one bride. To repay the one who reached out to her on that snowy night, Aiko once swore to offer everything she has—even her life—without reservation. And this time, as a maid, Aiko chooses to don the white veil for her master. In this bride duel filled with so many rivals, Aiko will surely claim the final victory, proving her love and loyalty to her master.\n\n"Master Caesar, this white veil I wear to pledge myself to you! I will never let it be stained by any filth, even if it costs me my life!"`,
        [Locale.jp]: `愛とは寄り添いであり、奉仕であり、世界で最も美しいものすべてを、慕うその人に捧げることである。たとえメイド道が、主人に対して過度な私情を抱くことを良しとせず、ましてやメイドの職務を逸脱する「結婚」という行為を推奨していないとしてもだ。エミリー、そしてその背後にいる多くの人々の努力によって、ついにアイカの説得に成功した。彼女はウェディングドレスに身を包み、世界一の花嫁を決めるこの盛大な武道会に参加することにしたのだ。あの雪の夜、自分に手を差し伸べてくれた彼への報いとして、アイカは誓った。自らのすべて、命さえも、何ひとつ惜しまず捧げると。そして今回、メイドであるアイカは、ご主人様のために白いベールを纏うと決めた。数多くの競争相手がひしめく中で、アイカは必ずや最後の勝利をつかみ取り、ご主人様への愛と忠誠を証明する。\n\n『シーザー様に誓いを立てたこの純白のウェディングドレス、死んでもシミ一つつけません！』`,
        [Locale.kr]: `사랑이란 동행, 섬김, 그리고 세상에서 가장 아름다운 것들을 사랑하는 이에게 모두 바치는 것. 주인에게 과한 사심을 품지 않고 「결혼」이라는 행위 자체가 메이드라는 신분에게 주제넘은 사치라고 메이드의 도리는 말한다. 하지만 에밀리와 배후의 수많은 조력자들의 노력 아래, 그들은 아이카가 웨딩드레스를 입고 누가 최강의 신부인지 겨루는 성대한 대회에 참가할 것을 설득하는 데 성공한다. 눈 내리는 그날 밤, 자신에게 손을 내밀어 준 그에게 보답하기 위해 아이카는 자신의 목숨까지 아낌없이 그에게 바치겠다고 맹세했다. 그리고 이번엔 메이드로서 자신의 주인을 위해 순백의 베일을 쓰기로 했다. 수많은 경쟁자가 가득한 결투 속에서, 아이카는 반드시 최후의 승리를 거머쥐어 자신의 주인을 향한 사랑과 충성을 증명할 것이다. \n\n『시저 님, 당신과 연을 맺기 위해 입은 이 베일는 죽는 한이 있더라도 절대 더럽히지 않을 거예요!』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/02/04",
    essence: UnitEssence[UnitCode.b_aiko],
    thumbnail: UnitEssence[UnitCode.b_aiko],
    selection: UnitSelection[UnitCode.b_aiko],
    clothes: UnitFullImage[UnitCode.b_aiko],
    tagList: [],
    otherVersion: [ UnitCode.aiko, UnitCode.x_aiko, UnitCode.xx_aiko, UnitCode.s_aiko, UnitCode.p_aiko ],
    initHP: 3440,
    initATK: 1073.6,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.b_aiko],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}