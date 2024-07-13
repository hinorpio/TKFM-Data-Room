import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10920: Unit = {
    ID: "10920",
    metaCode: "bliss",
    prefix: {
        [Locale.tc]: "",
        [Locale.sc]: null,
        [Locale.en]: "Angel of",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "福音天使",
        [Locale.sc]: null,
        [Locale.en]: "Bliss",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "福音" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "天界是主神的住所，而天使則是服侍神的僕人。最下級的天使沒有自己的名字，只以職階稱呼。雖然有個體上的性格差異，但大多數天使都只會遵循主神制定的規則行事，少有主見。福音天使主要職務為傳播教義，讓世人知曉主神的福音。在信徒祈禱時，降臨教會的多為福音天使。\n\n『給予爾等主神的祝福。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/07/14",
    essence: UnitEssence[UnitCode.bliss],
    thumbnail: UnitEssence[UnitCode.bliss],
    selection: UnitSelection[UnitCode.bliss],
    clothes: UnitFullImage[UnitCode.bliss],
    tagList: [ 
        TagID.ELEMENT_WATER, 
        TagID.POSITION_HEALER, 
        TagID.CLASS_SOLDIER,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.SKY_BLISS, PuzzleCode.SKY_PUNISHMENT ],
    skillSet: []
}