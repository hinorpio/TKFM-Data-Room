import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10062: Unit = {
    ID: "10062",
    metaCode: "sherana",
    prefix: {
        [Locale.tc]: "異國商人",
        [Locale.sc]: null,
        [Locale.en]: "Foreign Merchant",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "雪蘭瑚",
        [Locale.sc]: null,
        [Locale.en]: "Sherana",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "商人", "雪狐" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "雪蘭瑚是個從遙遠異國乘船前來經商的奇物商人。她經手許多只有異國才有的珍稀商品，在人間界賺了個盆滿缽滿。然而，因為和巴爾商會的分成喬不攏的關係，她遲遲得不到經商許可，無法在魔界開拓商路。將利益視為第一優先的她，並沒有浪費這段討價還價的時間。雪蘭瑚早早便將『情報』作為新的主打商品，在短時間內，訂定了下一步的發展計畫。在偏遠的鄉村埋下眼線，逐步包圍城市並建構情報網。商業眼光銳利的她知道，這一手棋將會是自己突破僵局、賺進大筆資金的大好機會。\n\n『唉呦呦，這樣人家不就虧大了嗎？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/11/16",
    essence: UnitEssence[UnitCode.sherana],
    thumbnail: UnitEssence[UnitCode.sherana],
    selection: UnitSelection[UnitCode.sherana],
    clothes: UnitFullImage[UnitCode.sherana],
    tagList: [
        TagID.ELEMENT_WATER,
        TagID.POSITION_HEALER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_SUPPORT,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}