import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10130: Unit = {
    ID: "10130",
    metaCode: "salina",
    prefix: {
        [Locale.tc]: "聖夜喧嘩",
        [Locale.sc]: null,
        [Locale.en]: "Holy Night Rouser",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "莎琳娜",
        [Locale.sc]: null,
        [Locale.en]: "Salina",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "8+9", "黑道" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "莎琳娜來自傳統的聖誕（黑道）家族，身為聖誕老人的養女兼繼承人，她從小就接受了嚴苛的培訓。長大後為了傳播聖誕精神（摧毀反對組織），莎琳娜長期出國遊學（搶地盤），打下了一塊又一塊的地盤，把聖誕精神傳播到每個地方。然而，當她結束搶地盤之旅，凱旋歸來時，卻發現自己純真可愛的青梅竹馬希依，變成了身穿暴露服裝、連思想都變得放蕩無比的性誕馴鹿。難以接受青梅竹馬劇烈變化的莎琳娜，為了摧毀扭曲的性誕節，決定強忍住心中的痛苦，向性誕勢力發起進攻！\n\n『把不長眼的傢伙除掉，大家就會變開心，這就是聖誕精神！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/12/13",
    essence: UnitEssence[UnitCode.salina],
    thumbnail: UnitEssence[UnitCode.salina],
    selection: UnitSelection[UnitCode.salina],
    clothes: UnitFullImage[UnitCode.salina],
    tagList: [],
    otherVersion: [],
    puzzle: [ PuzzleCode.EVENT_2023_XMAS_1 ],
    skillSet: []
}