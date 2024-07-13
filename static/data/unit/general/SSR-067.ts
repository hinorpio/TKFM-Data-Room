import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10097: Unit = {
    ID: "10097",
    metaCode: "xx_aiko",
    prefix: {
        [Locale.tc]: "性誕兔女郎",
        [Locale.sc]: null,
        [Locale.en]: "Sexmas Bunny",
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
        [Locale.tc]: [ "風艾", "性艾" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "『她』，誕生於艾可對聖誕節的怨恨。『她』，唯一的存在意義就是毀滅聖誕節。即便她和艾可的精神已經相互統一，但她依舊十分厭惡聖誕節。她遵循魔王凱薩的教誨，用性愛的概念將聖誕節傳統給全數替代，把聖誕節完全改造成了性誕節。然而，就在她的計畫即將成功之時，在她的眼皮底下竟然出現了渴望奪回聖誕傳統的骯髒老鼠。不可饒恕，這是絕對不可饒恕的事情。這一次，她要徹徹底底的，將那個令自己無比痛苦、憎恨的愚蠢節日給完全破壞掉！\n\n『呵呵呵～聖誕節這種愚蠢的節日，就讓我親自為它劃上句點吧』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/12/14",
    essence: UnitEssence[UnitCode.xx_aiko],
    thumbnail: UnitEssence[UnitCode.xx_aiko],
    selection: UnitSelection[UnitCode.xx_aiko],
    clothes: UnitFullImage[UnitCode.xx_aiko],
    tagList: [],
    otherVersion: [ UnitCode.aiko, UnitCode.x_aiko, UnitCode.s_aiko ],
    puzzle: [],
    skillSet: []
}