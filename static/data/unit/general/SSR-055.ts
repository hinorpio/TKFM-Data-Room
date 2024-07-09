import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10088: Unit = {
    ID: "10088",
    metaCode: "q_asida",
    prefix: {
        [Locale.tc]: "雙星之紅",
        [Locale.sc]: null,
        [Locale.en]: "Red Qixi",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "安絲蒂",
        [Locale.sc]: null,
        [Locale.en]: "Asida",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "星紅" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "安絲蒂是服裝店【巴赫蒂娜】的裁縫，她有著天馬行空的想像力以及獨特的美感。然而，她時常因為一時興起，就做出許多令自己孿生妹妹苦惱的麻煩事。就好比當安絲蒂從身為烈日國前公主的千鶴口中得知了七夕祭的起源：「天各一方的愛侶彼此心心相印，最終排除萬難成功相見」的浪漫唯美故事後，她便突發奇想，想讓自己和妹妹扮演故事中的織女，並讓心目中的白馬王子(凱薩)披荊斬荊，前來迎接自己。這樣就可以像每一個童話故事的結局一樣，所有人從此過上幸福快樂的美好日子。\n\n『哈啊～天各一方的愛侶被重重困難給阻饒，在費盡千辛萬苦後終於見面，面對面傾訴著愛意，這真是太浪漫了不是嘛！』",
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
    releaseDate: "2022/08/03",
    essence: UnitEssence[UnitCode.q_asida],
    thumbnail: UnitEssence[UnitCode.q_asida],
    selection: UnitSelection[UnitCode.q_asida],
    clothes: UnitFullImage[UnitCode.q_asida],
    tagList: [],
    otherVersion: [ UnitCode.asida ],
    puzzle: [],
    skillSet: []
}