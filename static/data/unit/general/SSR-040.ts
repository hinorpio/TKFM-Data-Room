import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10084: Unit = {
    ID: "10084",
    metaCode: "miru",
    prefix: {
        [Locale.tc]: "貓娘Vtuber",
        [Locale.sc]: null,
        [Locale.en]: "Cat-Eared Vtuber",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "杏仁咪嚕",
        [Locale.sc]: null,
        [Locale.en]: "Miru",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "咪嚕", "翻滾" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "杏仁咪嚕是一名貓娘虛擬Vtuber、遊戲實況主。活潑開朗、熱情大方，偶爾有點人來瘋的咪嚕被觀眾們喜愛著。這次為了挑戰全新的領域，咪嚕買下了傳說「最新科技」的VR遊戲進行直播。然而咪嚕以及看台的觀眾們並不知道，這款VR裝置所連結到的卻是一個真實的世界。以實況的心情，咪嚕將展現「第四天災」的強大實力！\n\n『晚安～咪嚕咪嚕～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.DEFENCE,
    isLimited: false,
    releaseDate: "2022/03/09",
    essence: UnitEssence[UnitCode.miru],
    thumbnail: UnitEssence[UnitCode.miru],
    selection: UnitSelection[UnitCode.miru],
    clothes: UnitFullImage[UnitCode.miru],
    tagList: [
        TagID.ELEMENT_FIRE,
        TagID.POSITION_ATTACKER,
        TagID.CLASS_LEADER,
        TagID.OTHER_EXPLOSIVENESS,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}