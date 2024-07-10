import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10122: Unit = {
    ID: "10122",
    metaCode: "a_usagihime",
    prefix: {
        [Locale.tc]: "性感天使",
        [Locale.sc]: null,
        [Locale.en]: "Sexy Seraph",
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
        [Locale.tc]: [ "天兔", "母姬" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "曾經在《天下布魔》的世界掀起一陣獸娘旋風的「辣個女人」再次回歸。這次，她將和兩名同伴一起遊玩《天下布魔》，再次進入那個熟悉的世界。身為超級老司姬的她究竟會給觀眾帶來多少保養眼睛的福利呢，一切就在今晚的直播中見真章。美麗又充滿母性光輝的性感天使兔姬，準備閃亮登場！\n\n『收下吧～這就是兔姬媽媽的愛唷～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/09/13",
    essence: UnitEssence[UnitCode.a_usagihime],
    thumbnail: UnitEssence[UnitCode.a_usagihime],
    selection: UnitSelection[UnitCode.a_usagihime],
    clothes: UnitFullImage[UnitCode.a_usagihime],
    tagList: [],
    otherVersion: [ UnitCode.usagihime ],
    puzzle: [],
    skillSet: []
}