import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10106: Unit = {
    ID: "10106",
    metaCode: "ny_salucia",
    prefix: {
        [Locale.tc]: "絕代佳人",
        [Locale.sc]: null,
        [Locale.en]: "Elegance Personified",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "賽露西亞",
        [Locale.sc]: null,
        [Locale.en]: "Salucia",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "春精", "春王" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "雖說自己在成為魔王凱薩的後宮之後，已經見識到了更寬廣的世界。但她的族人們卻依舊故步自封，不願離開森林，主動踏足外界。為了解決這個問題，精靈女王露出充滿心機的笑容，和魔王凱薩一同策畫了這場祭典。若是溫和的勸說無法改變自己的族人，那就只好用一些較為刺激、激烈的方式來導正他們了。\n\n『悄悄告訴您，雖然精靈不喜歡爭鬥，但好勝心是很強的唷。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/01/18",
    essence: UnitEssence[UnitCode.ny_salucia],
    thumbnail: UnitEssence[UnitCode.ny_salucia],
    selection: UnitSelection[UnitCode.ny_salucia],
    clothes: UnitFullImage[UnitCode.ny_salucia],
    tagList: [],
    otherVersion: [ UnitCode.salucia, UnitCode.h_salucia ],
    puzzle: [],
    skillSet: []
}