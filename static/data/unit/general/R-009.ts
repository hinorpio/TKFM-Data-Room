import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10812: Unit = {
    ID: "10812",
    metaCode: "panana",
    prefix: {
        [Locale.tc]: "南瓜仙子",
        [Locale.sc]: null,
        [Locale.en]: "Pumpkin Fairy",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "帕奈奈",
        [Locale.sc]: null,
        [Locale.en]: "Panana",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "南瓜", "帕奈奈" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "經歷千年未腐爛的南瓜燈幻化而成的小仙子。累積了千年的魔力因此在誕生的瞬間魔力大量暴走。導致萬聖夜布蘭妮變小惡魔，賽露西亞返老還童的元兇。本人其實覺得很麻煩，但是被迫跟著小惡魔布蘭妮收拾殘局。因為剛剛才修煉成仙子，因此對自己法力的掌控出奇的差。無意間就會因此小小的魔法暴走。本人對於造成的損害一概採取「與我無關，不要煩我」的態度。\n\n『好麻煩啊……就不能找別人去收拾嗎？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.R,
    element: Element.DARK,
    position: Position.HEALER,
    potential: PotentialType.NR,
    isLimited: true,
    releaseDate: "2021/10/27",
    essence: UnitEssence[UnitCode.panana],
    thumbnail: UnitEssence[UnitCode.panana],
    selection: UnitSelection[UnitCode.panana],
    clothes: UnitFullImage[UnitCode.panana],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}