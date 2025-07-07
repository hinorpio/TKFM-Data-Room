import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10020: Unit = {
    ID: "10020",
    metaCode: "muila",
    prefix: {
        [Locale.tc]: "未來勇者",
        [Locale.sc]: "未来勇者",
        [Locale.en]: "Future Hero",
        [Locale.jp]: "未来の勇者",
        [Locale.kr]: "미래의 용자"
    },
    name: {
        [Locale.tc]: "牧愛菈",
        [Locale.sc]: "牧爱菈",
        [Locale.en]: "Muila",
        [Locale.jp]: "マイラ",
        [Locale.kr]: "무엘라"
    },
    abbreviation: {
        [Locale.tc]: [ "未勇" ],
        [Locale.sc]: [ "未勇" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `被法斯帝國勇者召喚儀式召喚過來的「未來勇者」。雖然被稱作勇者，但本身並沒有高尚的精神，只是感興趣的研究正好符合大部分人類的需求。厭惡與人接觸，也不打算救世，只提供了法斯帝國最低限度的協助以換取研究素材和維持生活的必要物資。就算被迫出戰，依然是敷衍了事，在被俘虜後爽快的投降了魔族。\n\n『讓你看看…我的發明吧…呼嘿嘿嘿！』`,
        [Locale.sc]: `被法斯帝国勇者召唤仪式召唤过来的「未来勇者」。虽然被称作勇者，但本身并没有高尚的精神，只是感兴趣的研究正好符合大部分人类的需求。厌恶与人接触，也不打算救世，只提供了法斯帝国最低限度的协助以换取研究素材和维持生活的必要物资。就算被迫出战，依然是敷衍了事，在被俘虏后爽快的投降了魔族。\n\n『让你看看…我的发明吧…呼嘿嘿嘿！』`,
        [Locale.en]: `A future "hero" summoned by the Phasi Emperor to aid his failing empire. Even though she's been called a "hero", Muila is really just a conniving inventor who ended up caught in the summoning ceremony's crossfire. Despising any contact with humans, Muila agrees to create some rudimentary battle automatons for the Phasi Empire in exchange for resources, which she uses for her own research. Pledging loyalty to no one, Muila has no qualms with surrendering to the demons once her time with the Phasi empire comes to an explosive end.\n\n"Say hello to my newest, gehe... invention! Muhuh...!"`,
        [Locale.jp]: `フォス帝国の勇者召喚の儀式で召喚された「未来の勇者」。勇者と呼ばれているがそのような気持ちはなく、ただ興味があった研究がちょうど大半の人類が欲しているものだった。人とかかわるのが大嫌いで、世界を救おうとも考えていない。フォス帝国に最低限の協力をし、研究のための素材と生活に必要な物資を得ている。戦争に駆り出されたときも適当にあしらい、捕虜として捕らえられた際には快く魔族に降参した。\n\n『私の発明を…見せてあげる…クックック！』`,
        [Locale.kr]: `파스제국 용자의 소환술에 의해 소환된 「미래의 용자」. 비록 용자로 불리긴 하나 그에 걸맞은 훌륭한 의식을 지닌 건 아니다. 다만 자신이 좋아하는 연구가 대부분 인류가 가진 수요와 부합할 뿐. 사람과 접촉하는 것을 꺼리며 세상을 구할 생각도 없다. 파스제국에는 최소한으로만 협조하고 있으며 이를 통해 연구 소재 및 기본적인 생활을 영위할 수 있도록 지원을 받는다. 강제로 전쟁에 차출되었으나 여전히 건성한 태도로 일관했으며 포로로 붙잡힌 후에는 마족에게 바로 항복했다.\n\n『보여주지... 나의 발명을... 후후... 후흐흐!』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/03/16",
    essence: UnitEssence[UnitCode.muila],
    thumbnail: UnitEssence[UnitCode.muila],
    selection: UnitSelection[UnitCode.muila],
    clothes: UnitFullImage[UnitCode.muila],
    tagList: [
        TagID.ELEMENT_WIND,
        TagID.POSITION_OBSTRUCTER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_SUPPORT,
        TagID.OTHER_WEAKEN,
    ],
    otherVersion: [ UnitCode.x_muila ],
    initHP: 3305.6,
    initATK: 968,
    puzzle: [],
    outfits: [],
    skillSet: []
}