import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10801: Unit = {
    ID: "10801",
    metaCode: "irene",
    prefix: {
        [Locale.tc]: "雙蛇軍團護士長",
        [Locale.sc]: null,
        [Locale.en]: "Head Nurse",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "艾琳",
        [Locale.sc]: null,
        [Locale.en]: "Irene",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "人妻", "艾琳", "護士長" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "艾琳是雙蛇軍團的護士長，身為護士長的她除了長相貌美以外，也是團長克里斯的愛妻，在團內深得人望，被眾人所敬重。性格溫柔，但也有著堅毅的一面。與克里斯相愛的艾琳一直渴望著能擁有自己的孩子，但是考慮到丈夫的工作，善解人意的她從未將此事說出口。然而在一次的委託中克里斯身受重傷，為了保住丈夫的性命，艾琳瞞著克里斯做出了一件重要的決定……\n\n『我做的這一切都是為了克里斯……』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.R,
    element: Element.LIGHT,
    position: Position.HEALER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.irene],
    thumbnail: UnitEssence[UnitCode.irene],
    selection: UnitSelection[UnitCode.irene],
    clothes: UnitFullImage[UnitCode.irene],
    tagList: [ 
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_HEALER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_GIANT_TITS, 
        TagID.OTHER_RECOVERY,
    ],
    otherVersion: [ UnitCode.d_irene ],
    puzzle: [],
    skillSet: []
}