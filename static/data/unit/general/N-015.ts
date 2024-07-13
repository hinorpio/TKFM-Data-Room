import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10915: Unit = {
    ID: "10915",
    metaCode: "harpy",
    prefix: {
        [Locale.tc]: "鳥身女妖",
        [Locale.sc]: null,
        [Locale.en]: "Bird-Girl",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "哈比",
        [Locale.sc]: null,
        [Locale.en]: "Harpy",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "哈比", "鳥" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "鳥身女妖的哈比是襲擊路過旅客與冒險者的慣犯。但她瞄準的並不是路人的性命，而是他們身上閃亮亮的東西，只要願意乖乖交出亮晶晶的東西，諸如金幣、寶石，她就會心滿意足的離開。因為哈比的腦袋不好，最近旅客們開始隨身攜帶玻璃珠，看是否能以此蒙混過關。\n\n『嘎，亮晶晶的東西通通交出來！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.WIND,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.harpy],
    thumbnail: UnitEssence[UnitCode.harpy],
    selection: UnitSelection[UnitCode.harpy],
    clothes: UnitFullImage[UnitCode.harpy],
    tagList: [ 
        TagID.ELEMENT_WIND, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_INTERFERENCE,
        TagID.OTHER_WEAKEN,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.DEMON_HARPY ],
    skillSet: []
}