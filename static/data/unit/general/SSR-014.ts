import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10057: Unit = {
    ID: "10057",
    metaCode: "daphne",
    prefix: {
        [Locale.tc]: "煌星",
        [Locale.sc]: null,
        [Locale.en]: "Queen",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "妲絲艾菲娜",
        [Locale.sc]: null,
        [Locale.en]: "Daphne Bloom",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "煌星", "煌", "蘇珊", "飛天螺旋麵", "白癡公主" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "妲絲艾菲娜‧布魯恩‧煌星……暫且先這麼稱呼她吧。這是一名經常一個人唸叨著「末日就要到來」、「世界就要毀滅」…渾身散發奇妙氛圍的少女。以詠唱時間過長，誇張的聲光效果宛如滅世禁咒，但實際上卻是治癒效果的魔法聞名。除此之外，在戰鬥時她也會使用「冥界法典」來辨別敵人的資訊，採取對應行動。然而「冥界法典」只是她靠自己的幻想編寫出來的，採取的行動往往只會使情況變得更糟糕。奇異的言行與怪癖，使得妲絲艾菲娜成為了冒險者工會的頭號麻煩份子。不過在這些奇行的背後，似乎有著什麼特別的原因……妲絲艾菲娜深信凱薩就是她命中注定的宿敵，曾經與凱薩短暫的見面成了她離開村子，踏上旅途的契機。已經成為了知名冒險者的她，今天也在追趕著魔王的背影。\n\n『吾之宿敵，吾容許汝稱呼吾之名諱妲絲艾菲娜‧布魯……等等，聽我說完呀！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/05/12",
    essence: UnitEssence[UnitCode.daphne],
    thumbnail: UnitEssence[UnitCode.daphne],
    selection: UnitSelection[UnitCode.daphne],
    clothes: UnitFullImage[UnitCode.daphne],
    tagList: [
        TagID.ELEMENT_DARK,
        TagID.POSITION_SUPPORTER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_FLAT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_SUPPORT,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}