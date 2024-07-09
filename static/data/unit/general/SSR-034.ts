import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10054: Unit = {
    ID: "10054",
    metaCode: "evie",
    prefix: {
        [Locale.tc]: "聖誕馴鹿",
        [Locale.sc]: null,
        [Locale.en]: "Xmas Reindeer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "希伊",
        [Locale.sc]: null,
        [Locale.en]: "Evie",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "馴鹿", "鹿", "CE" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "希依對聖誕老人完全忠心耿耿，雖然外表亮麗，但至今仍然是處子之身。對於送小孩禮物一事感到開心，一整年最期待的就是聖誕節那一天。由於聖誕老人出事，所以只好委託當今最有權勢的凱薩大人幫忙製造玩具，代價則是獻出自己的身體。對於希依來說，只要能讓小孩子們開心，就算獻出自己的身體也沒關係。\n\n『Jingle bells～jingle bells～Jingle all the way～（歌聲）』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2021/12/15",
    essence: UnitEssence[UnitCode.evie],
    thumbnail: UnitEssence[UnitCode.evie],
    selection: UnitSelection[UnitCode.evie],
    clothes: UnitFullImage[UnitCode.evie],
    tagList: [],
    otherVersion: [],
    puzzle: [ PuzzleCode.EVENT_2021_XMAS_1 ],
    skillSet: []
}