import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10914: Unit = {
    ID: "10914",
    metaCode: "lamia",
    prefix: {
        [Locale.tc]: "蛇女",
        [Locale.sc]: null,
        [Locale.en]: "Snake-Girl",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "拉米亞",
        [Locale.sc]: null,
        [Locale.en]: "Lamia",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "蛇女", "小蛇", "拉米亞" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "蛇女族的拉米亞天生就喜歡男人，不只喜歡和他們交合，也喜歡他們身上的金銀財寶。拉米亞會用她的外貌勾引男人，並與他們做愛，由於蛇女的性交時間長達數十小時，往往男人會在過程中昏厥，而等他們醒來時，拉米亞早就把他們搜刮一空，並且溜之大吉了。\n\n『嘻嘻嘻…要來和拉米亞做‧愛‧嗎？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.FIRE,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.lamia],
    thumbnail: UnitEssence[UnitCode.lamia],
    selection: UnitSelection[UnitCode.lamia],
    clothes: UnitFullImage[UnitCode.lamia],
    tagList: [ 
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_INTERFERENCE,
        TagID.OTHER_WEAKEN,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.DEMON_LAMIA ],
    skillSet: []
}