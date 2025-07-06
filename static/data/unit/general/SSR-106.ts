import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10136: Unit = {
    ID: "10136",
    metaCode: "angelina",
    prefix: {
        [Locale.tc]: "賞金獵人",
        [Locale.sc]: "赏金猎人",
        [Locale.en]: "Bounty Hunter",
        [Locale.jp]: "賞金ハンター",
        [Locale.kr]: "현상금 사냥꾼"
    },
    name: {
        [Locale.tc]: "安潔娜爾",
        [Locale.sc]: "安洁娜尔",
        [Locale.en]: "Angelina",
        [Locale.jp]: "アンジェラ",
        [Locale.kr]: "안젤라"
    },
    abbreviation: {
        [Locale.tc]: [ "雪豹" ],
        [Locale.sc]: [ "雪豹" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `安潔娜爾是一名老練的賞金獵人，雖說是賞金獵人，但她其實什麼任務都接，並不只侷限於懸賞委託。從捕捉寵物到登山導遊，只要是可以賺錢的委託，她都會毫不猶豫地攬下。她喜歡賺錢，也十分嚮往數錢數到手軟的富裕生活。因此安潔娜爾每天都勤奮的接取各種委託，為了過上理想中的富豪生活而努力工作著。\n\n『服務品質和價格是對等的，因此我的委託費用可是很高的唷。』`,
        [Locale.sc]: `安洁娜尔是一名老练的赏金猎人，虽说是赏金猎人，但她其实什么任务都接，并不只局限于悬赏委托。从捕捉宠物到登山导游，只要是可以赚钱的委托，她都会毫不犹豫地揽下。她喜欢赚钱，也十分向往数钱数到手软的富裕生活。因此安洁娜尔每天都勤奋的接取各种委托，为了过上理想中的富豪生活而努力工作着。\n\n『服务品质和价格是对等的，因此我的委托费用可是很高的唷。』`,
        [Locale.en]: `Despite being a highly experienced bounty hunter, Angelina is partial to accepting all sorts of tasks, even if there isn't a bounty involved. From capturing pets to serving as a mountain guide, if there's money being paid, she is interested. Money is her passion, longing for that rich life where she counts money until she drops. For this reason, Angelina accepts various commissions per day and works hard to finally reach that lifelong dream.\n\n"Prices are supposed to reflect quality of service, so my rates are sky-high, baby."`,
        [Locale.jp]: `アンジェラは熟練の賞金ハンター。賞金ハンターとはいえ、実際は賞金稼ぎに限らずどんな依頼でも受け入れている。ペットを見つけたり、登山ガイドをしたりと、お金になる依頼は絶対に見逃さないのだ。お金を稼ぐことが大好きな彼女は、お金が有り余る裕福な生活を夢見ている。だからこそアンジェラは毎日懸命にさまざまな仕事をこなし、理想の生活を実現するために努力しているのだ。\n\n『サービスの品質と価格は比例するの。だから私の仕事の報酬はとっても高いのよ』`,
        [Locale.kr]: `안젤라는 노련한 현상금 사냥꾼이지만 사실 그녀는 어떤 의뢰든 모두 받아들여 수행하고 있다. 반려동물 포획부터 등산 가이드까지 돈이 되는 것이라면 닥치는 대로 의뢰를 받아낸다. 그녀는 돈을 버는 일을 무척이나 좋아하고 부유층의 생활을 무척이나 동경해왔다. 그래서 안젤라는 오늘도 각종 의뢰를 받아 자신이 원하는 부자의 삶을 누리기 위해 열심히 일하는 중이다.\n\n『서비스의 품질은 가격에 비례하지. 따라서 내가 청구할 의뢰 비용은 상당히 높다고?』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/03/06",
    essence: UnitEssence[UnitCode.angelina],
    thumbnail: UnitEssence[UnitCode.angelina],
    selection: UnitSelection[UnitCode.angelina],
    clothes: UnitFullImage[UnitCode.angelina],
    tagList: [],
    otherVersion: [],
    initHP: 3924.798230198168,
    initATK: 897.5999354562783,
    puzzle: [],
    outfits: [],
    skillSet: []
}