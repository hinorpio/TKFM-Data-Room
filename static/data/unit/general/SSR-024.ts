import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10058: Unit = {
    ID: "10058",
    metaCode: "fufu",
    prefix: {
        [Locale.tc]: "膽小紙袋狼",
        [Locale.sc]: null,
        [Locale.en]: "Paper Bag Wolf",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "沃沃",
        [Locale.sc]: null,
        [Locale.en]: "Fufu",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "紙袋狼", "沃沃", "狼", "阿狼" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "沃沃是驕傲的狼人之子，但是因為生性害羞，所以戴上了紙袋來掩飾自己的真正面容。覺得這樣下去不行的她，下定了決心決定離開家鄉要治好自己膽小害羞的毛病，但經過了數月的旅行洗禮，她不但依舊沒辦法接觸他人，反而吃盡了獨自旅行的苦頭，也變得更怕跟他人接觸了。值得一提的是，狼人一族在月圓之夜往往會大大提升攻擊性與性慾，如果在這個時候被狼人抓到的話，就會被……\n\n『不要再過來了，再過來我就要叫了喔……』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/09/08",
    essence: UnitEssence[UnitCode.fufu],
    thumbnail: UnitEssence[UnitCode.fufu],
    selection: UnitSelection[UnitCode.fufu],
    clothes: UnitFullImage[UnitCode.fufu],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}