import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10111: Unit = {
    ID: "10111",
    metaCode: "d_irene",
    prefix: {
        [Locale.tc]: "背德密醫",
        [Locale.sc]: "背德密医",
        [Locale.en]: "Corrupt Doctor",
        [Locale.jp]: "背徳医師",
        [Locale.kr]: "배덕의 의사"
    },
    name: {
        [Locale.tc]: "艾琳",
        [Locale.sc]: "艾琳",
        [Locale.en]: "Irene",
        [Locale.jp]: "エリン",
        [Locale.kr]: "아이린"
    },
    abbreviation: {
        [Locale.tc]: [ "護琳", "密醫" ],
        [Locale.sc]: [ "护琳", "密医" ],
        [Locale.en]: [ "D.Irene" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "배이린" ]
    },
    background: {
        [Locale.tc]: `雙蛇軍團解散後，艾琳當上了醫生，並與克里斯加入了冒險者公會，成為魔界的居民。為了讓丈夫活下來，她被凱薩逼迫獻出身體。原本一開始只是為了保住克里斯的性命，後來卻被凱薩徹底征服，逐漸沉迷於背德感帶來的刺激之中，由於克里斯無條件的愛與包容，使艾琳變得越來越大膽，不但衣著與性格變得性感與狂野，連行為也變得越來越放蕩。這樣的她，有一天收到了來自魔王城的委託，要幫魔王的後宮們進行健康檢查，憑藉著她的醫療專業，會給眾後宮們檢查出什麼結果呢？\n\n『你說身體很難受？呵呵呵，真是沒辦法，讓我來幫你『治療』吧~』`,
        [Locale.sc]: `双蛇军团解散后，艾琳当上了医生，并与克里斯加入了冒险者公会，成为魔界的居民。为了让丈夫活下来，她被凯萨逼迫献出身体。原本一开始只是为了保住克里斯的性命，后来却被凯萨彻底征服，逐渐沉迷于背德感带来的刺激之中，由于克里斯无条件的爱与包容，使艾琳变得越来越大胆，不但衣着与性格变得性感与狂野，连行为也变得越来越放荡。这样的她，有一天收到了来自魔王城的委托，要帮魔王的后宫们进行健康检查，凭借着她的医疗专业，会给众后宫们检查出什么结果呢？\n\n『你说身体很难受？呵呵呵，真是没办法，让我来帮你『治疗』吧~』`,
        [Locale.en]: `After the dissolution of the Twin Snakes Brigade, Irene took up work as a doctor and joined the Adventurer's Guild with her husband Chris. Soon after, the couple became full-fledged residents of the Demon Realm. However, to save her husband's life, Irene was forced to surrender her body to Caesar. What began as a way to keep Chris alive rapidly became complete subjugation at Caesar's hands. And it wasn't long before Irene became addicted to the thrill of betrayal and deceit. What's more, Chris's unconditional love and extraordinary tolerance only made Irene more audacious. Not only did her personality and clothing become much racier, but so did her behavior. Now she has received an order from the palace, asking her to help with health checks for the members of Caesar's harem. With her extensive medical expertise, what will she discover?\n\n"You say you're in pain? Hehe, I suppose it can't be helped. Let me give you a little 'treatment'~"`,
        [Locale.jp]: `カドゥケウス軍団の解散後、エリンは医者となってクリスと共に冒険者ギルドに加入し、魔界の住民となった。そして夫の命を守るために、シーザーに身体を捧げたのだ。初めはクリスの命を守りたい一心だったが、シーザーに徹底的に征服されると、その背徳感がもたらす刺激に溺れていった。それに加え、クリスの寛大な心と包容力が、エリンを大胆な性格に変化させ、服装や行為までもが次第に大胆かつ淫らなものになっていった。そんな彼女はある日、魔王城の依頼を受けて後宮メンバーの健康診断を手伝うことになった。医学の知識を存分に発揮したい彼女は、後宮メンバーたちにどのような診断を下すのだろうか？\n\n『具合が悪い？フフッ、仕方ないですね。私が『治療』してあげますよ』`,
        [Locale.kr]: `카두케우스 군단의 해체 이후, 아이린은 의사가 되어 크리스와 함께 모험가 길드에 가입하고 마계의 일원이 되었다. 그녀는 남편의 목숨을 살리기 위해 시저에게 자신의 몸을 바치게 되었는데. 본래 크리스의 목숨을 살리기 위해 시작한 일이었지만, 시저에게 완전히 정복당한 후 배덕감이 주는 짜릿함에 흠뻑 빠지게 되었다. 크리스의 무조건적인 사랑과 포용은 아이린을 더욱 대담해지게 만들었고, 옷차림과 성격이 더욱 색기를 띠기 시작하며 행동 또한 방탕해지기에 이르렀다. 그러던 어느 날, 마왕성으로부터 후궁들의 건강검진 의뢰가 들어오게 되었는데... 자신의 본업으로 돌아온 그녀는 과연 후궁들에게 어떤 진단을 내려줄지?\n\n『몸이 불편하시다고요? 후훗, 어쩔 수 없군요. 제가 『치료』해드릴게요~』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/05/10",
    essence: UnitEssence[UnitCode.d_irene],
    thumbnail: UnitEssence[UnitCode.d_irene],
    selection: UnitSelection[UnitCode.d_irene],
    clothes: UnitFullImage[UnitCode.d_irene],
    tagList: [],
    otherVersion: [ UnitCode.irene ],
    initHP: 4000,
    initATK: 881.6,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.d_irene],
    skillSet: []
}