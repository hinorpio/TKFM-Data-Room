import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10061: Unit = {
    ID: "10061",
    metaCode: "teresa",
    prefix: {
        [Locale.tc]: "地方媽媽",
        [Locale.sc]: "地方妈妈",
        [Locale.en]: "Local Housewife",
        [Locale.jp]: "団地妻",
        [Locale.kr]: "단지처"
    },
    name: {
        [Locale.tc]: "提爾絲",
        [Locale.sc]: "提尔丝",
        [Locale.en]: "Teresa",
        [Locale.jp]: "ティアス",
        [Locale.kr]: "티아스"
    },
    abbreviation: {
        [Locale.tc]: [ "羊媽", "媽媽" ],
        [Locale.sc]: [ "羊妈", "妈妈" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `地方上的好媽媽，提爾絲。料理一流、對人和善、被街坊鄰居們喜愛的地方女仕。提爾絲她已經是七個孩子的媽媽了，不過因為孩子們都外出工作，所以如今一個人獨自住在屋子裏面，略顯寂寞。雖然被暱稱為"羊媽"，但是提爾絲不是山羊，而是薩提爾一族。而薩提爾一族可是以超下流的享樂主義種族聞名……也難怪她會是七個孩子的媽了。\n\n『想不想和阿姨玩個『小遊戲』呢？』`,
        [Locale.sc]: `地方上的好妈妈，提尔丝。料理一流、对人和善、被街访邻居们喜爱的地方女仕。提尔丝她已经是七个孩子的妈妈了，不过因为孩子们都外出工作，所以如今一个人独自住在屋子里面，略显寂寞。虽然被昵称为"羊妈"，但是提尔丝不是山羊，而是萨提尔一族。而萨提尔一族可是以超下流的享乐主义种族闻名……也难怪她会是七个孩子的妈了。\n\n『想不想和阿姨玩个『小游戏』呢？』`,
        [Locale.en]: `Teresa, just your average local housewife! Her cooking is second to none. Just ask the local residents, they all love stopping over at her flat for a bite! Teresa is actually a mother of seven! But, since they've all already left the nest, she's all alone in her house now, and it's gets a bit lonely... Although she's been nicknamed the 'Horny Housewife', Teresa isn't a goat, she's actually a satyr. And satyrs, of course, are known for being incredibly pervy... No wonder she's already had seven kids!\n\n"Maaah!? Come have a taste of my sweet pie~"`,
        [Locale.jp]: `近所にいる優しい団地妻、ティアス。料理が上手で誰にでも優しいため、近所の人に愛されている。７人の子供を持つ母親だが、子供は皆出稼ぎに行っているため、今は一人で暮らしており、時折寂しそうにしている。「ヤギママ」と呼ばれているが、ティアスはヤギではなくサテュロス族の一員だ。そんなサテュロス族は普段の娯楽が下品だとして有名なのである。……どうりで７人も子供がいるわけだ。\n\n『おばさんと『たのしいこと』しない？』`,
        [Locale.kr]: `모두의 엄마, 티아스. 요리도 잘하고 누구에게나 상냥한 티아스는 모든 이웃의 사랑을 받고 있는 단지처. 비록 7명의 자식이 있지만 일 때문에 모두 외지에서 생활하므로 집에 혼자 남은 티아스는 늘 쓸쓸해 보인다. "양엄마"라고 불리지만 티아스는 산양족이 아닌 사티로스족. 사티로스족은 향락주의로 유명한 일족이다...... 따라서 타이스가 자식이 7명이나 있다는 것도 전혀 놀라운 일이 아니다.\n\n『이모랑 같이 재밌는『놀이』하지 않을래?』`
    },
    rarity: Rarity.SR,
    element: Element.FIRE,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2021/09/08",
    essence: UnitEssence[UnitCode.teresa],
    thumbnail: UnitEssence[UnitCode.teresa],
    selection: UnitSelection[UnitCode.teresa],
    clothes: UnitFullImage[UnitCode.teresa],
    tagList: [], 
    otherVersion: [],
    puzzle: [],
    outfits: [],
    skillSet: []
}