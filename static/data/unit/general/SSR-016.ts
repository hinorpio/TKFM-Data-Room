import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10030: Unit = {
    ID: "10030",
    metaCode: "s_lulu",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
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
        [Locale.tc]: [ "夏露", "泳露", "鴨" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "只想安逸度日的公主，如今挺立於沙灘之上。聽聞要到海邊玩耍的消息，比以往更亢奮的靜強迫將露露從舒適房間拖了出來。雖然換好了泳裝，但入水即沉的旱鴨子體質，讓露露打定了絕不下水的主意。不止不下水，就連離開遮陽傘的底下都全力拒絕！毒辣的太陽、光是踩上去就會燙人腳底板的沙灘…嗚嗚，露露已經想回家了啦！\n\n『人家不要下水，絕對不要…呀啊，浪打過來了！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2021/05/28",
    essence: UnitEssence[UnitCode.s_lulu],
    thumbnail: UnitEssence[UnitCode.s_lulu],
    selection: UnitSelection[UnitCode.s_lulu],
    clothes: UnitFullImage[UnitCode.s_lulu],
    tagList: [],
    otherVersion: [ UnitCode.lulu, UnitCode.w_lulu, UnitCode.c_lulu ],
    puzzle: [ PuzzleCode.EVENT_2021_SUMMER_2 ],
    skillSet: []
}