import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10042: Unit = {
    ID: "10042",
    metaCode: "s_iblis",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "伊布力斯",
        [Locale.sc]: null,
        [Locale.en]: "Iblis",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "夏伊", "泳伊" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "即使在休假，魔王也必須展現出魔王的風範。所謂的領導者，不論做什麼打扮都必須是最耀眼的一人。伊布力斯的泳裝是和魔界專職的縫衣匠訂製，材料用的也是最上級的魔獸素材。魔界貴族的泳裝，豈能和平民的泳裝相提並論？咦，和平常穿得沒什麼不同？！愚鈍且不懂女性服裝細節變化的人通通都得處死！\n\n『將本王身著泳裝的珍稀畫面映入眼簾，並永生銘記吧。』",
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
    releaseDate: "2022/06/08",
    essence: UnitEssence[UnitCode.s_iblis],
    thumbnail: UnitEssence[UnitCode.s_iblis],
    selection: UnitSelection[UnitCode.s_iblis],
    clothes: UnitFullImage[UnitCode.s_iblis],
    tagList: [],
    otherVersion: [ UnitCode.iblis, UnitCode.i_iblis, UnitCode.b_iblis, UnitCode.v_iblis ],
    puzzle: [ PuzzleCode.EVENT_2022_SUMMER_1 ],
    skillSet: []
}