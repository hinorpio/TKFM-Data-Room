import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10139: Unit = {
    ID: "10139",
    metaCode: "p_tyrella",
    prefix: {
        [Locale.tc]: "不健全遐想",
        [Locale.sc]: null,
        [Locale.en]: "Delusional Rival",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "托特拉",
        [Locale.sc]: null,
        [Locale.en]: "Tyrella",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "睡托" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "為了打倒邪惡的魔王凱薩，托特拉潛入反派勢力居住的城堡，伺機而動，對魔王發起了一次又一次的挑戰。雖然每次戰敗都會被凱薩做色色的事情，而且從來都沒有贏過，但身為愛與正義的魔法少女，她是絕對不會放棄的！某天，托特拉聽見反魔王聯盟的好夥伴露露說，她想要舉辦一場睡衣派對。為了支援自己的夥伴，她當然沒有任何猶豫，馬上答應一起幫忙。雖然露露借給她的睡衣不知為何地過於暴露，讓她感到有點難為情，不過，這並不是問題！身為正義的魔法少女，今晚，她也要給朋友們散播滿滿的愛與勇氣！\n\n『大家！一起來參加露露舉辦的睡衣派對吧！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/04/02",
    essence: UnitEssence[UnitCode.p_tyrella],
    thumbnail: UnitEssence[UnitCode.p_tyrella],
    selection: UnitSelection[UnitCode.p_tyrella],
    clothes: UnitFullImage[UnitCode.p_tyrella],
    tagList: [],
    otherVersion: [ UnitCode.tyrella ],
    puzzle: [],
    skillSet: []
}