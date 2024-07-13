import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';
import puzzles from '../../puzzle';

export const General_10919: Unit = {
    ID: "10919",
    metaCode: "punishment",
    prefix: {
        [Locale.tc]: "",
        [Locale.sc]: null,
        [Locale.en]: "Angel of",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "懲戒天使",
        [Locale.sc]: null,
        [Locale.en]: "Punishment",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "懲戒" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "天界是主神的住所，而天使則是服侍神的僕人。最下級的天使沒有自己的名字，只以職階稱呼。雖然有個體上的性格差異，但大多數天使都只會遵循主神制定的規則行事，少有主見。懲戒主要職務為討伐主神的敵人，守護主神下令庇護的種族。在世人面臨威脅時，降臨並負責作戰的多為懲戒天使。\n\n『給予爾等主神的懲罰。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.WATER,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/07/14",
    essence: UnitEssence[UnitCode.punishment],
    thumbnail: UnitEssence[UnitCode.punishment],
    selection: UnitSelection[UnitCode.punishment],
    clothes: UnitFullImage[UnitCode.punishment],
    tagList: [ 
        TagID.ELEMENT_WATER, 
        TagID.POSITION_PROTECTOR, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.SKY_PUNISHMENT, PuzzleCode.SKY_BLISS ],
    skillSet: []
}