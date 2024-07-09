import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10090: Unit = {
    ID: "10090",
    metaCode: "s_milae",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "聖米勒",
        [Locale.sc]: null,
        [Locale.en]: "Milae",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "夏天", "墮天" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "大天使長聖米勒曾經是主神麾下最為堅定的利刃，是天使一族的驕傲。然而，在被凱薩洗腦調教過後，那個嚴以律己、清心寡慾，一心只為主神而戰的天使已經不在了。取而代之，是將性愛之神的教義奉為圭臬，將精液視作聖水、將淫言穢語視作禱告，與過去截然不同，卻同樣有著堅定信仰的性愛天使。作為性愛之神使徒的聖米勒，心裡已經構思出了一個如何將性愛的歡愉傳遞給迷茫眾生的偉大計畫。\n\n『就讓吾代替吾主，為汝帶來歡愉與淫樂吧♡』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/06/08",
    essence: UnitEssence[UnitCode.s_milae],
    thumbnail: UnitEssence[UnitCode.s_milae],
    selection: UnitSelection[UnitCode.s_milae],
    clothes: UnitFullImage[UnitCode.s_milae],
    tagList: [],
    otherVersion: [ UnitCode.milae ],
    puzzle: [ PuzzleCode.EVENT_2022_SUMMER_2 ],
    skillSet: []
}