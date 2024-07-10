import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10043: Unit = {
    ID: "10043",
    metaCode: "h_salucia",
    prefix: {
        [Locale.tc]: "機靈古怪",
        [Locale.sc]: null,
        [Locale.en]: "Halloween Queen",
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
        [Locale.tc]: [ "幼精", "萬精", "小王" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "因南瓜仙子的萬聖節魔法的影響，回到了年輕時代。性格也因魔法影響變得調皮搗蛋。獲得了將所碰觸的物品變成糖果的神奇能力。利用這個能力開始在萬聖夜四處作亂，惹出麻煩。究竟萬聖夜後是否能夠變回成熟穩重的賽露西亞呢？\n\n『我現在可不是精靈女王——是萬聖夜之王！』",
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
    releaseDate: "2021/10/27",
    essence: UnitEssence[UnitCode.h_salucia],
    thumbnail: UnitEssence[UnitCode.h_salucia],
    selection: UnitSelection[UnitCode.h_salucia],
    clothes: UnitFullImage[UnitCode.h_salucia],
    tagList: [],
    otherVersion: [ UnitCode.salucia, UnitCode.ny_salucia ],
    puzzle: [],
    skillSet: []
}