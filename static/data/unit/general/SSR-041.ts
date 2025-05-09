import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10018: Unit = {
    ID: "10018",
    metaCode: "uruta",
    prefix: {
        [Locale.tc]: "古代勇者",
        [Locale.sc]: "古代勇者",
        [Locale.en]: "Ancient Hero",
        [Locale.jp]: "古代の勇者",
        [Locale.kr]: "고대의 용자"
    },
    name: {
        [Locale.tc]: "烏魯塔",
        [Locale.sc]: "乌鲁塔",
        [Locale.en]: "Uruta",
        [Locale.jp]: "ウルタ",
        [Locale.kr]: "울타"
    },
    abbreviation: {
        [Locale.tc]: [ "古勇", "椰子樹" ],
        [Locale.sc]: [ "古勇", "椰子树" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `被法斯帝國勇者召喚儀式召喚過來的「古代勇者」。生活在魔法最強盛，魔族也最為活躍的年代，擁有超越這個時代人類的魔法適性與身體能力。思考方式直線條，缺乏金錢觀，因為是按照自己的邏輯在行動，偶爾讓人覺得她過於天然且難以捉摸。直覺敏銳，發覺到法斯帝國的皇帝心懷不軌後，決定照自己的方式拯救無辜民眾，早早就離開了法斯帝國。\n\n『雖然被稱作勇者，但我也只是做自己覺得正確的事罷了。』`,
        [Locale.sc]: `被法斯帝国勇者召唤仪式召唤过来的「古代勇者」。生活在魔法最强盛，魔族也最为活跃的年代，拥有超越这个时代人类的魔法适性与身体能力。思考方式直线条，缺乏金钱观，因为是按照自己的逻辑在行动，偶尔让人觉得她过于天然且难以捉摸。直觉敏锐，发觉到法斯帝国的皇帝心怀不轨后，决定照自己的方式拯救无辜民众，早早就离开了法斯帝国。\n\n『虽然被称作勇者，但我也只是做自己觉得正确的事罢了。』`,
        [Locale.en]: `An ancient hero summoned by the Phasi Empire. Coming from the time where magic was at its peak, Uruta wields a much stronger magical power than those in Archdemon Caesar's time. Her way of thinking is extremely straightforward to the point where some may call her simpleminded, as Uruta isn't swayed my money or material riches. She has sharp instincts; after realizing the Phasi Emperor is up to no good, she leaves the empire, going out on her own to help those in need.\n\n"They call me a hero, and yet I am merely doing what I think is right."`,
        [Locale.jp]: `フォス帝国の勇者召喚儀式で召喚された「古代の勇者」。魔法の最盛期、魔族の活躍も最高潮だった時代に生まれ、現代の人類を優に超える魔法の適正と身体能力を有している。素直で金銭感覚に乏しい彼女は、自分のロジックに基づいて行動するため、天然だと思われている。直感力に長けておりフォス帝国皇帝の悪だくみに気付くと、自ら罪のない民を救うためにフォス帝国を離れた。\n\n『勇者っていわれるけど、私は正しいと思ったことをしてるだけだよ』`,
        [Locale.kr]: `파스제국 용자 소환술에 의해 소환된 「고대의 용자」. 마법이 가장 강성했고 마족도 가장 번성했던 시대에 살았던 관계로 현시대의 인간을 초월하는 마법 적응력과 신체 능력을 지니고 있다. 직선적인 사고방식을 지녔으며 금전적인 일에는 통 관심이 없다. 오직 자신의 사고방식대로 행동하기 때문에 가끔 다른 사람들에게 지나치게 순진하다 못해 갈피를 잡기 어려운 성격으로 비친다. 그래도 매우 예리한 직감을 가졌으며 파스제국 황제의 음모를 간파한 후 자신의 방식대로 죄 없는 사람들을 구하기 위해 파스제국을 떠나버렸다.\n\n『모두가 날 용자라 부르지만 난 그저 자신이 옳다고 믿는 일을 해 나아갈 뿐이야.』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: false,
    releaseDate: "2022/03/09",
    essence: UnitEssence[UnitCode.uruta],
    thumbnail: UnitEssence[UnitCode.uruta],
    selection: UnitSelection[UnitCode.uruta],
    clothes: UnitFullImage[UnitCode.uruta],
    tagList: [
        TagID.ELEMENT_WIND,
        TagID.POSITION_PROTECTOR,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [],
    puzzle: [],
    outfits: [],
    skillSet: []
}