import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10921: Unit = {
    ID: "10921",
    metaCode: "molly",
    prefix: {
        [Locale.tc]: "獵犬小隊",
        [Locale.sc]: null,
        [Locale.en]: "Hound Hunter",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "茉莉",
        [Locale.sc]: null,
        [Locale.en]: "Molly",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "茉莉" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "茉莉是來自不同大陸，重視科技和工業的達洛姆公國精銳部隊——獵犬小隊的成員。她的槍法高超，百發百中，深受隊長與其他隊員信賴。不過，雖然茉莉時常負責斬首敵方要員的任務，但她的職位其實不是狙擊手，而是獵犬小隊的炊事兵。儘管茉莉對烹飪有著極大的興趣，但她本身的廚藝可以說是毀滅性的糟糕。她不只會隨意調整食譜上的食材用量與種類，有時還會以補充營養的名義，將各種奇怪食材通通丟進鍋中烹煮。茉莉的廚藝之慘烈，以至於在獵犬小隊的反審問訓練中，有一條「吃下整碗茉莉特餐」的訓練項目。\n\n『真奇怪…大家這次怎麼又把晚餐剩下來了呢？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2024/01/07",
    essence: UnitEssence[UnitCode.molly],
    thumbnail: UnitEssence[UnitCode.molly],
    selection: UnitSelection[UnitCode.molly],
    clothes: UnitFullImage[UnitCode.molly],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}