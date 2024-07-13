import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10912: Unit = {
    ID: "10912",
    metaCode: "lori",
    prefix: {
        [Locale.tc]: "史萊姆娘",
        [Locale.sc]: null,
        [Locale.en]: "Slime-Girl",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "蘿爾",
        [Locale.sc]: null,
        [Locale.en]: "Lori",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "萊姆", "母雞" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "蘿爾雖然是有智慧的高等史萊姆，但她卻非常討厭思考。每天都是發呆的過整天，對她來說沒有甚麼事比發呆更棒了。由於擁有不錯的美貌，冒險者路過通常也不忍對她下手。今天也是和平的一天。\n\n『嗯……』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.WATER,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.lori],
    thumbnail: UnitEssence[UnitCode.lori],
    selection: UnitSelection[UnitCode.lori],
    clothes: UnitFullImage[UnitCode.lori],
    tagList: [ 
        TagID.ELEMENT_WATER, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_SMALL_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_WEAKEN,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.DEMON_LORI ],
    skillSet: []
}