import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10143: Unit = {
    ID: "10143",
    metaCode: "s_salucia",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
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
        [Locale.tc]: [ "夏精" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "有人說精靈只喜歡森林，不喜歡大海，這是不太正確的結論。絕大部分的精靈在她們漫長的人生中都沒看過大海，但看過大海的精靈無一都會愛上這壯闊而浩瀚的湛藍水色。至少賽露西亞就是這樣。她以前曾見過一次大海，而那時的她認為大海十分美麗且震撼人心，就和她看過的許多景色一樣。可是，這一次的夏天，她和那個人一起來到了烈日國的海灘。依舊波瀾壯闊的大海，配上有趣的同伴以及凱薩大人，賽露西亞相信，這趟假期一定會變成一場充滿驚喜和樂趣的旅程。\n\n『好久沒看見大海了，真懷念呢。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/06/05",
    essence: UnitEssence[UnitCode.s_salucia],
    thumbnail: UnitEssence[UnitCode.s_salucia],
    selection: UnitSelection[UnitCode.s_salucia],
    clothes: UnitFullImage[UnitCode.s_salucia],
    tagList: [],
    otherVersion: [ UnitCode.salucia, UnitCode.h_salucia, UnitCode.ny_salucia ],
    puzzle: [ PuzzleCode.EVENT_2024_SUMMER_2 ],
    skillSet: []
}