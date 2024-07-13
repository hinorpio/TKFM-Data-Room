import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10061: Unit = {
    ID: "10061",
    metaCode: "teresa",
    prefix: {
        [Locale.tc]: "地方媽媽",
        [Locale.sc]: null,
        [Locale.en]: "Local Housewife",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "提爾絲",
        [Locale.sc]: null,
        [Locale.en]: "Teresa",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "羊媽", "媽媽" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: '地方上的好媽媽，提爾絲。料理一流、對人和善、被街坊鄰居們喜愛的地方女仕。提爾絲她已經是七個孩子的媽媽了，不過因為孩子們都外出工作，所以如今一個人獨自住在屋子裏面，略顯寂寞。雖然被暱稱為"羊媽"，但是提爾絲不是山羊，而是薩提爾一族。而薩提爾一族可是以超下流的享樂主義種族聞名……也難怪她會是七個孩子的媽了。\n\n『想不想和阿姨玩個『小遊戲』呢？』',
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SR,
    element: Element.FIRE,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2021/09/08",
    essence: UnitEssence[UnitCode.teresa],
    thumbnail: UnitEssence[UnitCode.teresa],
    selection: UnitSelection[UnitCode.teresa],
    clothes: UnitFullImage[UnitCode.teresa],
    tagList: [], 
    otherVersion: [],
    puzzle: [],
    skillSet: []
}