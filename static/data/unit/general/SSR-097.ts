import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10127: Unit = {
    ID: "10127",
    metaCode: "x_aridya",
    prefix: {
        [Locale.tc]: "雪夜幻夢",
        [Locale.sc]: "雪夜幻梦",
        [Locale.en]: "Snowy Fantasy",
        [Locale.jp]: "雪夜の夢",
        [Locale.kr]: "화이트 크리스마스"
    },
    name: {
        [Locale.tc]: "阿爾蒂雅",
        [Locale.sc]: "阿尔蒂雅",
        [Locale.en]: "Aridya",
        [Locale.jp]: "アルティア",
        [Locale.kr]: "아르티아"
    },
    abbreviation: {
        [Locale.tc]: [ "誕蘿", "聖蘿" ],
        [Locale.sc]: [ "诞萝", "圣萝" ],
        [Locale.en]: [ "X.Aridya", "C.Aridya" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "크르티아" ]
    },
    background: {
        [Locale.tc]: `對於永遠睡不飽的食夢獸一族來說，寒冷的冬天是最適合睡覺的季節。穿上又軟又舒服的馴鹿睡衣，阿爾蒂雅本來想要舒舒服服地待在房間裡睡覺。結果卻因為名為性誕節的節日，導致她身邊到處都是做愛的吵鬧聲響，吵得這頭小小馴鹿難以入睡。看著周圍一片白茫茫，就好像又軟又白的大棉被一般的雪地，阿爾蒂雅飄了出去。不論是性誕還是聖誕，食夢獸都毫無興趣，她只想要在這適合躺著不動的天氣裡，美美的睡上一覺。\n\n『下雪的時候…最適合躲在被窩裡面睡覺了……』`,
        [Locale.sc]: `对于永远睡不饱的食梦兽一族来说，寒冷的冬天是最适合睡觉的季节。穿上又软又舒服的驯鹿睡衣，阿尔蒂雅本来想要舒舒服服地待在房间里睡觉。结果却因为名为性诞节的节日，导致她身边到处都是做爱的吵闹声响，吵得这头小小驯鹿难以入睡。看着周围一片白茫茫，就好像又软又白的大棉被一般的雪地，阿尔蒂雅飘了出去。不论是性诞还是圣诞，食梦兽都毫无兴趣，她只想要在这适合躺着不动的天气里，美美的睡上一觉。\n\n『下雪的时候…最适合躲在被窝里面睡觉了……』`,
        [Locale.en]: `For the sleep-deprived dreameaters who, the most suitable season for sleeping is the cold winter. Slipping into her soft comfy reindeer pajamas, Aridya initially wanted to stay in the room and fall sound asleep. But the rowdy noises of Sexmas fill the air, preventing this poor little reindeer from doing so. She then floats outside across the blanket of snow, covering her world in a soft white quilt. Dreameaters have zero interest in Sexmas or Christmas nonsense, she merely wants a good night's sleep in this snuggle weather.\n\n"When it snows... it's time to hide under a quilt and sleep for days…"`,
        [Locale.jp]: `永遠に眠たい夢喰いからすると、寒い冬は寝るのにぴったり。やわらかくて暖かいトナカイのパジャマを着たアルティアは、自分の部屋でのんびり寝ようと考えていた。しかしセックスマスという祝日のせいで、あたりにはエッチな声が響き渡り、眠るに眠れない状態に。そして真っ白でやわらかい布団のような雪原を見ると、アルティアは外に出て行った。セックスマスもクリスマスも、夢喰いにとったらどうでもいい。彼女はただ、この寝るのに適した季節にゆっくり眠りたいだけなのだ。\n\n『雪が降ったら…お布団で寝るのが一番なの……』`,
        [Locale.kr]: `영원히 잠을 충분히 자지 못하는 드림이터 일족에게 있어 추운 겨울은 잠에 들기에 가장 좋은 계절이다. 보들보들하면서도 편안한 순록 파자마를 입은 아르티아는 방에서 편안하게 취침을 취하고 싶었다. 결국 섹스마스라는 명절로 인해, 그녀의 주변이 온통 사랑을 나누는 교음으로 울려 퍼지는 바람에 쉽게 잠에 들지 못했다. 눈송이처럼 하얗고 부드러운 솜이불을 바라 본 아르티아는 그곳으로 날아간다. 섹스마스든 크리스마스든, 드림이터에겐 전혀 관심없는 일이다. 단지 움직이지 않고 누워 있기 좋은 이 계절에 잠이나 푹 자고 싶을 뿐.\n\n『눈이 내릴 때는... 이불 속에 파묻혀서 잠을 취하는 게 딱인데...』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/12/13",
    essence: UnitEssence[UnitCode.x_aridya],
    thumbnail: UnitEssence[UnitCode.x_aridya],
    selection: UnitSelection[UnitCode.x_aridya],
    clothes: UnitFullImage[UnitCode.x_aridya],
    tagList: [],
    otherVersion: [ UnitCode.aridya, UnitCode.s_aridya ],
    puzzle: [],
    skillSet: []
}