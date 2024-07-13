import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';
import puzzles from '../../puzzle';

export const General_10916: Unit = {
    ID: "10916",
    metaCode: "anna",
    prefix: {
        [Locale.tc]: "法斯精銳近衛",
        [Locale.sc]: null,
        [Locale.en]: "Phasi Guard",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "安娜",
        [Locale.sc]: null,
        [Locale.en]: "Anna",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "安娜" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "近衛專指跟隨在皇室身邊，負責保護他們人身安全的衛兵。比起侵略性更強的騎士，近衛更擅長與敵人纏鬥，並保護特地對象的安全。安娜是法斯帝國皇室的近衛，個性溫和且擅長保密的她深受皇室所信賴。因為到了適婚期，最近正為了某名皇室成員動了要娶她當妾室的念頭而煩惱。\n\n『今天也聽到了不錯的小道消息呢。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.FIRE,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/03/10",
    essence: UnitEssence[UnitCode.anna],
    thumbnail: UnitEssence[UnitCode.anna],
    selection: UnitSelection[UnitCode.anna],
    clothes: UnitFullImage[UnitCode.anna],
    tagList: [ 
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_ANNA, PuzzleCode.HUMAN_NATASHA ],
    skillSet: []
}