import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10018: Unit = {
    ID: "10018",
    metaCode: "uruta",
    prefix: {
        [Locale.tc]: "古代勇者",
        [Locale.sc]: null,
        [Locale.en]: "Ancient Hero",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "烏魯塔",
        [Locale.sc]: null,
        [Locale.en]: "Uruta",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "古勇" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "被法斯帝國勇者召喚儀式召喚過來的「古代勇者」。生活在魔法最強盛，魔族也最為活躍的年代，擁有超越這個時代人類的魔法適性與身體能力。思考方式直線條，缺乏金錢觀，因為是按照自己的邏輯在行動，偶爾讓人覺得她過於天然且難以捉摸。直覺敏銳，發覺到法斯帝國的皇帝心懷不軌後，決定照自己的方式拯救無辜民眾，早早就離開了法斯帝國。\n\n『雖然被稱作勇者，但我也只是做自己覺得正確的事罷了。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: false,
    releaseDate: "2022/03/09",
    essence: UnitEssence[UnitCode.uruta],
    thumbnail: UnitEssence[UnitCode.uruta],
    selection: UnitSelection[UnitCode.uruta],
    clothes: UnitFullImage[UnitCode.uruta],
    tagList: [
        TagID.ELEMENT_WIND,
        TagID.POSITION_PROTECTER,
        TagID.POSITION_PROTECTER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}