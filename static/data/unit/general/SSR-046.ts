import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10076: Unit = {
    ID: "10076",
    metaCode: "w_lulu",
    prefix: {
        [Locale.tc]: "夢遊魔境",
        [Locale.sc]: null,
        [Locale.en]: "Wonderland",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "露露",
        [Locale.sc]: null,
        [Locale.en]: "Lulu",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "夢露" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "只想在城堡安然度日的露露，某日闔上眼後卻落入了不可思議的國度。奇怪的兔子、過勞的貓、史萊姆和哈比，為什麼到處都找不到凱薩大人？！膽小的公主為了脫離現況，在奇怪的夢境世界中，利用自己的頭腦和開茶會的能力，一步步成為下午茶女王。\n\n『紙牌革命！捍衛午睡的正當權利與安全！』——《露露公主夢遊魔境》",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/04/20",
    essence: UnitEssence[UnitCode.w_lulu],
    thumbnail: UnitEssence[UnitCode.w_lulu],
    selection: UnitSelection[UnitCode.w_lulu],
    clothes: UnitFullImage[UnitCode.w_lulu],
    tagList: [],
    otherVersion: [ UnitCode.lulu, UnitCode.s_lulu, UnitCode.c_lulu ],
    puzzle: [],
    skillSet: []
}