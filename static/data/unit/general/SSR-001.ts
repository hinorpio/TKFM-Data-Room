import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10001: Unit = {
    ID: "10001",
    metaCode: "baal",
    prefix: {
        [Locale.tc]: "魔王",
        [Locale.sc]: null,
        [Locale.en]: "Archdemon",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "巴爾",
        [Locale.sc]: null,
        [Locale.en]: "Ba'al",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "巴爾", "普巴", "魔巴", "解巴", "巴", "82" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "巴爾是魔界現存的四名魔王之一，善於經營的她掌有魔界商業發展最蓬勃、最富饒的領地。她的性格狡猾，只要對自己有利，就算要對比自身地位低下的人獻媚也不會有一丁點猶豫。不過要是因此對她掉以輕心那就犯下大錯了，一旦情勢不對，巴爾就會把麻煩推給同盟或信任她的人，自己則溜之大吉。巴爾擅長用言語以及幻術將他人玩弄於股掌，然而她的小聰明一旦遇到不講道理的對象，往往會讓巴爾自食惡果……\n\n『凱薩？嘻嘻，追得到我就來呀？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.baal],
    thumbnail: UnitEssence[UnitCode.baal],
    selection: UnitSelection[UnitCode.baal],
    clothes: UnitFullImage[UnitCode.baal],
    tagList: [
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.CLASS_LEADER, 
        TagID.OTHER_DAMAGE_OUTPUT,
    ], 
    otherVersion: [ UnitCode.f_baal, UnitCode.b_baal, UnitCode.v_baal, UnitCode.s_baal ],
    puzzle: [ PuzzleCode.EVENT_2022_XMAS_1, PuzzleCode.EVENT_2023_CNY_1 ],
    skillSet: []
}