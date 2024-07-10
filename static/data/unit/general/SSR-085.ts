import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10119: Unit = {
    ID: "10119",
    metaCode: "s_aiko",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "艾可",
        [Locale.sc]: null,
        [Locale.en]: "Aiko",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "夏艾" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "跟隨凱薩前來度假的艾可，在主人的授意下負責擔任餐廳的服務生。為了讓主人玩得開心，完美的女僕服務生除了要負責接待客人、烹調菜品，還必須隨時滿足凱薩的侍寢要求，即便如此，艾可依舊注意到了每個小細節，讓主人在愉快的玩耍之際，還同時將所有麻煩的事情打理的井井有條，同時身為凱薩大人的女僕和餐廳服務生，艾可會盡自己最大的努力，為大家創造美好的夏日時光。\n\n『歡迎光臨！我是您專屬的女僕服務生艾可，請問您要點什麼呢～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/06/07",
    essence: UnitEssence[UnitCode.s_aiko],
    thumbnail: UnitEssence[UnitCode.s_aiko],
    selection: UnitSelection[UnitCode.s_aiko],
    clothes: UnitFullImage[UnitCode.s_aiko],
    tagList: [],
    otherVersion: [ UnitCode.x_aiko, UnitCode.xx_aiko ],
    puzzle: [],
    skillSet: []
}