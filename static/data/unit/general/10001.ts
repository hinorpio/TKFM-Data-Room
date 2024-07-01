import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitID } from '@/plugins/utils/enums';
import { UnitEssenceIcon, UnitSelectionPreview, UnitFullImage } from '@/static/data/ImageSrc';
import { Unit } from '@/interface/unit';

export const GENERAL_10001: Unit = {
    ID: "10001",
    metaCode: "baal",
    prefix: {
        [Locale.zh]: "魔王",
        [Locale.cn]: null,
        [Locale.en]: "Archdemon",
        [Locale.jp]: null,
        [Locale.ko]: null
    },
    name: {
        [Locale.zh]: "巴爾",
        [Locale.cn]: null,
        [Locale.en]: "Ba'al",
        [Locale.jp]: null,
        [Locale.ko]: null
    },
    abbreviation: {
        [Locale.zh]: [ "巴爾", "普巴", "82" ],
        [Locale.cn]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.ko]: []
    },
    background: {
        [Locale.zh]: "巴爾是魔界現存的四名魔王之一，善於經營的她掌有魔界商業發展最蓬勃、最富饒的領地。她的性格狡猾，只要對自己有利，就算要對比自身地位低下的人獻媚也不會有一丁點猶豫。不過要是因此對她掉以輕心那就犯下大錯了，一旦情勢不對，巴爾就會把麻煩推給同盟或信任她的人，自己則溜之大吉。巴爾擅長用言語以及幻術將他人玩弄於股掌，然而她的小聰明一旦遇到不講道理的對象，往往會讓巴爾自食惡果……\n\n『凱薩？嘻嘻，追得到我就來呀？』",
        [Locale.cn]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.ko]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2020-12-14",
    essence: UnitEssenceIcon[UnitID.baal],
    thumbnail: UnitEssenceIcon[UnitID.baal],
    selection: UnitSelectionPreview[UnitID.baal],
    clothes: UnitFullImage[UnitID.baal],
    tagList: [ 1, 6, 12, 15, 21, 22 ],
    otherVersion: [ UnitID.satan, UnitID.iblis ],
    puzzle: [ PuzzleCode.EVENT_2023_CNY_1, PuzzleCode.EVENT_2023_SUMMER_1 ],
    skillSet: []
}