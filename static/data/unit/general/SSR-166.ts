import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10195: Unit = {
    ID: "10195",
    metaCode: "b_ayane",
    prefix: {
        [Locale.tc]: "花嫁",
        [Locale.sc]: "花嫁",
        [Locale.en]: "Bride",
        [Locale.jp]: "花嫁",
        [Locale.kr]: "새신부"
    },
    name: {
        [Locale.tc]: "神田綾音",
        [Locale.sc]: "神田绫音",
        [Locale.en]: "Ayane",
        [Locale.jp]: "神田綾音",
        [Locale.kr]: "칸다 아야네"
    },
    abbreviation: {
        [Locale.tc]: [ "花勇" ],
        [Locale.sc]: [ "花勇" ],
        [Locale.en]: [ "B.Ayane" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "신야네" ]
    },
    background: {
        [Locale.tc]: `愛是包容，是能夠接納對方的好與不好，並切身處地的為對方著想，這樣才算是愛。曾經的神田綾音，也曾憧憬過要換上白色婚紗，與所愛慕的男人一同步上紅毯，向彼此宣示愛的誓言。不過，在穿越到異世界之後，神田綾音對於結婚這件事的所有遐想和濾鏡就通通消失了。誰叫她喜歡上的…是一個容貌和身體都近乎滿分，但個性卻會讓人打上負分的幼稚男人。儘管對於結婚這件事興致缺缺，但在蘭兒盛情難卻的邀請下，她還是參加了這場主題和目的完全違反常識的大會。神田綾音對凱薩身邊的位置並沒有太大興趣，她之所以會穿上婚紗站在會場中央，純粹就是為了維護自己作為女性的自尊心。\n\n『雖然看起來好像沒有表現得特別高興，但就算是我，多少也會期待自己成為新娘的那一天喔。』`,
        [Locale.sc]: `爱是包容，是能够接纳对方的好与不好，并切身处地的为对方着想，这样才算是爱。曾经的神田绫音，也曾憧憬过要换上白色婚纱，与所爱慕的男人一同步上红毯，向彼此宣示爱的誓言。不过，在穿越到异世界之后，神田绫音对于结婚这件事的所有遐想和滤镜就通通消失了。谁叫她喜欢上的…是一个容貌和身体都近乎满分，但个性却会让人打上负分的幼稚男人。儘管对于结婚这件事兴致缺缺，但在兰儿盛情难却的邀请下，她还是参加了这场主题和目的完全违反常识的大会。神田绫音对凯萨身边的位置并没有太大兴趣，她之所以会穿上婚纱站在会场中央，纯粹就是为了维护自己作为女性的自尊心。\n\n『虽然看起来好像没有表现得特别高兴，但就算是我，多少也会期待自己成为新娘的那一天喔。』`,
        [Locale.en]: `Love is tolerance: accepting both the good and the bad in the other person, and thinking from their perspective with empathy... That's what real love is. Once upon a time, Ayane dreamed of putting on a white wedding dress, walking down the aisle with the man she loved, and exchanging vows of love. But after crossing over to this other world, all her fantasies and rose-tinted filters about marriage vanished completely. Because the one she fell for... is a man whose looks and body are near-perfect, but whose personality is so childish it earns him major negative points. Though she has zero interest in marriage, under Lana's enthusiastic and hard-to-refuse invitation, she still ended up joining this utterly absurd, commonsense-defying event. Ayane isn't particularly attached to securing a place by Caesar's side. The only reason she put on the wedding dress and stood in the center of the venue was purely to preserve her pride as a woman.\n\n"Even though I don't look especially thrilled, even I... have at least a little expectation for the day I might become a bride."`,
        [Locale.jp]: `愛とは包容である。相手の良いところも悪いところも受け入れ、相手の立場に立って真剣に思いやること。それでこそ愛だ。かつての神田綾音もまた、白いウェディングドレスに身を包み、愛する男と並んでバージンロードを歩き、互いに愛の誓いを交わすことに憧れていた。しかし異世界へ来てからは、結婚というものに抱いていた幻想は、すべて跡形もなく消え去ってしまった。なぜなら彼女が恋した相手は……容姿も肉体はほぼ満点である一方、性格だけは大きく×を付けたくなるほど幼稚な男だったからである。結婚そのものにはさほど興味を持てなかったものの、ランの熱い誘いを断りきれず、彼女はテーマも目的も常識から大きく逸脱したこの武道会に参加することとなった。神田綾音は、シーザーの隣の座に特別な執着を抱いているわけではない。彼女がドレスを身に纏い、会場の中央に立っている理由はただ一つ──女性としての自尊心を守るためなのだ。\n\n『あんまり嬉しそうには見えないかもしれないけど、それでも私なりに、花嫁になる日を楽しみにしてるんだ』`,
        [Locale.kr]: `사랑이란 포용. 상대의 장점과 단점 모두를 받아들이고 상대의 입장에서 생각할 줄 아는 것이 곧 진정한 사랑.과거의 칸다 아야네는 순백의 웨딩드레스를 입고 레드카펫을 사랑하는 이와 함께 걸으며, 서로의 사랑을 맹세하는 날을 동경하곤 했다. 하지만 이세계로 건너온 뒤, 품어왔던 결혼에 대한 환상은 모두 철저히 사라지고 말았다. 하필이면 좋아하게 된 상대가... 외모와 몸매는 만점에 가깝지만, 성격은 0점에 가까울 정도로 유치한 남자였기 때문. 결혼이라는 것 자체에는 흥미가 없었으나, 란의 간곡한 요청을 거절하지 못한 탓에 상식을 벗어난 주제와 목적을 지닌 어처구니없는 대회에 참여하게 됐다. 칸다 아야네는 시저의 옆자리에 큰 욕심을 갖고 있진 않았지만, 여성으로서의 자존심을 지키기 위해 웨딩드레스를 입고 경기장 한가운데 서게 되었다. \n\n『겉보기엔 딱히 기뻐 보이지 않을지도 모르지만, 나 역시 신부가 되는 날을 어느 정도는 기대하고 있다고.』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/02/04",
    essence: UnitEssence[UnitCode.b_ayane],
    thumbnail: UnitEssence[UnitCode.b_ayane],
    selection: UnitSelection[UnitCode.b_ayane],
    clothes: UnitFullImage[UnitCode.b_ayane],
    tagList: [],
    otherVersion: [ UnitCode.ayane, UnitCode.s_ayane, UnitCode.h_ayane, UnitCode.bg_ayane, UnitCode.bu_ayane, UnitCode.l_ayane ],
    initHP: 3705.6,
    initATK: 996.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.b_ayane],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}