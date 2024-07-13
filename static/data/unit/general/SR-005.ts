import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10013: Unit = {
    ID: "10013",
    metaCode: "minayomi",
    prefix: {
        [Locale.tc]: "劍聖",
        [Locale.sc]: null,
        [Locale.en]: "Blademaster",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "神無雪",
        [Locale.sc]: null,
        [Locale.en]: "Minayomi",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "劍聖", "普劍", "劍", "331" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "神無雪是烈日國的第一劍聖。異於常人的體質與優異的動態視力，加上天賦異稟，使神無雪在劍道的路上進步神速。她曾挑戰過無數的劍客，後來名聲漸起後從挑戰成為了被挑戰者，最後戰無不勝的神無雪開創出了屬於自己的流派，並被烈日國皇帝冊封為了劍聖。神無雪瞧不起比她弱小的其他人，但在這自負的背後，貌似藏著某種秘密……\n\n『連我一劍都接不下的弱者，沒資格對我指手畫腳！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.minayomi],
    thumbnail: UnitEssence[UnitCode.minayomi],
    selection: UnitSelection[UnitCode.minayomi],
    clothes: UnitFullImage[UnitCode.minayomi],
    tagList: [
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_WEAKEN,
        TagID.OTHER_MORE_POWER,
    ], 
    otherVersion: [ UnitCode.tm_minayomi ],
    puzzle: [],
    skillSet: []
}