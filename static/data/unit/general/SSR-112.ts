import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10142: Unit = {
    ID: "10142",
    metaCode: "s_chizuru",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "千鶴",
        [Locale.sc]: "千鹤",
        [Locale.en]: "Chizuru",
        [Locale.jp]: "千鶴",
        [Locale.kr]: "치즈루"
    },
    abbreviation: {
        [Locale.tc]: [ "夏鶴", "夏千" ],
        [Locale.sc]: [ "夏鹤", "夏千" ],
        [Locale.en]: [ "S.Chizuru" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수즈루" ]
    },
    background: {
        [Locale.tc]: `夏天，是玩樂的季節！海灘，是放鬆身心的度假樂園！把握住拜訪大海的機會，生前是烈日國的前公主、現在是不死生物的千鶴，開心出動了～雖然因為凜月會擔心，所以要小心注意不能玩太瘋，但既然都到了海邊，那就不能錯過各種有趣的活動！除了沙灘排球、堆沙堡和打西瓜之外，像衝浪這種刺激的水上活動，貪玩的公主全都想體驗一遍。更棒的是，身為不死生物的她不需要呼吸，所以完全不用怕溺水！這下就算自己是個不會游泳的旱鴨子殭屍，肯定也沒問題了！對吧～\n\n『凜月，和我一起來玩水吧～』`,
        [Locale.sc]: `夏天，是玩乐的季节！海滩，是放松身心的度假乐园！把握住拜访大海的机会，生前是烈日国的前公主、现在是不死生物的千鹤，开心出动了～虽然因为凛月会担心，所以要小心注意不能玩太疯，但既然都到了海边，那就不能错过各种有趣的活动！除了沙滩排球、堆沙堡和打西瓜之外，像冲浪这种刺激的水上活动，贪玩的公主全都想体验一遍。更棒的是，身为不死生物的她不需要呼吸，所以完全不用怕溺水！这下就算自己是个不会游泳的旱鸭子僵尸，肯定也没问题了！对吧～\n\n『凛月，和我一起来玩水吧～』`,
        [Locale.en]: `Ah, Summer, the season of fun! And the beach itself is a wonderland of relaxation! As the princess of Isorath who died long, long ago, she can't help but skip with joy when she finally gets to visit the beach~ She can't get too excited or she might worry Ristuki, but she can't go to the shore and not enjoy at least some summer games! Aside from volleyball, building sand castles, and smashing watermelons, her ghostly self wants to splash in the water and maybe even surf. After all, since she is already dead, she can soak in the sea without worrying about drowning! Even if she can't swim, it won't be a problem for this zombie princess in need of a hydrating dip in the sea! Right~?\n\n"Ritsuki, come play with me in the water~"`,
        [Locale.jp]: `夏、すなわち遊びの季節！ビーチ、すなわちリラックスのリゾート！生前は烈陽国の姫だった千鶴。アンデッドとなった今、海で遊べるチャンスを逃すまいと大はしゃぎ。凛月が心配するのではしゃぎ過ぎには注意だが、海に来たからには楽しまないわけにはいかない！ビーチバレーや砂のお城づくり、スイカ割りだけではなく、サーフィンといった刺激的な遊びもしてみたい貪欲な姫。羨ましい事にアンデッドの彼女は息をする必要もないので、海が一切怖くないのだ！これなら泳げないゾンビでも心配ご無用～！\n\n『凛月、一緒に水遊びしよう～』`,
        [Locale.kr]: `여름, 놀이의 계절! 해변은 몸과 마음에 평온을 안겨다 주는 최고의 휴양지! 이번 바다를 방문할 기회를 놓치지 않고 생전 태양국의 전 공주였던, 불사의 치즈루가 즐거운 마음으로 출동! 리츠키가 걱정하므로 너무 과하게 노는 것에 주의해야겠지만, 그래도 이왕 바닷가까지 왔으니 각종 재밌는 이벤트 역시 놓칠 순 없는 노릇! 비치발리볼, 모래성 쌓기, 수박깨기 외에도 서핑 같은 짜릿한 수상 이벤트까지 모두 경험해 보고 싶어 하는 공주. 불사의 몸으로 숨을 쉴 필요가 전혀 없는 그녀에게 수상 레저는 더할나위 없는 최고의 놀거리가 되어 준다! 수영을 못하더라도 전혀 문제가 없는 그녀! 이게 맞는 걸까~?\n\n『리츠키, 우리 같이 물놀이하자~』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/06/05",
    essence: UnitEssence[UnitCode.s_chizuru],
    thumbnail: UnitEssence[UnitCode.s_chizuru],
    selection: UnitSelection[UnitCode.s_chizuru],
    clothes: UnitFullImage[UnitCode.s_chizuru],
    tagList: [],
    otherVersion: [ UnitCode.chizuru, UnitCode.w_chizuru ],
    initHP: 0,
    initATK: 0,
    puzzle: [ PuzzleCode.EVENT_2024_SUMMER_1 ],
    outfits: [],
    skillSet: []
}