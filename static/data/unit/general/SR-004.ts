import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10012: Unit = {
    ID: "10012",
    metaCode: "ritsuki",
    prefix: {
        [Locale.tc]: "女忍者",
        [Locale.sc]: null,
        [Locale.en]: "Ninja",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "凜月",
        [Locale.sc]: null,
        [Locale.en]: "Ritsuki",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "忍者", "普忍", "忍" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "凜月是烈日國的女忍者，以保護皇室為己任。她視忍者信條為第一行事守則，認為情感只會干擾任務，故拒絕將情感表露在外，多次守護皇家的她甚至得到了「日之影」這個只頒給最強忍者的稱號。凜月是烈日國公主「千鶴」的貼身護衛，兩人有著深厚的友情，然而當魔族進攻的消息傳來時，為了守護烈日國，凜月不得不接受命令，離開她的保護對象身邊……\n\n『忍者不需要自我，主人的意志，便是忍者的意志。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.ritsuki],
    thumbnail: UnitEssence[UnitCode.ritsuki],
    selection: UnitSelection[UnitCode.ritsuki],
    clothes: UnitFullImage[UnitCode.ritsuki],
    tagList: [
        TagID.ELEMENT_WIND, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
        TagID.OTHER_AOE,
    ], 
    otherVersion: [ UnitCode.tm_ritsuki ],
    puzzle: [],
    skillSet: []
}