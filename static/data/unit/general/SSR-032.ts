import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10052: Unit = {
    ID: "10052",
    metaCode: "x_aiko",
    prefix: {
        [Locale.tc]: "暗黑聖誕",
        [Locale.sc]: null,
        [Locale.en]: "Dark Christmas",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "艾可",
        [Locale.sc]: null,
        [Locale.en]: "Aiko",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "黑艾", "聖艾" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "魔管家艾可有一個人盡皆知的秘密，那就是每到聖誕節，她就會性情大變。原本像個依順小動物，就算凱薩臨幸他人也不以為意的她。一旦聽到聖誕節的字眼，她將會徹底轉變成另外一個人，性格180度大轉變。之所以會變成這樣，是因為艾可從小就沒有度過聖誕節過，一個人孤苦伶仃。所以極度厭恨聖誕節，身體產生了打從心底抗拒聖誕節的因子。艾可將會排除所有試圖誘惑凱薩過聖誕節的女人，破壞所有想要慶祝聖誕節的商店。就算對象是聖誕老人，她也照殺不誤。\n\n『聖誕節…令人憎恨的節日，這到底有什麼好慶祝的？』",
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
    releaseDate: "2021/12/15",
    essence: UnitEssence[UnitCode.x_aiko],
    thumbnail: UnitEssence[UnitCode.x_aiko],
    selection: UnitSelection[UnitCode.x_aiko],
    clothes: UnitFullImage[UnitCode.x_aiko],
    tagList: [],
    otherVersion: [ UnitCode.xx_aiko ],
    puzzle: [],
    skillSet: []
}