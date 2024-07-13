import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10933: Unit = {
    ID: "10933",
    metaCode: "anya",
    prefix: {
        [Locale.tc]: "獵犬小隊",
        [Locale.sc]: null,
        [Locale.en]: "Hound Hunter",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "安雅",
        [Locale.sc]: null,
        [Locale.en]: "Anya",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "安雅" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "安雅是來自不同大陸，重視科技和工業的達洛姆公國精銳部隊——獵犬小隊的成員。她每逢戰鬥都衝鋒在最前線，不畏生死，如同凶狠的鬥犬般勇猛。因為熱愛爭勇鬥狠的關係，安雅健壯的身軀上滿是大大小小的傷痕，但她對此並不在意。對她來說，戰鬥就是生存的唯一目的，而傷疤與彈痕更是自己存在的價值。\n\n『狩獵時間到，獵犬要開始狩獵啦，哈哈哈！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.WIND,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2024/01/07",
    essence: UnitEssence[UnitCode.anya],
    thumbnail: UnitEssence[UnitCode.anya],
    selection: UnitSelection[UnitCode.anya],
    clothes: UnitFullImage[UnitCode.anya],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}