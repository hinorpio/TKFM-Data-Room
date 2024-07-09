import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10047: Unit = {
    ID: "10047",
    metaCode: "didi",
    prefix: {
        [Locale.tc]: "夜星",
        [Locale.sc]: null,
        [Locale.en]: "Night Star",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "狄",
        [Locale.sc]: null,
        [Locale.en]: "Didi",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "狄", "夜星" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "狄原本待在雙蛇軍團，經過數年磨練後，發覺自己與團內的理念不合因此決定離開。隨後以「夜星」之名，作為一名自由傭兵獨自過活。雖然會篩選接洽的任務內容，不喜歡太過無趣的委託。但是因為自己濫好人的個性，總是會因為惻隱之心而接下不必要的委託，讓自己相當勞累。某天，因為一場意外的遭遇，她接下了一個足以改變她人生的委託。那則委託的內容是，暗殺魔王凱薩。\n\n『總之，這個委託就交給我吧。以夜星之名，會俐落地完成這委託的。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/10/12",
    essence: UnitEssence[UnitCode.didi],
    thumbnail: UnitEssence[UnitCode.didi],
    selection: UnitSelection[UnitCode.didi],
    clothes: UnitFullImage[UnitCode.didi],
    tagList: [
        TagID.ELEMENT_WIND,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_WEAKEN,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}