import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10131: Unit = {
    ID: "10131",
    metaCode: "inase",
    prefix: {
        [Locale.tc]: "時御者",
        [Locale.sc]: null,
        [Locale.en]: "Timekeeper",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "伊娜絲",
        [Locale.sc]: null,
        [Locale.en]: "Inase",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "時御", "轉筆" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "熱愛鑽研古文明、散發書卷氣息的學者。過去曾為了復活死去的愛人，解開原慾之神艾洛斯的封印，爾後成為了與他擁有著親密關係的眷族。在和艾洛斯追捕逃脫目標的過程中意外被捲入時空裂縫，來到了一處未曾聽聞過的奇妙世界。儘管有些慌張，但面對一個全新的世界，伊娜絲心中對於考古的熱情反倒壓過了這股不安。\n\n『能夠學習不同世界的知識與文化讓我感到非常興奮，雖然這個世界的某些習俗好像有點奇怪……』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/11/15",
    essence: UnitEssence[UnitCode.inase],
    thumbnail: UnitEssence[UnitCode.inase],
    selection: UnitSelection[UnitCode.inase],
    clothes: UnitFullImage[UnitCode.inase],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}