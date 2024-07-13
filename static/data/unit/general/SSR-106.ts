import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10136: Unit = {
    ID: "10136",
    metaCode: "angelina",
    prefix: {
        [Locale.tc]: "賞金獵人",
        [Locale.sc]: null,
        [Locale.en]: "Bounty Hunter",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "安潔娜爾",
        [Locale.sc]: null,
        [Locale.en]: "Angelina",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "雪豹" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "安潔娜爾是一名老練的賞金獵人，雖說是賞金獵人，但她其實什麼任務都接，並不只侷限於懸賞委託。從捕捉寵物到登山導遊，只要是可以賺錢的委託，她都會毫不猶豫地攬下。她喜歡賺錢，也十分嚮往數錢數到手軟的富裕生活。因此安潔娜爾每天都勤奮的接取各種委託，為了過上理想中的富豪生活而努力工作著。\n\n『服務品質和價格是對等的，因此我的委託費用可是很高的唷。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/03/06",
    essence: UnitEssence[UnitCode.angelina],
    thumbnail: UnitEssence[UnitCode.angelina],
    selection: UnitSelection[UnitCode.angelina],
    clothes: UnitFullImage[UnitCode.angelina],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}