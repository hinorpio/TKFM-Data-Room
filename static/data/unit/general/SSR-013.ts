import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10028: Unit = {
    ID: "10028",
    metaCode: "chizuru",
    prefix: {
        [Locale.tc]: "復生公主",
        [Locale.sc]: null,
        [Locale.en]: "Risen Princess",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "千鶴",
        [Locale.sc]: null,
        [Locale.en]: "Chizuru",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "普千", "普鶴", "解鶴", "鶴" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "千鶴是烈日國的公主。即使在魔族大軍包圍皇都，烈日國的皇帝與貴族都感到絕望時依然不改樂觀向上的心。一向與循規蹈矩無關的千鶴，在城破時履行了作為皇室成員的義務捨身殉國。在從小隨侍的女忍陪同下，安然的永眠。…本該迎來這樣的結局，但是在死後的一天，千鶴卻像是睡醒一樣爬出了墳墓。曾經生存的國家已經被魔族佔領，生前認識的父皇、母后，以及兄弟姊妹都已經不在告別人類的身份，以不死生物之身重新踏入人世的千鶴未來將何去何從？\n\n『為了確保飲食，首先必須找到營生工作…啊，不死族應該不需要吃東西吧？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/04/21",
    essence: UnitEssence[UnitCode.chizuru],
    thumbnail: UnitEssence[UnitCode.chizuru],
    selection: UnitSelection[UnitCode.chizuru],
    clothes: UnitFullImage[UnitCode.chizuru],
    tagList: [ 3, 6, 12, 15, 21, 22, 29 ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}