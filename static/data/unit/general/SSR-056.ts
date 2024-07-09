import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10089: Unit = {
    ID: "10089",
    metaCode: "q_asina",
    prefix: {
        [Locale.tc]: "銀河之藍",
        [Locale.sc]: null,
        [Locale.en]: "Blue Qixi",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "安絲娜",
        [Locale.sc]: null,
        [Locale.en]: "Asina",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "銀藍" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "安絲娜是服裝店【巴赫蒂娜】的裁縫，她有著十分高明的手藝。能夠完美地將自己姐姐各種天馬行空的服裝設計裁剪成衣，製作出完整的成品。只不過，安絲娜時常要為了自己任性的姐姐，所搞出的麻煩事傷透腦筋。就好比今年的七夕祭，安絲蒂為了重演自己喜歡的浪漫愛情故事，居然直接將手上的工作全數拋之腦後。本來想要斥責她回去乖乖工作的安絲娜，卻因為自己心中同樣抱著能被凱薩擁入懷中的期待，最後只好乖乖陪著安絲蒂一同穿上織女的服裝。\n\n『僅此一次喔，安絲蒂，下一次再這樣就要一個月禁止吃甜點。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2022/08/03",
    essence: UnitEssence[UnitCode.q_asina],
    thumbnail: UnitEssence[UnitCode.q_asina],
    selection: UnitSelection[UnitCode.q_asina],
    clothes: UnitFullImage[UnitCode.q_asina],
    tagList: [],
    otherVersion: [ UnitCode.asina ],
    puzzle: [],
    skillSet: []
}