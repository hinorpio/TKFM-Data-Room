import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10118: Unit = {
    ID: "10118",
    metaCode: "s_fiora",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "菲歐菈",
        [Locale.sc]: null,
        [Locale.en]: "Fiora",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "夏菲" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "為了讓迷途的羔羊能在夏日的沙灘上脫去衣裳，擁抱性愛，聆聽性愛之神的福音。侍奉性愛之神的大主教菲歐菈來到沙灘上，和性愛天使聯手出擊，力求將性愛的歡愉傳達給茫茫眾生。第一眼看見菲歐菈身著的泳衣，大概很難想像她是侍奉神明的神官，但當人們被菲歐菈帶去宣揚教義時，一切就都明朗了。\n\n『在沙灘上將肉體回歸本源，真誠的向神禱告，施行神的恩惠，如此一來我等將抵達神所賜予的樂園～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/06/07",
    essence: UnitEssence[UnitCode.s_fiora],
    thumbnail: UnitEssence[UnitCode.s_fiora],
    selection: UnitSelection[UnitCode.s_fiora],
    clothes: UnitFullImage[UnitCode.s_fiora],
    tagList: [],
    otherVersion: [ UnitCode.hm_fiora ],
    puzzle: [],
    skillSet: []
}