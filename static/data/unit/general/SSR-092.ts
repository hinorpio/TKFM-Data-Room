import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10124: Unit = {
    ID: "10124",
    metaCode: "nyoro",
    prefix: {
        [Locale.tc]: "沁夏淡粉",
        [Locale.sc]: null,
        [Locale.en]: "Fair Pixie",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "香草奈若",
        [Locale.sc]: null,
        [Locale.en]: "Vanilla Nyoro",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "奈若", "牛肉" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "有時是普通的遊戲實況主，有時是可愛的小小蠑螈，實際上是撒嬌女友系Vtuber的香草奈若。這次準備和兩位前輩一起進入《天下布魔》，享受沉浸式遊戲帶來的極致享受。究竟她會碰上什麼樣有趣的冒險與挑戰，會露出怎麼樣遜砲可愛的一面，就讓我們繼續看下去。今天晚上，香草奈若要在《天下布魔》的世界刮起一陣粉色旋風！\n\n『奈若我身為一個清楚系的Vtuber，會把你踩在腳下是很正常的吧？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/09/13",
    essence: UnitEssence[UnitCode.nyoro],
    thumbnail: UnitEssence[UnitCode.nyoro],
    selection: UnitSelection[UnitCode.nyoro],
    clothes: UnitFullImage[UnitCode.nyoro],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}