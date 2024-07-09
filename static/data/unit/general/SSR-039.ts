import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10082: Unit = {
    ID: "10082",
    metaCode: "b_satan",
    prefix: {
        [Locale.tc]: "花嫁",
        [Locale.sc]: null,
        [Locale.en]: "Bride",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "撒旦",
        [Locale.sc]: null,
        [Locale.en]: "Satan",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "花撒", "花旦" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "婚姻，那是弱者為了束縛彼此而創造出的詞語。對於真正的強者而言，根本就沒有必要使用言語和情感去約束對方。強大的肉體和激烈的性愛，才是雄性與雌性間最重要的聯繫。不過，雖然說是這麼說，但要是有人覬覦自己作為凱薩正室的地位。撒旦還是會選擇毫不留情地予以擊潰，碾碎，藉此來展示自己正宮的威嚴。畢竟，在與愛人激烈交合之前，先來場作為餘興節目的廝殺那是再好不過的了。\n\n『我是凱薩大人的正室唷，因為巴爾跟伊布力斯都比我弱呢。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/02/16",
    essence: UnitEssence[UnitCode.b_satan],
    thumbnail: UnitEssence[UnitCode.b_satan],
    selection: UnitSelection[UnitCode.b_satan],
    clothes: UnitFullImage[UnitCode.b_satan],
    tagList: [],
    otherVersion: [ UnitCode.satan, UnitCode.e_satan ],
    puzzle: [],
    skillSet: []
}