import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10913: Unit = {
    ID: "10913",
    metaCode: "minnow",
    prefix: {
        [Locale.tc]: "牛女",
        [Locale.sc]: null,
        [Locale.en]: "Cow-Girl",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "米諾",
        [Locale.sc]: null,
        [Locale.en]: "Minnow",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "牛女", "牛" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "米諾是牛人一族，天生就力大無窮。個性溫和的她最喜歡跟大夥一起用餐，只是由於種族原因，認為喝牛奶就像是在喝同族的體液，所以極度厭惡牛奶。\n\n『用餐時間到囉～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.WIND,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.minnow],
    thumbnail: UnitEssence[UnitCode.minnow],
    selection: UnitSelection[UnitCode.minnow],
    clothes: UnitFullImage[UnitCode.minnow],
    tagList: [ 
        TagID.ELEMENT_WIND, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_GIANT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_INTERFERENCE,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.DEMON_MINNOW ],
    skillSet: []
}