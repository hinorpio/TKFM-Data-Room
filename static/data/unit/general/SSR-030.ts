import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10059: Unit = {
    ID: "10059",
    metaCode: "inori",
    prefix: {
        [Locale.tc]: "音速魅影",
        [Locale.sc]: "音速魅影",
        [Locale.en]: "Supersonic Phantom",
        [Locale.jp]: "ソニックファントム",
        [Locale.kr]: "소닉 팬텀"
    },
    name: {
        [Locale.tc]: "祈",
        [Locale.sc]: "祈",
        [Locale.en]: "Inori",
        [Locale.jp]: "いのり",
        [Locale.kr]: "이노리"
    },
    abbreviation: {
        [Locale.tc]: [ "馬娘" ],
        [Locale.sc]: [ "马娘" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `二足人馬是近代歷史中才從半人馬演化而來的新興種族。雖然同為人馬，但是二足人馬外型酷似人類，純論敏捷及力量都遜於人馬，因此一直以來都被半人馬族所歧視。在困苦環境下成長的祈雖然溫文有禮，但心中卻深埋著對半人馬的不滿。為了反抗半人馬族對二足人馬的苛待，祈戴上面具，化身為怪盜專門竊取剝削二足人馬的惡德半人馬，並用盜來的寶物換錢接濟他人。祈平時喜歡編織綺麗服飾給自己，作為二足人馬的她夢想有一日能穿上神聖的儀裝，參與半人馬族4年一度的賽跑祭祀。\n\n『不管是作為祈還是怪盜，又或者是二足人馬，我都會不斷的奔跑下去。』`,
        [Locale.sc]: `二足人马是近代历史中才从半人马演化而来的新兴种族。虽然同为人马，但是二足人马外型酷似人类，纯论敏捷及力量都逊于人马，因此一直以来都被半人马族所歧视。在困苦环境下成长的祈虽然温文有礼，但心中却深埋着对半人马的不满。为了反抗半人马族对二足人马的苛待，祈戴上面具，化身为怪盗专门窃取剥削二足人马的恶德半人马，并用盗来的宝物换钱接济他人。祈平时喜欢编织绮丽服饰给自己，作为二足人马的她梦想有一日能穿上神圣的仪装，参与半人马族4年一度的赛跑祭祀。\n\n『不管是作为祈还是怪盗，又或者是二足人马，我都会不断的奔跑下去。』`,
        [Locale.en]: `Two-legged centaurs are a relatively recent evolution of traditional four-legged centaurs. Although classed as centaurs, the two-legged varieties bear a striking resemblance to humans. Four-legged centaurs have long looked down on the two-legged breeds due to their inferior power and agility. Despite possessing poise and grace, Inori, having grown up in a harsh environment, harbors a deep resentment towards four-legged centaurs. In order to fight back against their cruel treatment, Inori decided to don a mask and become a thief, stealing from the most wicked of the centaurs and using the stolen goods to raise money for the poor. Inori enjoys making her own clothes and her dream is to one day wear sacred ceremonial attire and participate in the Centaurathon, a race held every four years.\n\n"No matter whether as Inori or a thief, or even just as a two-legged centaur, I will never stop galloping onwards."`,
        [Locale.jp]: `二足ケンタウロスは近代以降ケンタウロスより進化した新興種族である。種族はケンタウロスに分類されるが、二足ケンタウロスの外見は人類に酷似しており、俊敏性やパワーなどがケンタウロスに劣るため、長い間ケンタウロス族から差別されてきた。過酷な環境で成長したいのりは穏やかで礼儀正しい性格だが、内心ではケンタウロスに対する強い不満を募らせている。二足ケンタウロスを不当に扱うケンタウロスに反抗するべく、いのりはマスクを着け、二足ケンタウロスから搾取する悪徳ケンタウロスだけを狙う怪盗となって、盗んだ宝物を金に換えて貧乏人に分け与えている。普段のいのりは自分が着る洋服を作るのが趣味。二足ケンタウロスである彼女の夢はいつか神聖な礼服を身に着け、ケンタウロス族が4年に1度執り行う競走の祭典に参加することである。\n\n『いのりとして、怪盗として、そして二足ケンタウロスとして、私は走り続ける！』`,
        [Locale.kr]: `이족 켄타우로스는 켄타우로스로부터 진화한 신흥 종족이다. 비록 동족이지만 이족의 외모는 인간에 더 가깝고 민첩성과 힘 방면에서 순수 혈통의 켄타로우스에게 한참 밀린다. 이런 연유로 순혈 켄타우로스족은 차별을 내세우곤 한다. 어려운 환경에서 성장한 이노리. 점잖고 예의 바른 성격이지만 켄타우로스족에 대한 불만이 가슴 깊이 심어져 있었다. 켄타우로스의 차별에 저항하기 위해 가면을 쓰기 시작한 이노리. 괴도의 신분으로 이족 켄타로우스를 노예처럼 부려먹는 악덕 켄타로우스 상인의 재물을 훔쳐 가난한 자들에게 몰래 나누어주곤 한다. 평소 취미는 화려한 옷 만들기. 이족인 그녀의 꿈은 자신이 만든 신성한 의복을 입고 4년에 한 번 열리는 켄타로우스 경마 대회에 첨여하는 것.\n\n『이노리로서, 괴도로서 그리고 이족 켄타우로스로서, 난 멈추지 않고 달릴 거야!』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/11/17",
    essence: UnitEssence[UnitCode.inori],
    thumbnail: UnitEssence[UnitCode.inori],
    selection: UnitSelection[UnitCode.inori],
    clothes: UnitFullImage[UnitCode.inori],
    tagList: [
        TagID.ELEMENT_WIND,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_DAMAGE_OUTPUT,
    ],
    otherVersion: [],
    puzzle: [],
    outfits: [],
    skillSet: []
}