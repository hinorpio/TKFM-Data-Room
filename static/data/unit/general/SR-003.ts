import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10011: Unit = {
    ID: "10011",
    metaCode: "fiora",
    prefix: {
        [Locale.tc]: "神官長",
        [Locale.sc]: null,
        [Locale.en]: "High Priestess",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "菲歐菈",
        [Locale.sc]: null,
        [Locale.en]: "Fiora",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "神官" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "菲歐菈是主神教團中的一名神官，溫柔體貼且信仰虔誠，精通治療術和驅魔術，在對付魔族時從來沒有失手過。因為驅逐魔族的功績以及民間的人望，菲歐菈成為了主神教團裡年紀最輕的神官長，位高權重。雖然被譽為最具親和力的神官長，並且深受愛戴，但本人卻對於該怎麼在民眾間樹立起自己做為神官長的威嚴一事傷透了腦筋……\n\n『神吶，請賜予我勇氣跨越眼前的難關。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SR,
    element: Element.LIGHT,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.fiora],
    thumbnail: UnitEssence[UnitCode.fiora],
    selection: UnitSelection[UnitCode.fiora],
    clothes: UnitFullImage[UnitCode.fiora],
    tagList: [
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_HEALER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_RECOVERY,
    ], 
    otherVersion: [ UnitCode.hm_fiora, UnitCode.s_fiora ],
    puzzle: [],
    skillSet: []
}