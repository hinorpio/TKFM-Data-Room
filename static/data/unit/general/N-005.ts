import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10905: Unit = {
    ID: "10905",
    metaCode: "kikyou",
    prefix: {
        [Locale.tc]: "烈日國武士",
        [Locale.sc]: null,
        [Locale.en]: "Isori Warrior",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "桔梗",
        [Locale.sc]: null,
        [Locale.en]: "Kikyou",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "桔梗" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "桔梗從小就修習劍術，並對陰陽術和妖術等十分厭惡，認為會去修習那些的都是邪魔歪道。雖然本身十分喜歡練劍，但是天分有限，即使再怎麼修行，也只是比一般人稍強的水準。\n\n『武士就是要謹守本分！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.FIRE,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.kikyou],
    thumbnail: UnitEssence[UnitCode.kikyou],
    selection: UnitSelection[UnitCode.kikyou],
    clothes: UnitFullImage[UnitCode.kikyou],
    tagList: [ 
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_WEAKEN,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_KIKYOU ],
    skillSet: []
}