import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10096: Unit = {
    ID: "10096",
    metaCode: "h_lotiya",
    prefix: {
        [Locale.tc]: "鮮血魔王",
        [Locale.sc]: null,
        [Locale.en]: "Blooksucker",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "洛緹亞",
        [Locale.sc]: null,
        [Locale.en]: "Lotiya",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "血魔" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "憎恨著男性卻被迫屈從魔王凱薩，吸血鬼洛緹亞從未忘記這份屈辱。但是受限於實力差距，洛緹亞只能蟄伏於魔王城，靜靜等待崛起的機會。而這份機會終於來到了她的面前。撿到了南瓜妖精帕奈奈的魔力罐，擁有近乎用之不盡魔力的洛緹亞變得空前絕後的強大。趁著凱薩不在魔王城期間，洛緹亞在地面建造起了高塔。在這高塔裡面不存在任何男性，是只有可愛、純潔少女可以生活的空間。洛緹亞正伸出魔掌，一點一點的建造屬於她的少女樂園。\n\n『啊～美麗的少女們，讓我們在這時光停駐的樂土中好好相處吧。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/10/26",
    essence: UnitEssence[UnitCode.h_lotiya],
    thumbnail: UnitEssence[UnitCode.h_lotiya],
    selection: UnitSelection[UnitCode.h_lotiya],
    clothes: UnitFullImage[UnitCode.h_lotiya],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}