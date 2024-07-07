import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10020: Unit = {
    ID: "10020",
    metaCode: "muila",
    prefix: {
        [Locale.tc]: "未來勇者",
        [Locale.sc]: null,
        [Locale.en]: "Future Hero",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "牧愛菈",
        [Locale.sc]: null,
        [Locale.en]: "Muila",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "未勇" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "被法斯帝國勇者召喚儀式召喚過來的「未來勇者」。雖然被稱作勇者，但本身並沒有高尚的精神，只是感興趣的研究正好符合大部分人類的需求。厭惡與人接觸，也不打算救世，只提供了法斯帝國最低限度的協助以換取研究素材和維持生活的必要物資。就算被迫出戰，依然是敷衍了事，在被俘虜後爽快的投降了魔族。\n\n『讓你看看…我的發明吧…呼嘿嘿嘿！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/03/16",
    essence: UnitEssence[UnitCode.muila],
    thumbnail: UnitEssence[UnitCode.muila],
    selection: UnitSelection[UnitCode.muila],
    clothes: UnitFullImage[UnitCode.muila],
    tagList: [ 3, 9, 11, 14, 21, 27, 28 ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}