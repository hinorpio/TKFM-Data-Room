import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10924: Unit = {
    ID: "10924",
    metaCode: "mumu",
    prefix: {
        [Locale.tc]: "木乃伊",
        [Locale.sc]: null,
        [Locale.en]: "Mummy",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "穆穆",
        [Locale.sc]: null,
        [Locale.en]: "Mu-Mu",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "木乃伊", "穆穆" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "穆穆雖然看起來是柔弱的少女模樣，不過卻是木乃伊族的不死生物。力大無窮，即使身軀被分離了，只要接著一起也能立刻再生。若是因為外表而輕忽了她，可是會大吃苦頭的！\n\n『啊，繃帶又發潮了！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.DARK,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2023/12/13",
    essence: UnitEssence[UnitCode.mumu],
    thumbnail: UnitEssence[UnitCode.mumu],
    selection: UnitSelection[UnitCode.mumu],
    clothes: UnitFullImage[UnitCode.mumu],
    tagList: [ 
        TagID.ELEMENT_DARK, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_HOT_TITS,
        TagID.CLASS_SOLDIER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_INTERFERENCE,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.DEMON_MUMU ],
    skillSet: []
}