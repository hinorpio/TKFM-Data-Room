import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10813: Unit = {
    ID: "10813",
    metaCode: "iyan",
    prefix: {
        [Locale.tc]: "白薔薇",
        [Locale.sc]: null,
        [Locale.en]: "White Rose",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "伊艾",
        [Locale.sc]: null,
        [Locale.en]: "Iyan",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "偽娘", "伊艾" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "從言行舉止上來看，伊艾怎麼看都是個女孩子，而且比女孩子更像女孩子。但他是男的。纖纖細腰胸脯小巧，身嬌體柔極易推倒。但他是男的。穿起迷你裙和洋裝非常可愛也非常合身。但他是男的。對伊艾來說，穿著可愛的服裝不僅是興趣，同時也是最厲害的武器。伊艾的臉上始終掛著治癒的微笑，而且他的態度溫和乖巧，總能讓人在不知不覺間對其百依百順。即便偶爾會露出不符外貌的狡詐表情與陰險的一面，他之後裝出的無辜神情，卻又讓人無法對其認真生氣。熟知自己優勢的伊艾，利用自己的外貌從他人那取得了不少好處。至少迄今為止，還沒有人能夠不拜倒在伊艾那魅惑的笑容之下。\n\n『呵呵～拜倒在人家的魅力之下吧～』",
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
    releaseDate: "2022/11/16",
    essence: UnitEssence[UnitCode.iyan],
    thumbnail: UnitEssence[UnitCode.iyan],
    selection: UnitSelection[UnitCode.iyan],
    clothes: UnitFullImage[UnitCode.iyan],
    tagList: [
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_HEALER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_SMALL_SIZED,
        TagID.BREAST_FLAT_TITS,
        TagID.OTHER_RECOVERY,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}