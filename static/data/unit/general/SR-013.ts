import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10046: Unit = {
    ID: "10046",
    metaCode: "janelle",
    prefix: {
        [Locale.tc]: "刺針",
        [Locale.sc]: null,
        [Locale.en]: "Stinger",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "嘉維爾",
        [Locale.sc]: null,
        [Locale.en]: "Janelle",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "刺針" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "某一日，娜娜的手下突然帶著嘉維爾去見她，說是一個人類毛遂自薦加入魔王軍。所有人都無法理解她那猜不透的笑容，又一副天不怕地不怕的態度。娜娜試了她的身手，卻立刻同意她加入自己的麾下。嘉維爾總是掛著憨厚的笑容，對任何事情總是有種搞不清楚狀況的反應。而後娜娜展開對她的詳細調查，確定這個人不是裝傻，而是真傻。雖說認知與反應相當的傻，但只要是委派給她的任務，總是會相當俐落的完成。除此之外，基本被叫做魔王軍第一傻大姊也不為過。\n\n『嘉維爾，也可以稱呼我為刺針，嘻嘻，我該做些什麼好呢？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/10/13",
    essence: UnitEssence[UnitCode.janelle],
    thumbnail: UnitEssence[UnitCode.janelle],
    selection: UnitSelection[UnitCode.janelle],
    clothes: UnitFullImage[UnitCode.janelle],
    tagList: [
        TagID.ELEMENT_WIND,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_HOT_TITS,
        TagID.CLASS_ELITE,
        TagID.OTHER_DAMAGE_OUTPUT,
    ], 
    otherVersion: [],
    puzzle: [],
    skillSet: []
}