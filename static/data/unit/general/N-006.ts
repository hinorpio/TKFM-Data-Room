import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10906: Unit = {
    ID: "10906",
    metaCode: "kaede",
    prefix: {
        [Locale.tc]: "烈日國巫女",
        [Locale.sc]: null,
        [Locale.en]: "Isori Shaman",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "楓",
        [Locale.sc]: null,
        [Locale.en]: "Kaede",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "楓" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "楓是一位虔誠的巫女，成年後就一直待在神宮裡學習神道和陰陽術。十分喜歡小動物，然而由於巫女的身分，沒法有多餘心力飼養寵物，她最大的夢想就是有朝一日可以買下自己的房子，並且和一堆貓貓狗狗同居。\n\n『貓咪好可愛……』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.WIND,
    position: Position.HEALER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.kaede],
    thumbnail: UnitEssence[UnitCode.kaede],
    selection: UnitSelection[UnitCode.kaede],
    clothes: UnitFullImage[UnitCode.kaede],
    tagList: [ 
        TagID.ELEMENT_WIND, 
        TagID.POSITION_HEALER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_RECOVERY,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_KAEDE ],
    skillSet: []
}