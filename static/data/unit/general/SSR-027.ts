import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10045: Unit = {
    ID: "10045",
    metaCode: "ibuki",
    prefix: {
        [Locale.tc]: "極樂之鬼",
        [Locale.sc]: null,
        [Locale.en]: "Oni of Bliss",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "伊吹朱點",
        [Locale.sc]: null,
        [Locale.en]: "Ibuki Shuten",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "伊吹" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "外貌顯得幼小的朱點實質上已是成年許久的鬼人，身為極端的享樂主義者，從年輕開始就已在暴力與酒精中盡情抒發自己的享樂主義，也因此聲名狼籍。最終導致了自己被陰陽師所封印的命運。被凱薩解開封印的朱點，打算繼續自己酒池肉林的計畫與生活，但在她眼前，或許就是將改變她一生的相遇……\n\n『妾身喜歡享樂，隨心所欲，想到什麼一定會立刻去做，呵呵，是無法忍耐的麻煩女人呢。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/10/13",
    essence: UnitEssence[UnitCode.ibuki],
    thumbnail: UnitEssence[UnitCode.ibuki],
    selection: UnitSelection[UnitCode.ibuki],
    clothes: UnitFullImage[UnitCode.ibuki],
    tagList: [ 
        TagID.ELEMENT_FIRE,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_FLAT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_DAMAGE_OUTPUT,
     ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}