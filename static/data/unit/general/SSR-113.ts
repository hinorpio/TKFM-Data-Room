import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10143: Unit = {
    ID: "10143",
    metaCode: "s_salucia",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "賽露西亞",
        [Locale.sc]: "赛露西亚",
        [Locale.en]: "Salucia",
        [Locale.jp]: "セルシア",
        [Locale.kr]: "살루시아"
    },
    abbreviation: {
        [Locale.tc]: [ "夏精", "夏王" ],
        [Locale.sc]: [ "夏精", "夏王" ],
        [Locale.en]: [ "S.Salu", "S.Salucia" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수살루" ]
    },
    background: {
        [Locale.tc]: `有人說精靈只喜歡森林，不喜歡大海，這是不太正確的結論。絕大部分的精靈在她們漫長的人生中都沒看過大海，但看過大海的精靈無一都會愛上這壯闊而浩瀚的湛藍水色。至少賽露西亞就是這樣。她以前曾見過一次大海，而那時的她認為大海十分美麗且震撼人心，就和她看過的許多景色一樣。可是，這一次的夏天，她和那個人一起來到了烈日國的海灘。依舊波瀾壯闊的大海，配上有趣的同伴以及凱薩大人，賽露西亞相信，這趟假期一定會變成一場充滿驚喜和樂趣的旅程。\n\n『好久沒看見大海了，真懷念呢。』`,
        [Locale.sc]: `有人说精灵只喜欢森林，不喜欢大海，这是不太正确的结论。绝大部分的精灵在她们漫长的人生中都没看过大海，但看过大海的精灵无一都会爱上这壮阔而浩瀚的湛蓝水色。至少赛露西亚就是这样。她以前曾见过一次大海，而那时的她认为大海十分美丽且震撼人心，就和她看过的许多景色一样。可是，这一次的夏天，她和那个人一起来到了烈日国的海滩。依旧波澜壮阔的大海，配上有趣的同伴以及凯萨大人，赛露西亚相信，这趟假期一定会变成一场充满惊喜和乐趣的旅程。\n\n『好久没看见大海了，真怀念呢。』`,
        [Locale.en]: `Many would say elves only fancy the forest and not the seas. They would be wrong. It is true that in their long lives, most never visit the coast, but those who do fall madly in love with the ocean's vast blue expanse. At least that is the case with Salucia. When she saw it once before, she thought it absolutely breathtaking, not unlike many other marvelous scenes she had seen throughout her long life. This time, however, she visits the shores of Isorath with someone dear to her heart... She now visits this marvelous paradise with Master Caesar and others, and she knows deep down that it will be an unforgettable vacation filled with surprises and fun.\n\n"It's been far too long since I last saw the sea. I miss it dearly."`,
        [Locale.jp]: `エルフは森が好きで、海を嫌う。そう考える人が多いが、実は違う。多くのエルフはその長い人生の中で海を見たことがない。しかし一度海を見たエルフは皆、広く青い海に惚れるのだ。少なくともセルシアはそうだった。彼女は過去に一度海を見たことがある。彼女が今まで見てきた絶景と同じように、海の美しさに感動したのだ。彼女は今夏、あの人と共に烈陽国のビーチへと遊びに来た。変わりのない広大な海に、面白い仲間とシーザー様が加われば、この休暇が驚きと楽しみに満ちた旅になるとセルシアは確信したのであった。\n\n『久しぶりに海を見ました。懐かしいですね』`,
        [Locale.kr]: `어떤 사람들은 엘프가 숲만 좋아하고 바다는 좋아하지 않는다고 말하는데, 정확한 얘기는 아니다. 오랜 세월 동안 바다를 본 적이 없는 엘프들이 대부분이지만, 단 한 번이라도 바다를 본 엘프들은 이 광활한 푸른 물빛을 사랑하지 않을 수 없게 된다. 적어도 살루시아는 그랬다. 그녀는 예전에 바다를 한 번 본 적이 있는데, 그녀가 수없이 봐왔던 아름다운 풍경만큼이나 무척이나 감동을 느꼈었다. 다른 점이라면 이번 여름에는 태양국의 해변에 그 사내와 함께 왔다는 것. 여전히 생명이 넘치는 바다, 그리고 재밌는 동료들과 시저와 함께 하는 여름날. 그녀는 이번 휴가가 놀라움과 즐거움이 가득한 여행이 될 것이라 믿어 의심치 않는다.\n\n『오랜만이구나, 바다야... 너무 그리웠어.』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/06/05",
    essence: UnitEssence[UnitCode.s_salucia],
    thumbnail: UnitEssence[UnitCode.s_salucia],
    selection: UnitSelection[UnitCode.s_salucia],
    clothes: UnitFullImage[UnitCode.s_salucia],
    tagList: [],
    otherVersion: [ UnitCode.salucia, UnitCode.h_salucia, UnitCode.ny_salucia ],
    initHP: 3619.2,
    initATK: 974.4,
    puzzle: [ PuzzleCode.EVENT_2024_SUMMER_2 ],
    outfits: [],
    skillSet: []
}