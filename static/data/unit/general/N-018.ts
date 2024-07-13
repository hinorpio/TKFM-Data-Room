import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10918: Unit = {
    ID: "10918",
    metaCode: "natasha",
    prefix: {
        [Locale.tc]: "法斯高階法師",
        [Locale.sc]: null,
        [Locale.en]: "Phasi Wizard",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "諾諾可",
        [Locale.sc]: null,
        [Locale.en]: "Natasha",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "諾諾可", "諾", "沖水", "水之鼓舞" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "諾諾可是法斯帝國的魔法士兵，因為有著一般水平以上的水準，被獲准加入精銳魔法部隊。以精銳部隊的身份為傲，諾諾可最喜歡指揮其他地位在他之下的魔法師做事。性格惡劣，但若是他人來請教的話並不會藏私，會一邊冷嘲熱諷一邊用好懂的方式進行教學。許多被她使喚跑腿的人就是衝著這點來的，在特定族群有著超乎意料的人氣。\n\n『連這麼簡單的東西都不懂，沒天賦的人真可憐，好吧，就讓我來教教你吧。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/03/10",
    essence: UnitEssence[UnitCode.natasha],
    thumbnail: UnitEssence[UnitCode.natasha],
    selection: UnitSelection[UnitCode.natasha],
    clothes: UnitFullImage[UnitCode.natasha],
    tagList: [ 
        TagID.ELEMENT_WATER, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_NATASHA, PuzzleCode.HUMAN_BLAIRE ],
    skillSet: []
}