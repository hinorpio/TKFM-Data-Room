import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10125: Unit = {
    ID: "10125",
    metaCode: "h_ayane",
    prefix: {
        [Locale.tc]: "南瓜魔女",
        [Locale.sc]: "南瓜魔女",
        [Locale.en]: "Pumpkin Witch",
        [Locale.jp]: "カボチャの魔女",
        [Locale.kr]: "호박 마녀"
    },
    name: {
        [Locale.tc]: "神田綾音",
        [Locale.sc]: "神田绫音",
        [Locale.en]: "Ayane",
        [Locale.jp]: "神田綾音",
        [Locale.kr]: "칸다 아야네"
    },
    abbreviation: {
        [Locale.tc]: [ "萬勇", "瓜勇", "瓜田", "南勇" ],
        [Locale.sc]: [ "万勇", "瓜勇", "瓜田", "南勇" ],
        [Locale.en]: [ "H.Ayane" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "할야네" ]
    },
    background: {
        [Locale.tc]: `萬聖節對神田綾音來說，是一個能夠輕鬆獲得大量點心的美好節日。來到異世界，發現這裡也有萬聖節後，神田綾音套上紙袋，準備和以往一樣到處去收集點心。沒想到，一場『意外』讓這次的萬聖節全部變了調。原本尊敬的人變成搗蛋鬼，自己也被迫換上性感的萬聖裝扮。為了解決這次事件並守護萬聖節就該把糖果拿好拿滿的美好習俗，神田綾音選擇無視自己的羞恥心，化身成南瓜魔女，開始屬於自己的萬聖冒險。\n\n『不給糖就搗蛋…但是我一點都不想對你搗蛋，所以趕快把糖果交出來吧。』`,
        [Locale.sc]: `万圣节对神田绫音来说，是一个能够轻松获得大量点心的美好节日。来到异世界，发现这里也有万圣节后，神田绫音套上纸袋，准备和以往一样到处去收集点心。没想到，一场『意外』让这次的万圣节全部变了调。原本尊敬的人变成捣蛋鬼，自己也被迫换上性感的万圣装扮。为了解决这次事件并守护万圣节就该把糖果拿好拿满的美好习俗，神田绫音选择无视自己的羞耻心，化身成南瓜魔女，开始属于自己的万圣冒险。\n\n『不给糖就捣蛋…但是我一点都不想对你捣蛋，所以赶快把糖果交出来吧。』`,
        [Locale.en]: `In Ayane's calendar, Halloween is that one holiday where snacks and treats flow like waterfalls. Upon arriving in an alien world and discovering Halloween still existed, Ayane whips out her paper bag to set out on her seasonal candy hunt. Yet an unexpected "set-back" changes the tone of this year's trick-or-treating... The ally she most respected has become a tricky troublemaker, while Ayane is forced to wear a swanky Halloween costume. Resolved to collect all the candy and keep up the cheer, she proudly chooses to ignore her shame, transform into a pumpkin witch, and set off on her own Halloween adventure.\n\n"Trick or treat… No tricks for you, though… Now hand over that candy, or else!"`,
        [Locale.jp]: `ハロウィンは神田綾音にとって、お菓子をもらえる素敵な日。異世界にもハロウィンがあることを知った彼女は、紙袋をかぶってお菓子をもらいに行くことに。だが、とある「ハプニング」が原因でハロウィンが大変なことに。尊敬していたあの人がいたずらっ子になり、セクシーな衣装に着替えるよう迫られる綾音。このハプニングを解決し、本来のハロウィンを取り戻すべく、神田綾音は羞恥心を捨ててカボチャの魔女へと変身し、自分だけのハロウィンの冒険へと歩み始めたのであった。\n\n『お菓子をくれなきゃイタズラするぞ……でもあんたにイタズラなんてしたくないから、普通にお菓子ちょうだい』`,
        [Locale.kr]: `할로윈은 칸다 아야네에겐 대량의 디저트를 쉽게 얻을 수 있는 환상적인 기념일이다. 자신이 당도한 이세계에도 할로윈이 있다는 걸 알게 된 칸다 아야네는 봉투를 뒤집어쓰고 전처럼 디저트를 수집할 준비를 한다. 하지만 예상치 못한 『사건』이 이번 할로윈을 전부 바꿔버렸으니... 존경하던 이가 말썽꾸러기로 변해버리고, 자신 또한 강요로 섹시한 할로윈 코스튬을 입게 된다. 이번 사건을 해결하고, 사탕을 잔뜩 얻을 수 있는 아름다운 할로윈을 수호하기 위해, 칸다 아야네는 자신의 수치심을 뒤로한 채 호박 마녀가 되어 자신만의 할로윈 모험을 떠나게 된다.\n\n『트릭 오어 트릿... 하지만 장난 같은 건 하나도 치고 싶지 않으니까, 빨리 사탕이나 내놔.』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/10/18",
    essence: UnitEssence[UnitCode.h_ayane],
    thumbnail: UnitEssence[UnitCode.h_ayane],
    selection: UnitSelection[UnitCode.h_ayane],
    clothes: UnitFullImage[UnitCode.h_ayane],
    tagList: [],
    otherVersion: [ UnitCode.ayane, UnitCode.s_ayane, UnitCode.bg_ayane, UnitCode.bu_ayane ],
    initHP: 3360,
    initATK: 1049.6,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.h_ayane],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}