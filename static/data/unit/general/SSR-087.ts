import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10121: Unit = {
    ID: "10121",
    metaCode: "o_nana",
    prefix: {
        [Locale.tc]: "碧波白喵",
        [Locale.sc]: null,
        [Locale.en]: "Salty Sea Cat",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "娜娜",
        [Locale.sc]: null,
        [Locale.en]: "Nana",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "白娜", "白貓", "畫娜", "畫貓" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "結束突如其來的夏日打工，身為魔王城政務核心的娜娜正要投身回茫茫的工作大海。然而，突如其來的意外，卻又將她捲入了莫名其妙的航海之旅。儘管置身於美麗湛藍的廣闊大海，娜娜卻依然沒有任何玩樂和欣賞美景的餘裕。因為就算轉戰到海上，她的職業依舊是負責所有船務的水手役。為了讓船能夠順利航行，抵達終點，一人攬下所有船務工作的水手娜娜，今天又是過勞的一天。\n\n『一望無際的大海，看不見盡頭，感覺就和本喵回去後要面對的工作一樣呢，喵哈哈哈……』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/07/12",
    essence: UnitEssence[UnitCode.o_nana],
    thumbnail: UnitEssence[UnitCode.o_nana],
    selection: UnitSelection[UnitCode.o_nana],
    clothes: UnitFullImage[UnitCode.o_nana],
    tagList: [],
    otherVersion: [ UnitCode.nana, UnitCode.s_nana, UnitCode.c1_nana, UnitCode.a_nana ],
    puzzle: [],
    skillSet: []
}