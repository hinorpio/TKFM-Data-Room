import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10079: Unit = {
    ID: "10079",
    metaCode: "tm_ritsuki",
    prefix: {
        [Locale.tc]: "新春",
        [Locale.sc]: null,
        [Locale.en]: "True Moon",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "凜月",
        [Locale.sc]: null,
        [Locale.en]: "Ritsuki",
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
        [Locale.tc]: "凜月第一次不是作為護衛的身分參加初詣。原本要在繪馬上寫下「守護千鶴公主」的祈願，卻被千鶴指出凜月已經沒有保護她的義務，應該要許下新的願望。凜月因此陷入思考，自己的願望為何物？\n\n『正月是新一年的開始，也祝您今年都能順遂平安。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/01/16",
    essence: UnitEssence[UnitCode.tm_ritsuki],
    thumbnail: UnitEssence[UnitCode.tm_ritsuki],
    selection: UnitSelection[UnitCode.tm_ritsuki],
    clothes: UnitFullImage[UnitCode.tm_ritsuki],
    tagList: [],
    otherVersion: [ UnitCode.ritsuki ],
    puzzle: [],
    skillSet: []
}