import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10908: Unit = {
    ID: "10908",
    metaCode: "kani",
    prefix: {
        [Locale.tc]: "矮人戰士",
        [Locale.sc]: null,
        [Locale.en]: "Dwarven Soldier",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "可兒",
        [Locale.sc]: null,
        [Locale.en]: "Kani",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "可兒" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "可兒是一名合格的矮人戰士，不管是戰鬥還是挖礦都得心應手。只是完美的可兒卻有著一處致命傷，那就是她與其他矮人不同，不僅滴酒不沾，還曾經說出自己討厭喝酒的話。在一部分的矮人中，可兒不是矮人，而是其他與矮人很相近種族的傳言被許多人相信著。\n\n『酒什麼的最難喝了！』",
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
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.kani],
    thumbnail: UnitEssence[UnitCode.kani],
    selection: UnitSelection[UnitCode.kani],
    clothes: UnitFullImage[UnitCode.kani],
    tagList: [ 
        TagID.ELEMENT_WATER, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_SMALL_SIZED, 
        TagID.BREAST_FLAT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_KANI ],
    skillSet: []
}