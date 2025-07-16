import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10098: Unit = {
    ID: "10098",
    metaCode: "x_shizuka",
    prefix: {
        [Locale.tc]: "聖誕雪狐",
        [Locale.sc]: "圣诞雪狐",
        [Locale.en]: "Christmas Fox",
        [Locale.jp]: "クリスマス狐",
        [Locale.kr]: "크리스마스 눈꽃여우"
    },
    name: {
        [Locale.tc]: "靜",
        [Locale.sc]: "静",
        [Locale.en]: "Shizuka",
        [Locale.jp]: "静",
        [Locale.kr]: "시즈카"
    },
    abbreviation: {
        [Locale.tc]: [ "誕狐", "誕靜", "聖狐", "聖靜" ],
        [Locale.sc]: [ "诞狐", "诞静", "圣狐", "圣静" ],
        [Locale.en]: [ "X.Shiz", "X.Shizuka", "C.Shiz", "C.Shizuka" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "크즈카" ]
    },
    background: {
        [Locale.tc]: `聖誕節，一個讓孩子們大嗑拐杖糖、打雪仗、蓋超巨大雪屋和交換聖誕禮物的美好節日。因為聽說聖誕節是個非常熱鬧有趣的節日，所以靜原本很期待這次的聖誕溫泉旅行。然而，到了溫泉旅館之後情況卻跟她聽說的完全不一樣。拿到的禮物全是情趣玩具、溫泉池裡泡的全是精液浴、旅館內甚至到處都有人在開亂交派對。『性誕節』什麼的根本就不有趣，靜想要過的聖誕節才不是這種東西！沒辦法，既然靜的聖誕旅行出了意外，那就只好靠靜自己來打造最棒最好的聖誕溫泉旅館了。沒錯！誰都不能阻止靜享受快樂的聖誕節，就算是跟平時完全不一樣、凶巴巴又氣呼呼的艾可也不能。聖誕反抗軍，出動喏！\n\n『可以跟大家一起打雪仗、堆雪人、蓋雪屋，還可以吃好多好多的糖果跟交換禮物，嘻嘻~聖誕節真是太棒了喏！』`,
        [Locale.sc]: `圣诞节，一个让孩子们大嗑拐杖糖、打雪仗、盖超巨大雪屋和交换圣诞礼物的美好节日。因为听说圣诞节是个非常热闹有趣的节日，所以静原本很期待这次的圣诞温泉旅行。然而，到了温泉旅馆之后情况却跟她听说的完全不一样。拿到的礼物全是情趣玩具、温泉池里泡的全是精液浴、旅馆内甚至到处都有人在开乱交派对。『性诞节』什么的根本就不有趣，静想要过的圣诞节才不是这种东西！没办法，既然静的圣诞旅行出了意外，那就只好靠静自己来打造最棒最好的圣诞温泉旅馆了。没错！谁都不能阻止静享受快乐的圣诞节，就算是跟平时完全不一样、凶巴巴又气呼呼的艾可也不能。圣诞反抗军，出动喏！\n\n『可以跟大家一起打雪仗、堆雪人、盖雪屋，还可以吃好多好多的糖果跟交换礼物，嘻嘻~圣诞节真是太棒了喏！』`,
        [Locale.en]: `Ah, Christmas! Eating candy canes, having snowball fights, making snowmen... it's the best time of the year! Shizuka loves Christmas, so she's super excited to go to the Hot Springs Hotel with Caesar this year! But when she gets there, it's completely different from how she imagined... Her only presents are dildos, the hot springs are full of cum, and everyone's having sex! What the heck is "Sexmas"!? Where's the holiday spirit!? Well if Christmas isn't coming to Shizuka, then Shizuka's just gonna have to come to Christmas! Or... yeah, that makes sense! Shizuka's gonna make this Christmas the best she's ever had, and it doesn't matter what that buzzkill, spirit-less Aiko says! Santa's Saviors... to the rescue!!!\n\n"I'm gonna have snowball fights, build snowmen, make igloos, and eat a ton of ham and cake!! Christmas rules!!!"`,
        [Locale.jp]: `クリスマス――それは子供たちが雪合戦をしてかまくらを作り、お菓子を食べながらプレゼントを開ける、美しい祝日。そんな祝日に温泉旅行へ行くことになった静は、この日を心の底から楽しみにしていた。しかし温泉旅館へ到着した静は、そこで想像とは全く違う光景を目にして絶望した。プレゼントの中身はアダルトグッズ、温泉のお湯はザーメンまみれ、旅館のあちこちでは乱交パーティーが行われていたのだ。静は『セックスマス』じゃなくてクリスマスを過ごしたいのに！！しかしここまで来たら後戻りができない静。彼女は自ら旅館をクリスマスムードに変えようと考えたのだ。誰にも楽しいクリスマスを邪魔させない！そう、あの凶暴なアイカであってもそれは同じだ。クリスマス反乱軍、出撃~！\n\n『みんなで一緒に雪合戦して、雪だるまとかまくら作って、おいしいお菓子を食べて、プレゼント交換をするの！へへっ、クリスマス最高~！！』`,
        [Locale.kr]: `크리스마스, 아이들이 눈싸움도 하고 눈사람과 눈집도 만들고 선물 교환도 하는 그런 날. 그런 특별한 날, 시즈카는 온천 여행을 꿈꾸게 된다. 하지만 온천 여관에 도착하고 나서야 자신이 들었던 것과 많이 다르다는 것을 발견하게 된 시즈카. 선물은 온통 섹스토이, 정액으로 채워진 온천탕, 심지어 난교파티까지 벌어지고 있었다. 『섹스마스』에 아무런 흥미를 느끼지 못한 시즈카는 이런 식으로 크리스마스를 보내고 싶지 않았다. 하는 수 없이 나름대로 온천 여관에서 최고의 크리스마스를 보내려는 시즈카. 어느 누구도 크리스마스를 즐겁게 보내겠다는 그녀의 굳센 의지를 꺾진 못할 것이다. 설령 평소와 180도 달라진 아이카라 할지라도. 크리스마스 레지스탕스, 출동!\n\n『모두와 함께 눈싸움도 하고 눈사람이랑 이글루도 만들고 선물 교환도 하고 사탕도 먹고... 히히~ 크리스마스 최고!』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/12/14",
    essence: UnitEssence[UnitCode.x_shizuka],
    thumbnail: UnitEssence[UnitCode.x_shizuka],
    selection: UnitSelection[UnitCode.x_shizuka],
    clothes: UnitFullImage[UnitCode.x_shizuka],
    tagList: [],
    otherVersion: [ UnitCode.shizuka, UnitCode.s_shizuka, UnitCode.beer_shizuka ],
    initHP: 3400,
    initATK: 1036.8,
    puzzle: [],
    outfits: [],
    skillSet: []
}