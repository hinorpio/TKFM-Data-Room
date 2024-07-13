import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10804: Unit = {
    ID: "10804",
    metaCode: "dora",
    prefix: {
        [Locale.tc]: "犬人族",
        [Locale.sc]: null,
        [Locale.en]: "Dog-Girl",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "朵拉",
        [Locale.sc]: null,
        [Locale.en]: "Dora",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "朵拉", "狗" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "朵拉是嗅覺敏銳的犬人族，原本在家鄉中擔任著警備隊長，一直以來盡忠職守，守護著居住的村莊。然而當魔族到來後，村莊成了凱薩的領土，朵拉也在凱薩的命令下調離了原本的村莊。雖然魔族到來後並沒有殺燒擄掠，但個性耿直的朵拉依然看不慣凱薩的所作所為，總是不加以掩飾自己對凱薩的厭惡，但隨著時間過去，儘管依舊嘴硬，朵拉卻漸漸喜歡上了原本討厭的凱薩……\n\n『喜歡？才沒這回事…喂，不准看我尾巴！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.R,
    element: Element.WIND,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.dora],
    thumbnail: UnitEssence[UnitCode.dora],
    selection: UnitSelection[UnitCode.dora],
    clothes: UnitFullImage[UnitCode.dora],
    tagList: [ 
        TagID.ELEMENT_WIND, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}