import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10068: Unit = {
    ID: "10068",
    metaCode: "lotus",
    prefix: {
        [Locale.tc]: "元氣補給",
        [Locale.sc]: null,
        [Locale.en]: "Health Nut",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "蓮",
        [Locale.sc]: null,
        [Locale.en]: "Lotus",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "蓮" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "無父無母的蓮從小就在垃圾堆裡翻找食物才得以生存。村裡善心的廚師知道後，將蓮收為徒弟，也提供蓮吃住的地方。蓮因此立下目標，要成為偉大的廚師。多年後，她終於開始了在外闖蕩的生活。決心要在旅程中，用料理拯救更多需要幫助的人！……不過這個目標要先等蓮把自己餵飽再說。\n\n『大家一起享用美味的料理吧～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/09/29",
    essence: UnitEssence[UnitCode.lotus],
    thumbnail: UnitEssence[UnitCode.lotus],
    selection: UnitSelection[UnitCode.lotus],
    clothes: UnitFullImage[UnitCode.lotus],
    tagList: [
        TagID.ELEMENT_FIRE,
        TagID.POSITION_HEALER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_SUPPORT,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.EVENT_2023_XMAS_2 ],
    skillSet: []
}