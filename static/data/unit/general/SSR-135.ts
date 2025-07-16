import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10164: Unit = {
    ID: "10164",
    metaCode: "f_kana",
    prefix: {
        [Locale.tc]: "祭典花韻",
        [Locale.sc]: "祭典花韵",
        [Locale.en]: "Festival Blossom",
        [Locale.jp]: "祭りの花",
        [Locale.kr]: "제전의 꽃"
    },
    name: {
        [Locale.tc]: "香奈",
        [Locale.sc]: "香奈",
        [Locale.en]: "Kana",
        [Locale.jp]: "香奈",
        [Locale.kr]: "카나"
    },
    abbreviation: {
        [Locale.tc]: [ "風魁", "祭魁" ],
        [Locale.sc]: [ "风魁", "祭魁" ],
        [Locale.en]: [ "F.Kana", "FK.ana", "W.Kana" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "꽃카나" ]
    },
    background: {
        [Locale.tc]: `在烈日國滅亡之後，人們便因為戰亂，遺忘了許多曾經的傳統。有很多人都已經不曉得，所謂的祀神祭典，其舉辦的真正意義究竟為何。今年，香奈也和以往一樣回到家鄉，協助舉辦例行的祈福儀式。看著在戰火中逐漸重建的故鄉，香奈心中充滿了感慨與期盼。她希望，不會再有任何陰影與黑暗，前來奪走這得來不易的安寧。\n\n『呵呵~沒想到在烈日國遭逢變故之後，小女子還有機會再次換上這套服裝呢。』`,
        [Locale.sc]: `在烈日国灭亡之后，人们便因为战乱，遗忘了许多曾经的传统。有很多人都已经不晓得，所谓的祀神祭典，其举办的真正意义究竟为何。今年，香奈也和以往一样回到家乡，协助举办例行的祈福仪式。看着在战火中逐渐重建的故乡，香奈心中充满了感慨与期盼。她希望，不会再有任何阴影与黑暗，前来夺走这得来不易的安宁。\n\n『呵呵~没想到在烈日国遭逢变故之后，小女子还有机会再次换上这套服装呢。』`,
        [Locale.en]: `After the fall of Isorath, many traditions were lost to the chaos of war. Many people no longer know the true significance of the worship festivals of deities. This year, Kana returns to her hometown, as she did in the past, to assist in a routine blessing ceremony. Watching her hometown gradually rebuild amidst the flames of war, Kana feels a mix of emotions and hope. She wishes for no more shadows or darkness to come and take away this hard-won peace.\n\n"Hehe~ I never expected to have the chance to wear this outfit again after the upheaval in Isorath."`,
        [Locale.jp]: `烈陽国が滅びた後、人々は戦乱の中で多くの伝統を忘れていった。今では神を祀る儀式が本来何のために執り行われていたのかを知る者も少ない。今年も、香奈は例年と同じように故郷へ戻り、恒例の儀式を手伝っていた。戦火の爪痕を残しながらも、少しずつ復興していく故郷の姿を見つめ、彼女の胸にはさまざまな想いが込み上げる。もう二度と、この平和を奪う影や闇が訪れませんように──彼女はそう願っていた。\n\n『うふふ~まさか烈陽国で大変な目に遭った後で、またこの服を着る機会があるなんてね』`,
        [Locale.kr]: `태양국이 멸망한 후, 사람들은 전란 속에서 많은 전통을 잊어갔다. 이제는 많은 이들이 신에게 바치는 제전의 의의가 본래 어떤 것이었는지조차 알지 못한다. 올해, 카나도 예전처럼 고향에 돌아와 의식 준비를 돕고 있었다. 전쟁의 불길 속에서 조금씩 재건되어 가는 고향을 보며, 카나는 깊은 감회와 기대감에 휩싸였다. 그녀는 바랐다. 더 이상 어떠한 어둠도, 그림자도 힘겹게 얻어낸 평온을 앗아가지 않기를.\n\n『후훗~ 태양국이 변란을 겪은 이후로, 제가 이 옷을 다시 입을 날이 올 줄은 몰랐네요.』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2025/02/12",
    essence: UnitEssence[UnitCode.f_kana],
    thumbnail: UnitEssence[UnitCode.f_kana],
    selection: UnitSelection[UnitCode.f_kana],
    clothes: UnitFullImage[UnitCode.f_kana],
    tagList: [],
    otherVersion: [ UnitCode.kana ],
    initHP: 4900.8,
    initATK: 718.4,
    puzzle: [],
    outfits: [],
    skillSet: []
}