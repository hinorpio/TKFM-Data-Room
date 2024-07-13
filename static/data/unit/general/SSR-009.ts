import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10026: Unit = {
    ID: "10026",
    metaCode: "noel",
    prefix: {
        [Locale.tc]: "偶像",
        [Locale.sc]: null,
        [Locale.en]: "Idol",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "黑白諾艾莉",
        [Locale.sc]: null,
        [Locale.en]: "Noel",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "黑白", "黑" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "QZ-Ⅻ黑白諾艾莉是古代文明帝國的魔導人偶，正式名稱為QZ型Ⅻ號機。當魔導技術發展到極限時，人類的基礎需求得到滿足，改為追求精神上的富足。偶像文化因應而生。為了開發出歷久不衰的偶像，不會衰老，搭配著情感高級AI與成長功能，如真人般的偶像型魔導人偶誕生了。因為有被他人寵愛著的自覺，諾艾莉個性嬌蠻且行事我行我素。她認為自己作為偶像的使命就是給眾人帶來希望與夢想，因此她必須成為最閃耀的一顆星。從失落的遺跡中醒來，諾艾莉離開後發現世界出現的驚天的變化。但是不管是什麼年代，偶像就是偶像，為了成為他人的中心，並且給眾人帶來愛與夢想。即使只有自己一人，諾艾莉毅然踏上了旅途。\n\n『來一場久違的全國巡演吧～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2021/02/03",
    essence: UnitEssence[UnitCode.noel],
    thumbnail: UnitEssence[UnitCode.noel],
    selection: UnitSelection[UnitCode.noel],
    clothes: UnitFullImage[UnitCode.noel],
    tagList: [],
    otherVersion: [ UnitCode.s_noel, UnitCode.w_noel ],
    puzzle: [],
    skillSet: []
}