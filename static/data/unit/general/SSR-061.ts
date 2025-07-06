import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10068: Unit = {
    ID: "10068",
    metaCode: "lotus",
    prefix: {
        [Locale.tc]: "元氣補給",
        [Locale.sc]: "元气补给",
        [Locale.en]: "Health Nut",
        [Locale.jp]: "スタミナ補給",
        [Locale.kr]: "원기 충전"
    },
    name: {
        [Locale.tc]: "蓮",
        [Locale.sc]: "莲",
        [Locale.en]: "Lotus",
        [Locale.jp]: "レン",
        [Locale.kr]: "렌"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `無父無母的蓮從小就在垃圾堆裡翻找食物才得以生存。村裡善心的廚師知道後，將蓮收為徒弟，也提供蓮吃住的地方。蓮因此立下目標，要成為偉大的廚師。多年後，她終於開始了在外闖蕩的生活。決心要在旅程中，用料理拯救更多需要幫助的人！……不過這個目標要先等蓮把自己餵飽再說。\n\n『大家一起享用美味的料理吧～』`,
        [Locale.sc]: `无父无母的莲从小就在垃圾堆里翻找食物才得以生存。村里善心的厨师知道后，将莲收为徒弟，也提供莲吃住的地方。莲因此立下目标，要成为伟大的厨师。多年后，她终于开始了在外闯荡的生活。决心要在旅程中，用料理拯救更多需要帮助的人！……不过这个目标要先等莲把自己喂饱再说。\n\n『大家一起享用美味的料理吧～』`,
        [Locale.en]: `With no mother or father to care for her, Lotus has survived by going through dumpsters ever since she was young. Once the kind-hearted chefs in her village heard about her, they made her their apprentice and gave her a place to stay. Because of them, Lotus's dream is to become a master chef. Many years later, she's finally out to make a life of her own! She's resolved to use her cuisine to help whoever she comes across on her journeys! ...But maybe after dinner, since she's feeling rather peckish now herself.\n\n"Here comes the main course~"`,
        [Locale.jp]: `両親のいないレンは幼い頃からゴミの中の食べ物を食べて生きてきた。村の心優しい料理人はそのことを知って、レンを弟子として引き取り、レンに衣食住を提供したのであった。このことがきっかけで、レンは偉大な料理人を目指すようになる。数年後、彼女はさすらいの旅を始めた。この旅を通じて料理でたくさんの困っている人を救おうとレンは心に決めていた。しかし、まずその前にレンは自身の食事を確保しなければならない……\n\n『みんなで一緒に美味しい料理を食べよう～』`,
        [Locale.kr]: `부모님 없이 자란 렌은 어렸을 때부터 쓰레기 더미에서 버려진 음식을 주워 먹으며 살아왔다. 마을의 한 선량한 요리사는 렌의 딱한 사정을 알게 되어 그녀를 제자로 받아들였고, 먹을 것과 편히 잘 수 있는 곳을 제공해주었다. 그런 요리사의 따뜻한 보살핌 아래 성장한 렌은 자연스럽게 위대한 요리사가 되겠다는 꿈을 가지게 되었다. 몇 년 후, 그녀는 꿈을 이루기 위해 마을을 떠나 세계 각지를 떠돌며 유랑 생활을 시작하였다. 자신의 요리로 도움이 필요한 사람들을 최대한 많이 구하겠다는 다짐을 하면서. ...... 하지만 이 다짐은 우선 그녀가 배불리 먹어 만족했을 때에만 비로소 실행할 수 있는 것이었다.\n\n『다 같이 맛있는 음식을 먹어요~』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/09/29",
    essence: UnitEssence[UnitCode.lotus],
    thumbnail: UnitEssence[UnitCode.lotus],
    selection: UnitSelection[UnitCode.lotus],
    clothes: UnitFullImage[UnitCode.lotus],
    tagList: [
        TagID.ELEMENT_FIRE,
        TagID.POSITION_HEALER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_SUPPORT,
    ],
    otherVersion: [],
    initHP: 3275.1991269553796,
    initATK: 975.9990797723439,
    puzzle: [ PuzzleCode.EVENT_2023_XMAS_2 ],
    outfits: [],
    skillSet: []
}