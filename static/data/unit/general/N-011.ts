import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10911: Unit = {
    ID: "10911",
    metaCode: "clarie",
    prefix: {
        [Locale.tc]: "主神教團僧兵",
        [Locale.sc]: null,
        [Locale.en]: "Excelsis Deo Monk",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "克蕾雅",
        [Locale.sc]: null,
        [Locale.en]: "Clarie",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "教僧" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "克蕾雅從小就因為戰亂而失去雙親，進而被送去給主神教團收養。雖然她失去了親情，但取而代之的是她得到了主神的青睞，她相信所有困難都是主神給予世人的試煉，並希望死後能進入主神所在的天界，繼續侍奉主神。\n\n『神吶，我是您忠心的僕人。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.LIGHT,
    position: Position.HEALER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.clarie],
    thumbnail: UnitEssence[UnitCode.clarie],
    selection: UnitSelection[UnitCode.clarie],
    clothes: UnitFullImage[UnitCode.clarie],
    tagList: [ 
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_HEALER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_RECOVERY,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_CLARIE ],
    skillSet: []
}