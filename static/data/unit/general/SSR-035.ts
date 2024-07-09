import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10067: Unit = {
    ID: "10067",
    metaCode: "tm_minayomi",
    prefix: {
        [Locale.tc]: "新春",
        [Locale.sc]: null,
        [Locale.en]: "True Moon",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "神無雪",
        [Locale.sc]: null,
        [Locale.en]: "Minayomi",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "春劍" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "換下了便於活動的輕裝，換上如大家閨秀般的和服，神無雪出席了烈日國的慶典。撐著和傘，漫步花道之上，神無雪女性的一面被大幅強調。然而，若以為她收起了利刃，變為無害的少女，絕對是大錯特錯。別於腰間的長刃、藏於傘中的短刃會在剎那間出鞘。\n\n『正月期間，不動刀劍，平心靜氣，省身克己。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/01/16",
    essence: UnitEssence[UnitCode.tm_minayomi],
    thumbnail: UnitEssence[UnitCode.tm_minayomi],
    selection: UnitSelection[UnitCode.tm_minayomi],
    clothes: UnitFullImage[UnitCode.tm_minayomi],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}