import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10904: Unit = {
    ID: "10904",
    metaCode: "manuella",
    prefix: {
        [Locale.tc]: "魔族法師",
        [Locale.sc]: null,
        [Locale.en]: "Sorceress",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "瑪努艾拉",
        [Locale.sc]: null,
        [Locale.en]: "Manuella",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "瑪努", "魔族法師" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "瑪努艾拉從懂事起就理解自己所擔任的職務，壞人與反派，她也對此深信不疑。她經常入侵人類領地，並以屠殺人類村民為樂。對瑪努艾來說，只要不是魔族的傢伙都是敵人，就是這麼簡單。\n\n『嘻嘻，今天要殺幾個好呢？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.manuella],
    thumbnail: UnitEssence[UnitCode.manuella],
    selection: UnitSelection[UnitCode.manuella],
    clothes: UnitFullImage[UnitCode.manuella],
    tagList: [ 
        TagID.ELEMENT_DARK, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.DEMON_MANUELLA ],
    skillSet: []
}