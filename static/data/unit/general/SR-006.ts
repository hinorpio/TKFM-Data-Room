import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10014: Unit = {
    ID: "10014",
    metaCode: "shizuka",
    prefix: {
        [Locale.tc]: "妖狐",
        [Locale.sc]: null,
        [Locale.en]: "Fox Spirit",
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
        [Locale.tc]: [ "普狐", "普靜", "狐", "靜" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "有著一半妖狐血統的靜與生俱來就有著強大的妖力，從小就被寄養在烈日國的陰陽寮裡，從未與她的生父與生母見過面。靜將養育她的陰陽師們視作了真正的家人，雖然成了一名「孤兒」，不過靜並沒有因此變得陰鬱，反而活潑過了頭。然而在那樂觀的外表之下，卻藏著害怕寂寞的一面，會如此熱衷惡作劇，或許就是為了能吸引別人的注意。\n\n『靜會再好好學習的喏，下次，下次一定會的喏！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SR,
    element: Element.WATER,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.shizuka],
    thumbnail: UnitEssence[UnitCode.shizuka],
    selection: UnitSelection[UnitCode.shizuka],
    clothes: UnitFullImage[UnitCode.shizuka],
    tagList: [
        TagID.ELEMENT_WATER, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_SMALL_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_INTERFERENCE,
        TagID.OTHER_WEAKEN,
    ], 
    otherVersion: [ UnitCode.s_shizuka, UnitCode.x_shizuka ],
    puzzle: [],
    skillSet: []
}