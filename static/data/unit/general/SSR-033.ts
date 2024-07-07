import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10053: Unit = {
    ID: "10053",
    metaCode: "x_lana",
    prefix: {
        [Locale.tc]: "聖誕矮人王",
        [Locale.sc]: null,
        [Locale.en]: "Xmas Dwarf Queen",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "蘭兒",
        [Locale.sc]: null,
        [Locale.en]: "Lana",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "聖矮", "誕矮" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "聖誕節是矮人的節日，因為傳說的聖誕老人就是矮人一族之一，所以矮人們一直把這節日當作是神聖的節日。蘭兒也穿上了聖誕裝，準備和凱薩一起度過聖誕節，沒想到馴鹿竟然前來，述說聖誕節即將完蛋的消息。本來準備給凱薩驚喜的蘭兒不允許聖誕節被破壞，於是就和凱薩一起前往拯救聖誕節的旅途。\n\n『好孩子有禮物和美酒，壞孩子要吃斧頭，這就是矮人族的聖誕節。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/12/15",
    essence: UnitEssence[UnitCode.x_lana],
    thumbnail: UnitEssence[UnitCode.x_lana],
    selection: UnitSelection[UnitCode.x_lana],
    clothes: UnitFullImage[UnitCode.x_lana],
    tagList: [],
    otherVersion: [ UnitCode.lana ],
    puzzle: [ PuzzleCode.EVENT_2021_XMAS_1 ],
    skillSet: []
}