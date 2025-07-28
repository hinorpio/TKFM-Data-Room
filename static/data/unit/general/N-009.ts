import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10909: Unit = {
    ID: "10909",
    metaCode: "charlene",
    prefix: {
        [Locale.tc]: "雙蛇軍團士兵",
        [Locale.sc]: "双蛇军团士兵",
        [Locale.en]: "Mercenary",
        [Locale.jp]: "軍団兵士",
        [Locale.kr]: "카두케우스 군단 병사"
    },
    name: {
        [Locale.tc]: "夏琳",
        [Locale.sc]: "夏琳",
        [Locale.en]: "Charlene",
        [Locale.jp]: "シャーリーン",
        [Locale.kr]: "샤린"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `夏琳自從成年後就一直在雙蛇軍團工作，跟隨著軍團從東到西，由南到北。身經百戰的她至今已經是一名非常資深的傭兵。她一直偷偷愛慕著團長克里斯，只是卻沒有勇氣說出自己的感情。\n\n『為了雙蛇軍團！』`,
        [Locale.sc]: `夏琳自从成年后就一直在双蛇军团工作，跟随着军团从东到西，由南到北。身经百战的她至今已经是一名非常资深的佣兵。她一直偷偷爱慕着团长克里斯，只是却没有勇气说出自己的感情。\n\n『为了双蛇军团！』`,
        [Locale.en]: `Charlene's been with the Twin Snakes Brigade since she was old enough to join, and has trekked with them to all corners of the human realm. She's been in countless battles, and has grown up to be quite an experienced mercenary. She also has a huge crush on Captain Chris, but she's too shy to say anything...\n\n"For the Twin Snakes!!"`,
        [Locale.jp]: `シャーリーンは成人を迎えてからずっとカドゥケウス軍団で仕事をしてきた。軍団に入り東西南北を駆け回っている。数多くの戦いを経験した彼女は今では一人前の傭兵だ。団長クリスを愛慕しているが、ずっと口に出せずにいる。\n\n『カドゥケウス軍団の為に！』`,
        [Locale.kr]: `샤린은 성인이 된 이후 계속 카두케우스 군단에서 부대를 따라 동에서 서로, 그리고 남에서 북으로 원정을 다니고 있다. 수많은 전투를 경험한 그녀는 이미 노련한 용병으로 성장했다. 샤린은 남몰래 군단장 크리스를 흠모하고 있지만 자신의 마음을 말할 용기가 없다.\n\n『카두케우스 군단을 위하여!』`
    },
    rarity: Rarity.N,
    element: Element.FIRE,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.charlene],
    thumbnail: UnitEssence[UnitCode.charlene],
    selection: UnitSelection[UnitCode.charlene],
    clothes: UnitFullImage[UnitCode.charlene],
    tagList: [ 
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_AOE,
    ],
    otherVersion: [],
    initHP: 2767,
    initATK: 365,
    puzzle: [ PuzzleCode.HUMAN_CHARLENE ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.charlene],
    skillSet: []
}