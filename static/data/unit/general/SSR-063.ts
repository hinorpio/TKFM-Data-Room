import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10095: Unit = {
    ID: "10095",
    metaCode: "h_leona",
    prefix: {
        [Locale.tc]: "見習聖騎士",
        [Locale.sc]: null,
        [Locale.en]: "Knight in Training",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "雷歐娜",
        [Locale.sc]: null,
        [Locale.en]: "Leona",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "幼騎", "小騎", "小聖騎" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "在逮捕竊盜犯洛緹亞的過程中，雷歐娜被對方的魔法擊中，結果卻意外變成了過去的模樣。而且不只肉體，就連精神似乎都變成了還是見習聖騎士的狀態？！雖然聽神官說魔族是殘忍且邪惡的種族，然而實際接觸後卻不是這麼一回事。教會的教育以及現實的衝突，不禁讓雷歐娜陷入迷惘。只是迷惘歸迷惘，眼前若有人需要幫助伸出手是理所當然的。即使身體縮小了，正義感也不減半分。目標是拯救被擄走的少女以及取回帕奈奈的魔力罐！跟隨南瓜仙子帕奈奈以及被意外捲入的小精靈王賽露西亞一同踏上冒險。\n\n『我是雷歐娜，立志成為萬眾景仰的正義聖騎士！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2022/10/26",
    essence: UnitEssence[UnitCode.h_leona],
    thumbnail: UnitEssence[UnitCode.h_leona],
    selection: UnitSelection[UnitCode.h_leona],
    clothes: UnitFullImage[UnitCode.h_leona],
    tagList: [],
    otherVersion: [ UnitCode.leona ],
    puzzle: [],
    skillSet: []
}