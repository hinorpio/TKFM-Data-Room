import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10813: Unit = {
    ID: "10813",
    metaCode: "iyan",
    prefix: {
        [Locale.tc]: "白薔薇",
        [Locale.sc]: "白蔷薇",
        [Locale.en]: "White Rose",
        [Locale.jp]: "白いバラ",
        [Locale.kr]: "화이트 로즈"
    },
    name: {
        [Locale.tc]: "伊艾",
        [Locale.sc]: "伊艾",
        [Locale.en]: "Iyan",
        [Locale.jp]: "イア",
        [Locale.kr]: "이아"
    },
    abbreviation: {
        [Locale.tc]: [ "偽娘" ],
        [Locale.sc]: [ "伪娘" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `從言行舉止上來看，伊艾怎麼看都是個女孩子，而且比女孩子更像女孩子。但他是男的。纖纖細腰胸脯小巧，身嬌體柔極易推倒。但他是男的。穿起迷你裙和洋裝非常可愛也非常合身。但他是男的。對伊艾來說，穿著可愛的服裝不僅是興趣，同時也是最厲害的武器。伊艾的臉上始終掛著治癒的微笑，而且他的態度溫和乖巧，總能讓人在不知不覺間對其百依百順。即便偶爾會露出不符外貌的狡詐表情與陰險的一面，他之後裝出的無辜神情，卻又讓人無法對其認真生氣。熟知自己優勢的伊艾，利用自己的外貌從他人那取得了不少好處。至少迄今為止，還沒有人能夠不拜倒在伊艾那魅惑的笑容之下。\n\n『呵呵～拜倒在人家的魅力之下吧～』`,
        [Locale.sc]: `从言行举止上来看，伊艾怎么看都是个女孩子，而且比女孩子更像女孩子。但他是男的。纤纤细腰胸脯小巧，身娇体柔极易推倒。但他是男的。穿起迷你裙和洋装非常可爱也非常合身。但他是男的。对伊艾来说，穿着可爱的服装不仅是兴趣，同时也是最厉害的武器。伊艾的脸上始终挂着治愈的微笑，而且他的态度温和乖巧，总能让人在不知不觉间对其百依百顺。即便偶尔会露出不符外貌的狡诈表情与阴险的一面，他之后装出的无辜神情，却又让人无法对其认真生气。熟知自己优势的伊艾，利用自己的外貌从他人那取得了不少好处。至少迄今为止，还没有人能够不拜倒在伊艾那魅惑的笑容之下。\n\n『呵呵～拜倒在人家的魅力之下吧～』`,
        [Locale.en]: `From speech to style, Iyan is as girly as girl can be. Heck, even more of a girl than most girls! But he's a boy. A svelte, slim waist and fine, soft breasts… But he's a boy. A tight mini skirt and legs that go all the way up… But he's a boy. Iyan isn't just into wearing women's clothes because it makes him feel good - it's also his secret weapon! A warm smile on his face, calm and caring, with a twiddle of his eyelashes Iyan can get anything he wants. Even though he can be a bit too mischievous for his own good, an innocent smile and a sullen frown will get even the most cold-hearted heathen to forgive him. That's right - Iyan knows how to use his feminine side to his exact advantage. In fact, no one has ever not been absolutely charmed and seduced by Iyan's winning smile.\n\n"Like my smile? Then bow before me, hehe~"`,
        [Locale.jp]: `どこからどう見ても女の子。女の子よりも女の子らしい女の子。だが男だ。くびれた腰とふっくらした胸。小さなカラダは押し倒すのが簡単そう。だが男だ。可愛いミニスカートとお洋服が、とってもキュートで似合っている。だが男だ。イアにとって可愛い服を着るのはただの趣味でありながら、最強の武器でもある。常に癒し系の微笑みを浮かべていて物腰柔らかであるため、誰もがいつの間にかイアの言いなりになってしまうのだ。時々見た目とギャップのある陰険な一面を見せるが、その可愛くて無垢な姿に誰も怒ることができない。自分の利点を知っているイアは、自分の見た目をうまい具合に利用するのだ。これまでイアの魅力あふれる笑顔に負けなかった者はいないという。\n\n『フフッ、僕の魅力にひれ伏せ！』`,
        [Locale.kr]: `이아는 어떻게 봐도 여자처럼 보인다. 오히려 여자보다 더 여자 같다고나 할까? 하지만 이아는 남자다. 잘록한 허리와 아담한 가슴, 그리고 가녀린 몸매를 보면 금방이라도 넘어질 것만 같다. 하지만 이아는 남자다. 미니 스커트로 코디한 그녀의 모습은 극강의 귀여움을 보여준다. 하지만 이아는 남자다. 이아에게 있어 귀여운 옷을 입는 일은 단순히 취미를 넘어서 그녀의 무기가 되어주기도 한다. 언제나 보는이로 하여금 마음이 정화되는 듯한 부드러운 미소와 온화한 태도로 다른 이들을 사로잡는다. 때론 설정에 맞지 않는 악독한 표정을 짓거나 독설을 내뱉기도 하지만, 그래도 원체 귀여운 외모 덕분에 아무도 그녀(?)에게 화를 내지 못한다. 이아는 자신의 장점을 명확히 알고 있으며, 이를 적극적으로 활용한다. 지금까지 이아의 미소를 한 번이라도 본 사람은 그 미소에 빠지지 않은 적이 없다.\n\n『후훗, 내 매력에 빠져보라구~』`
    },
    rarity: Rarity.R,
    element: Element.LIGHT,
    position: Position.HEALER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2022/11/16",
    essence: UnitEssence[UnitCode.iyan],
    thumbnail: UnitEssence[UnitCode.iyan],
    selection: UnitSelection[UnitCode.iyan],
    clothes: UnitFullImage[UnitCode.iyan],
    tagList: [
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_HEALER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_SMALL_SIZED,
        TagID.BREAST_FLAT_TITS,
        TagID.OTHER_RECOVERY,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}