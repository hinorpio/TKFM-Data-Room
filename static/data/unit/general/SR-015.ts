import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10041: Unit = {
    ID: "10041",
    metaCode: "yingying",
    prefix: {
        [Locale.tc]: "公會看板娘",
        [Locale.sc]: null,
        [Locale.en]: "Guild Receptionist",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "小螢",
        [Locale.sc]: null,
        [Locale.en]: "Ying-Ying",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "小螢" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "小螢是偏僻地區冒險者公會分部的接待員，協助公會分發委託，給予冒險者報酬，鼓勵他們，並帶著笑容迎接完成任務歸來的冒險者。因為親切開朗的態度，小螢被眾多冒險者喜愛，也被當作冒險者公會分部的看板娘。然而本該過著平凡而忙碌生活的小螢，卻遇上了因為無聊而出外遊玩的凱薩。幸運的是，偏僻的冒險者公會分部多數人沒有見過凱薩的樣貌，不幸的是，這裡所有人加在一起都不是凱薩對手。一方面試圖隱瞞凱薩身份以免引起騷動，一方面又得應付凱薩的「攻勢」。究竟小螢能夠維持自己的純潔之身到什麼時候呢？\n\n『帶著笑容迎接所有前來的冒險者，這就是公會接待員的任務。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SR,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2022/10/12",
    essence: UnitEssence[UnitCode.yingying],
    thumbnail: UnitEssence[UnitCode.yingying],
    selection: UnitSelection[UnitCode.yingying],
    clothes: UnitFullImage[UnitCode.yingying],
    tagList: [
        TagID.ELEMENT_WATER,
        TagID.POSITION_HEALER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_FLAT_TITS,
        TagID.CLASS_ELITE,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_SUPPORT,
    ], 
    otherVersion: [],
    puzzle: [],
    skillSet: []
}