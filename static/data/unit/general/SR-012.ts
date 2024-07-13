import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10051: Unit = {
    ID: "10051",
    metaCode: "pulicia",
    prefix: {
        [Locale.tc]: "最後的銀龍",
        [Locale.sc]: null,
        [Locale.en]: "Last of the Sliver Dragons",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "普莉希拉",
        [Locale.sc]: null,
        [Locale.en]: "Pulicia",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "銀龍" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "銀龍一族的最後倖存者。世代居住於雪山的銀龍被視為當地的聖龍，領地意識極強的龍族無形中守護了當地的和平。但在與以宣洩暴力瘋狂的魔龍之間發生鬥爭，最後以銀龍一族的生命為代價，將魔龍封印至雪山深處。殘存下來的普莉希拉作為最後的銀龍，負責守護這個封印。\n\n『你好，如果沒有其他事情的話我先走了，並不是討厭你，只是我喜歡一個人獨處。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SR,
    element: Element.DARK,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/09/29",
    essence: UnitEssence[UnitCode.pulicia],
    thumbnail: UnitEssence[UnitCode.pulicia],
    selection: UnitSelection[UnitCode.pulicia],
    clothes: UnitFullImage[UnitCode.pulicia],
    tagList: [
        TagID.ELEMENT_DARK,
        TagID.POSITION_OBSTRUCTER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BREAST_HOT_TITS,
        TagID.CLASS_ELITE,
        TagID.OTHER_WEAKEN,
    ], 
    otherVersion: [],
    puzzle: [],
    skillSet: []
}