import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10035: Unit = {
    ID: "10035",
    metaCode: "asina",
    prefix: {
        [Locale.tc]: "縫紉之藍",
        [Locale.sc]: null,
        [Locale.en]: "Blue Tailor",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "安絲娜",
        [Locale.sc]: null,
        [Locale.en]: "Asida",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "普藍", "藍毛", "藍" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "半精靈是人類與精靈交合後產下的後代，無論性命還是天賦都介於兩者之間。人類覬覦他們的外貌和壽命，精靈則對他們寄予憐憫，夾在兩者之間讓他們無法真正地融入群體。不過安絲娜從未有過孤單的感覺，因為就算她想要獨處時間，她的雙胞胎姐姐也會任性的拖著她一起行動。充滿活力且好像一刻都坐不住的姐姐讓安絲娜傷透了腦筋。為了避免姐姐在自己視線外闖禍，總是跟在她後面，等回過神時兩人已經形影不離。成年後與安絲蒂一樣成為了裁縫，並共同經營著服裝店《巴赫蒂娜》。手藝高明的安絲娜總是能實現姐姐各種天馬行空的服裝設計。\n\n『安絲蒂是笨蛋，若我不看著她又會闖禍的。』",
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
    releaseDate: "2021/08/04",
    essence: UnitEssence[UnitCode.asina],
    thumbnail: UnitEssence[UnitCode.asina],
    selection: UnitSelection[UnitCode.asina],
    clothes: UnitFullImage[UnitCode.asina],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}