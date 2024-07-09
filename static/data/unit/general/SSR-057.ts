import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10063: Unit = {
    ID: "10063",
    metaCode: "emily",
    prefix: {
        [Locale.tc]: "傳說女僕",
        [Locale.sc]: null,
        [Locale.en]: "Legendary Maidservant",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "艾蜜莉",
        [Locale.sc]: null,
        [Locale.en]: "Emily",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "女僕", "女僕長", "傳說" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "傳說中的女僕，窮盡一生鑽研女僕技巧，也是教導艾可女僕技的師傅。艾蜜莉在世界各地流浪尋找有女僕資質的原石，當找到滿意的原石以後，她會傾盡所有最嚴厲的方式將原石磨練成優秀的女僕。她至今為止最高的傑作即為艾可，但艾可卻在中途放棄了女僕修業，消失無蹤。在艾可離開後，振作起來的艾蜜莉繼續踏上女僕訓練師之路，直到某天，她聽到了艾可在凱薩軍的傳聞……\n\n『女僕之道，浩瀚無垠。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/08/24",
    essence: UnitEssence[UnitCode.emily],
    thumbnail: UnitEssence[UnitCode.emily],
    selection: UnitSelection[UnitCode.emily],
    clothes: UnitFullImage[UnitCode.emily],
    tagList: [
        TagID.ELEMENT_LIGHT,
        TagID.POSITION_SUPPORTER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_GIANT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_SUPPORT,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}