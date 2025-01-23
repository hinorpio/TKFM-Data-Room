import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10029: Unit = {
    ID: "10029",
    metaCode: "s_shizuka",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "靜",
        [Locale.sc]: "静",
        [Locale.en]: "Shizuka",
        [Locale.jp]: "静",
        [Locale.kr]: "시즈카"
    },
    abbreviation: {
        [Locale.tc]: [ "夏狐", "夏靜", "泳狐", "泳靜" ],
        [Locale.sc]: [ "夏狐", "夏静", "泳狐", "泳静" ],
        [Locale.en]: [ "S.Shiz", "S.Shizuka" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수즈카" ]
    },
    background: {
        [Locale.tc]: `既然到了海邊就要暢快的玩耍！儘管厚重的毛吸了水會變沉，但只要套上游泳圈就沒問題！為了能夠盡情的玩耍，不惜打聽了自己都搞不懂的魔導科技知識，製作了如同角色扮演般的泳裝。人生首次見到大海，不管是堆沙、海灘排球、美食，還是所有水上運動都要玩過一遍。不只自己要痛快的玩，就連熟識的人也會被捲入其中。在夏天的魔力用盡之前，靜都會不斷玩耍。\n\n『好開心，接下來要玩什麼才好喏～』`,
        [Locale.sc]: `既然到了海边就要畅快的玩耍！尽管厚重的毛吸了水会变沉，但只要套上游泳圈就没问题！为了能够尽情的玩耍，不惜打听了自己都搞不懂的魔导科技知识，制作了如同角色扮演般的泳装。人生首次见到大海，不管是堆沙、海滩排球、美食，还是所有水上运动都要玩过一遍。不只自己要痛快的玩，就连熟识的人也会被卷入其中。在夏天的魔力用尽之前，静都会不断玩耍。\n\n『好开心，接下来要玩什么才好喏～』`,
        [Locale.en]: `We're at the beach! It's time to play! I know my fur'll get all heavy and wet from the sea, but I'll just wear some floaties, it's no problem~ I spent tons of time looking up all this magic technology I didn't understand just so I could make this RPG-looking swimsuit... now summer never has to end! It's my first time to the beach, too~ I wanna do everything! Beach volleyball, sand sculptures, seaside bbq, Marco Polo... I'm gonna play all day~!\n\n"It's so nice here~ Now, what should we play first?"`,
        [Locale.jp]: `夏と言えば海！思いっきり遊ぶぞぉー！厚い毛が水を吸って重くなっても、浮き輪をつければ大丈夫！思う存分遊ぶため、自分でもさっぱり分からない魔導科学の知識を勉強して、コスプレチックな水着を製作した。人生初の海。砂遊びも、ビーチバレーも、ごはんも、デザートも、水上スポーツも全部堪能したい静。自分が楽しむだけでなく、周りの人まで巻き込み始める。静は夏の魔力が切れるまで、遊び尽くしてやろうというのだ。\n\n『わーい！楽しいなぁ！さぁーて、次は何をして遊ぼうかな？』`,
        [Locale.kr]: `해변에 왔으니 시원하게 실컷 놀아야지! 털이 물에 젖으면 몸이 무거워질 수 있지만 그래도 튜브만 있으면 문제없다구! 마음껏 놀기 위해 자신이 모르는 분야인 마도 공학까지 남들에게 캐물어가며, 마침내 캐릭터 코스튬과 같은 수영복을 만들어냈다. 난생처음 보는 바다! 모래놀이! 비치볼! 맛집 탐방! 그리고 수상레포츠까지 모두 해볼 테야!. 혼자 보다는 친구들과 함께 이 여름에 몸을 맡겨보는 거야! 나의 모든 마력을 이 여름에 전부 써버릴 때까지 쉬지 않고 놀아주겠어!\n\n『좋았어! 이제 뭐하고 놀까나~』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/05/28",
    essence: UnitEssence[UnitCode.s_shizuka],
    thumbnail: UnitEssence[UnitCode.s_shizuka],
    selection: UnitSelection[UnitCode.s_shizuka],
    clothes: UnitFullImage[UnitCode.s_shizuka],
    tagList: [],
    otherVersion: [ UnitCode.shizuka, UnitCode.x_shizuka, UnitCode.beer_shizuka ],
    puzzle: [ PuzzleCode.EVENT_2021_SUMMER_1, PuzzleCode.EVENT_2021_SUMMER_1_DMM ],
    skillSet: []
}