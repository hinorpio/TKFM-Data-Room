import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10129: Unit = {
    ID: "10129",
    metaCode: "w_evie",
    prefix: {
        [Locale.tc]: "性誕馴鹿",
        [Locale.sc]: null,
        [Locale.en]: "Sexmas",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "馴鹿",
        [Locale.sc]: null,
        [Locale.en]: "Evie",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "風鹿", "性鹿" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "自從聖誕節被改造成性誕節之後，希依也跟著接受凱薩的「教育」，成為了一名合格的性誕馴鹿。現在的她，不僅性觀念變得開放，還穿上了隨時能和凱薩做愛的超暴露服裝。清純無知的少女一邊說著純真的話語，一邊露出了渴望做愛的癡態。雖然對外人而言，她的變化可以說是天翻地覆，但對希依來說，自己其實並沒有改變多少。不管外表變成什麼樣子，馴鹿少女期望為他人帶來幸福的心始終不曾改變。\n\n『不論是聖誕節還是性誕節，都是帶來歡樂的美好日子呢～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.PROTECTOR,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/12/13",
    essence: UnitEssence[UnitCode.w_evie],
    thumbnail: UnitEssence[UnitCode.w_evie],
    selection: UnitSelection[UnitCode.w_evie],
    clothes: UnitFullImage[UnitCode.w_evie],
    tagList: [],
    otherVersion: [ UnitCode.evie ],
    puzzle: [ PuzzleCode.EVENT_2023_XMAS_1 ],
    skillSet: []
}