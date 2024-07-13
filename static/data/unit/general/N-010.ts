import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10910: Unit = {
    ID: "10910",
    metaCode: "martina",
    prefix: {
        [Locale.tc]: "聖光騎士",
        [Locale.sc]: null,
        [Locale.en]: "Holy Knight",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "瑪蒂娜",
        [Locale.sc]: null,
        [Locale.en]: "Martina",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "瑪蒂娜" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "瑪蒂娜是虔誠的主神教團教徒，如果沒有加入騎士團，或許她就會成為修女。雖然她不曾見過神蹟，但她相信主神才是唯一的真神，比起刀劍，唯有堅定的信仰才是人類對抗魔族的最好武器。\n\n『聖光騎士團榮光永在！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.LIGHT,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.martina],
    thumbnail: UnitEssence[UnitCode.martina],
    selection: UnitSelection[UnitCode.martina],
    clothes: UnitFullImage[UnitCode.martina],
    tagList: [ 
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_MARTINA ],
    skillSet: []
}