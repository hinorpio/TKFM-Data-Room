import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10034: Unit = {
    ID: "10034",
    metaCode: "asida",
    prefix: {
        [Locale.tc]: "剪裁之紅",
        [Locale.sc]: null,
        [Locale.en]: "Red Tailor",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "安絲蒂",
        [Locale.sc]: null,
        [Locale.en]: "Asida",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "普紅", "紅毛", "紅" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "半精靈是人類與精靈交合後產下的後代，無論性命還是天賦都介於兩者之間。人類覬覦他們的外貌和壽命，精靈則對他們寄予憐憫，夾在兩者之間讓他們無法真正地融入群體。不過安絲蒂並不為這點困擾，因為自她有記憶以來，妹妹安絲娜就陪伴著她，她從來不曾感到孤單過。安絲蒂喜歡漂亮的東西，以及一切美好的事物，更喜歡看見他人幸福的笑臉。小時候目睹了婚禮上身穿華麗禮服的新娘笑得如此幸福，成為了安絲蒂未來一頭栽進裁縫行業的契機。憑藉獨特的美感以及設計理念，安絲蒂經營的服裝店《巴赫蒂娜》很快就聲名鵲起。只是粗枝大葉的安絲蒂總是在製作禮服時犯下各種錯誤，讓共事的妹妹為善後傷透了腦筋。\n\n『安絲娜～下件禮服妳覺得要設計成什麼款式好呢？』",
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
    releaseDate: "2021/08/04",
    essence: UnitEssence[UnitCode.asida],
    thumbnail: UnitEssence[UnitCode.asida],
    selection: UnitSelection[UnitCode.asida],
    clothes: UnitFullImage[UnitCode.asida],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}