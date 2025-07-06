import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10144: Unit = {
    ID: "10144",
    metaCode: "s_caesar",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "凱薩",
        [Locale.sc]: "凯萨",
        [Locale.en]: "Caesar",
        [Locale.jp]: "シーザー",
        [Locale.kr]: "시저"
    },
    abbreviation: {
        [Locale.tc]: [ "夏凱" ],
        [Locale.sc]: [ "夏凯" ],
        [Locale.en]: [ "S.Caesar", "S.Caez" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수저" ]
    },
    background: {
        [Locale.tc]: `什麼和夏日的驕陽一樣耀眼，沒錯！是余的威光。是什麼比大海的濤浪還要強大，沒錯！是余的力量。來自異界的魔王凱薩，雖然身材小小，但氣勢卻比滔天巨浪還要高昂。她要征服大海，征服夏天，征服所有的一切，將美好的夏日時光納入自己手中！為此，不論在路上遇見什麼障礙她都會直接撞開，因為這就是她的王道！只有一種情況例外，那就是艾可做好了十層豪華大聖代，只有在這種情況下，征服大海什麼的倒是可以先放到一旁。畢竟，先享受臣子的上貢才是最重要的！\n\n『余是要征服夏日，統治大海的世界之王！』`,
        [Locale.sc]: `什么和夏日的骄阳一样耀眼，没错！是余的威光。是什么比大海的涛浪还要强大，没错！是余的力量。来自异界的魔王凯萨，虽然身材小小，但气势却比滔天巨浪还要高昂。她要征服大海，征服夏天，征服所有的一切，将美好的夏日时光纳入自己手中！为此，不论在路上遇见什么障碍她都会直接撞开，因为这就是她的王道！只有一种情况例外，那就是艾可做好了十层豪华大圣代，只有在这种情况下，征服大海什么的倒是可以先放到一旁。毕竟，先享受臣子的上贡才是最重要的！\n\n『余是要征服夏日，统治大海的世界之王！』`,
        [Locale.en]: `What is that dazzling, magnificent light filling this summer day!? Why, it's Little Caez's prestigious presence, of course! Who could possibly be more powerful than the sea's unstoppable waves? That's right! It's Little Caez! This Caesar from another world might be short of stature, but she commands a presence as tall as waves in a monsoon. Conquering is her aim: conquering the seas, summer, anything and everything! This sunny season shall be hers to own! She won't let any obstacle stop her, smashing through it, as it is the only thing she knows what to do! Only one thing that can delay her mission to dominate the seas... Aiko's specially-made ten-layered sundae. After all, enjoying the gifts offered by one's inferior courtesans is a duty Little Caez must endure!\n\n"I'm the King of the World, assholes! Come at me! I'll make this season and the seas my bitches, you'll see!"`,
        [Locale.jp]: `夏の太陽と同じくらい輝く存在とは？そう！この私の威光だ！大海原の波より強い存在とは？そう！この私の実力だ！異世界から来た魔王シーザー。体は小さいがその威勢は巨大な波よりも遥かに大きい。彼女は大海原を征服し、夏を征服し、すべてを征服する。そして美しい夏の時を自分のものにするのだ！そのため彼女は、自分が行く道を阻むものはすべて蹴飛ばす。それこそが彼女の王道なのだ！ただ一つ例外がある。それはアイカが超巨大な豪華パフェを作り上げた時だ。その時だけは、大海原の征服を後回しにするのである。結局のところ、臣下の貢物を楽しむことが何より大切なのだ！\n\n『夏を征服し、大海原を統治する世界の王になる！』`,
        [Locale.kr]: `무엇이 여름날의 태양처럼 빛난다고 생각하나? 그래! 이 몸의 위광이다! 무엇이 바다의 파도보다 더 강하다고 생각하나? 그래! 바로 이 몸의 힘이다! 이세계의 마왕 시저. 작은 몸집에도 거센 파도보다 기세가 등등하다. 바다를 정복하고 여름을 정복하고 모든 것을 정복하여 아름다운 여름날까지 전부 차지한다! 어떤 장애와 맞닥뜨린다 하더라도 그냥 부딪혀버리며 나아가는 것이 그녀의 왕도! 단 한 가지 예외는 존재. 아이카가 10층짜리 호화 선데이를 만들어 줬을 때는 바다 정복 따위 당장이라도 제쳐둘 수 있다. 어쨌든 부하가 바치는 것을 누리는 것도 중요하니까!\n\n『이 몸은 여름을 정복하고 바다의 세계를 통치할 왕이다!』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/06/05",
    essence: UnitEssence[UnitCode.s_caesar],
    thumbnail: UnitEssence[UnitCode.s_caesar],
    selection: UnitSelection[UnitCode.s_caesar],
    clothes: UnitFullImage[UnitCode.s_caesar],
    tagList: [],
    otherVersion: [ UnitCode.f_caesar, UnitCode.n_caesar, UnitCode.ni_caesar ],
    initHP: 3583.9980421924665,
    initATK: 983.9975916158427,
    puzzle: [ PuzzleCode.EVENT_2024_SUMMER_3 ],
    outfits: [],
    skillSet: []
}