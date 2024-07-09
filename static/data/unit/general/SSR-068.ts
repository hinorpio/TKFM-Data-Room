import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10098: Unit = {
    ID: "10098",
    metaCode: "x_shizuka",
    prefix: {
        [Locale.tc]: "聖誕雪狐",
        [Locale.sc]: null,
        [Locale.en]: "Christmas Fox",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "靜",
        [Locale.sc]: null,
        [Locale.en]: "Shizuka",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "誕狐", "誕靜", "聖狐", "聖靜" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "聖誕節，一個讓孩子們大嗑拐杖糖、打雪仗、蓋超巨大雪屋和交換聖誕禮物的美好節日。因為聽說聖誕節是個非常熱鬧有趣的節日，所以靜原本很期待這次的聖誕溫泉旅行。然而，到了溫泉旅館之後情況卻跟她聽說的完全不一樣。拿到的禮物全是情趣玩具、溫泉池裡泡的全是精液浴、旅館內甚至到處都有人在開亂交派對。『性誕節』什麼的根本就不有趣，靜想要過的聖誕節才不是這種東西！沒辦法，既然靜的聖誕旅行出了意外，那就只好靠靜自己來打造最棒最好的聖誕溫泉旅館了。沒錯！誰都不能阻止靜享受快樂的聖誕節，就算是跟平時完全不一樣、凶巴巴又氣呼呼的艾可也不能。聖誕反抗軍，出動喏！\n\n『可以跟大家一起打雪仗、堆雪人、蓋雪屋，還可以吃好多好多的糖果跟交換禮物，嘻嘻～聖誕節真是太棒了喏！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
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
    otherVersion: [ UnitCode.s_shizuka ],
    puzzle: [],
    skillSet: []
}