import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10100: Unit = {
    ID: "10100",
    metaCode: "usagihime",
    prefix: {
        [Locale.tc]: "惡兔魔王",
        [Locale.sc]: null,
        [Locale.en]: "Evil Archdemon",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "兔姬",
        [Locale.sc]: null,
        [Locale.en]: "Usagihime",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "兔姬", "土雞", "兔" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "兔姬是一位清純可愛、車速過快的Vtuber兼繪畫實況主。平時的她，以大而化之的親民性格與零到一百k只需四秒鐘的開車速度，廣受觀眾們的喜愛。這次，兔姬接受了朋友杏仁咪嚕的安麗，也開始直播起天下布魔這款最新的VR遊戲。作為資深老司姬的她究竟會給【天下布魔】的世界帶來什麼樣的風波。一切的答案，都將展現在當晚的直播中！\n\n『從現在開始，我就是惡兔魔王兔姬！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2022/05/25",
    essence: UnitEssence[UnitCode.usagihime],
    thumbnail: UnitEssence[UnitCode.usagihime],
    selection: UnitSelection[UnitCode.usagihime],
    clothes: UnitFullImage[UnitCode.usagihime],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}