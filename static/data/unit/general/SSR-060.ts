import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10094: Unit = {
    ID: "10094",
    metaCode: "geneva",
    prefix: {
        [Locale.tc]: "未知生命體",
        [Locale.sc]: null,
        [Locale.en]: "Chosen One",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "基貝魯",
        [Locale.sc]: null,
        [Locale.en]: "Geneva",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "基基", "基貝魯" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "跟隨隕石一同墜落，來自比天上更遙遠地方的未知生命。能夠吸收宇宙射線作為活動所需能量，但並不是缺少了宇宙能源就會餓死，只是會大幅的弱體化。自有記憶以來，就一直漂浮在遼闊無際的世界，直到「墜落」後才邂逅了自身以外的生命。有著強大的學習力、體魄、適應力，以及擬態能力，現在的樣貌就是擬態的成果，即使是未知的事物也能快速掌握。接觸了自身以外的生命後，基貝魯理解了何謂寂寞與孤單，一旦孤身一人就會感到焦慮。如果作為侵略者出現，對原物種帶來的威脅將是毀滅性的。不過幸運的是，她是個本性善良的孩子。\n\n『哼哼哼～哼哼哼～今天要去找誰玩好呢～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/09/07",
    essence: UnitEssence[UnitCode.geneva],
    thumbnail: UnitEssence[UnitCode.geneva],
    selection: UnitSelection[UnitCode.geneva],
    clothes: UnitFullImage[UnitCode.geneva],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}