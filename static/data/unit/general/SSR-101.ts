import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10022: Unit = {
    ID: "10022",
    metaCode: "noma",
    prefix: {
        [Locale.tc]: "狂犬",
        [Locale.sc]: null,
        [Locale.en]: "Crazed Dog",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "諾蕾蒂",
        [Locale.sc]: null,
        [Locale.en]: "Noma",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "狂犬" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "來自不同大陸，重視科技和工業國家的精銳軍人。帶著開闢以及征服的使命而來…雖然是這麼說，但也只是偵察部隊而已。因為原大陸的戰爭已經結束，過於好戰的諾蕾蒂以及她的部隊因為難以處理而被交付了探索新大陸的使命派了出來。儘管知道原本「飼主」心底的算盤，不過對於和平的生活沒有任何的眷念，所以諾蕾蒂開心的接下了工作。跨海而來，使用著與魔法截然不同體系的武器，諾蕾蒂與她忠誠的部隊登上了新大陸……\n\n『好不容易到了沒有肥豬上司扯後腿的新大陸，就盛大的鬧一場吧！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/01/17",
    essence: UnitEssence[UnitCode.noma],
    thumbnail: UnitEssence[UnitCode.noma],
    selection: UnitSelection[UnitCode.noma],
    clothes: UnitFullImage[UnitCode.noma],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}