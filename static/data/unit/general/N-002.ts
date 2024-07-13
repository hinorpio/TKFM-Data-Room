import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10902: Unit = {
    ID: "10902",
    metaCode: "petra",
    prefix: {
        [Locale.tc]: "法斯帝國法師",
        [Locale.sc]: null,
        [Locale.en]: "Phasi Wizard",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "佩托拉",
        [Locale.sc]: null,
        [Locale.en]: "Petra",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "佩托拉" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "佩托拉是法斯帝國的魔法士兵，本身魔力並沒有特別突出，只比一般人稍微優秀。選擇成為魔法師的原因，只是因為一直以來魔法師的工作錢多事少，堪稱是公家機關的鐵飯碗，不過佩托拉每次一領到薪水馬上就會去衝動購物，導致自己月底時都只能吃麵包度日。\n\n『賺錢就是為了花錢啊！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.petra],
    thumbnail: UnitEssence[UnitCode.petra],
    selection: UnitSelection[UnitCode.petra],
    clothes: UnitFullImage[UnitCode.petra],
    tagList: [ 
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_FLAT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_AOE,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_PETRA ],
    skillSet: []
}