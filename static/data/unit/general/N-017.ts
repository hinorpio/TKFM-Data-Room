import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10917: Unit = {
    ID: "10917",
    metaCode: "blaire",
    prefix: {
        [Locale.tc]: "法斯精銳騎士",
        [Locale.sc]: null,
        [Locale.en]: "Phasi Soldier",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "布蘭",
        [Locale.sc]: null,
        [Locale.en]: "Blaire",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "布蘭" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "唯有在原部隊表現出類拔萃，百人挑一的菁英才能加入法斯帝國的第一主力軍團。布蘭正是主力軍團的其中一員。但即使加入了主力軍團，布蘭也從未放下修行，日以繼夜地繼續磨練自己。布蘭對法斯帝國毫無忠誠，之所以加入軍隊，只是因為軍隊擁有最豐富的資源和訓練。想必有朝一日，如果有比第一軍團更優秀的工作環境，她就會毫不猶豫地轉投他處。\n\n『巡邏…又得浪費修練的時間了。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/03/10",
    essence: UnitEssence[UnitCode.blaire],
    thumbnail: UnitEssence[UnitCode.blaire],
    selection: UnitSelection[UnitCode.blaire],
    clothes: UnitFullImage[UnitCode.blaire],
    tagList: [ 
        TagID.ELEMENT_WIND, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_DEFENSE,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_BLAIRE, PuzzleCode.HUMAN_ANNA ],
    skillSet: []
}