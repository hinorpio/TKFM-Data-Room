import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10811: Unit = {
    ID: "10811",
    metaCode: "jolina",
    prefix: {
        [Locale.tc]: "冷豔美醫",
        [Locale.sc]: null,
        [Locale.en]: "Cold Doctor",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "嘉莉娜",
        [Locale.sc]: null,
        [Locale.en]: "Jolina",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "美醫" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "法斯帝國的醫護官，會隨軍至最前線協助。標準的冰山美人，即使面對重傷病患也毫無感情的冷靜處理。醫術精湛，且因冷靜沉穩的手法讓傷患接受治療時的痛苦可以降到最低。沒有必要的話，一天開口說的話語可以不超過10句。但一旦說出口便是一針見血的真知灼見，並且不會顧及所說的話是否傷人自尊。\n\n『……又一個半殘是嗎？就放在那裡吧。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.R,
    element: Element.FIRE,
    position: Position.HEALER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/12/01",
    essence: UnitEssence[UnitCode.jolina],
    thumbnail: UnitEssence[UnitCode.jolina],
    selection: UnitSelection[UnitCode.jolina],
    clothes: UnitFullImage[UnitCode.jolina],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}