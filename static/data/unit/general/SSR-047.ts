import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10049: Unit = {
    ID: "10049",
    metaCode: "faya",
    prefix: {
        [Locale.tc]: "高等魔族",
        [Locale.sc]: null,
        [Locale.en]: "High-Ranking Demon",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "法雅",
        [Locale.sc]: null,
        [Locale.en]: "Faya",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "法雅" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "法雅雖貴為高等魔族，其行事作風卻與魔族大相逕庭。不喜殺戮、不喜欺負弱小、不喜以實力定勝負。在弱肉強食的魔界中，法雅顯得標新立異。眾多魔族怒指法雅失格，揚言必拔除其地位象徵。然而，法雅擁有的高等魔族血統與實力不容質疑。沒有人敢輕易地向她發起挑戰。深知自己的作風與魔界的差異，法雅在百年前就離開了魔界，隱蔽了自己身分，化身為人類的模樣到處旅遊。\n\n『屁股大的女性比較會生孩子？啊…您這是看著我哪裡說出的話呀！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/05/11",
    essence: UnitEssence[UnitCode.faya],
    thumbnail: UnitEssence[UnitCode.faya],
    selection: UnitSelection[UnitCode.faya],
    clothes: UnitFullImage[UnitCode.faya],
    tagList: [
        TagID.ELEMENT_FIRE,
        TagID.POSITION_HEALER,
        TagID.SPECIES_DEMON,
        TagID.CLASS_LEADER,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_SUPPORT,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}