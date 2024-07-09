import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10019: Unit = {
    ID: "10019",
    metaCode: "ayane",
    prefix: {
        [Locale.tc]: "現代勇者",
        [Locale.sc]: null,
        [Locale.en]: "Modern Hero",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "神田綾音",
        [Locale.sc]: null,
        [Locale.en]: "Ayane",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "現勇" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "被法斯帝國勇者召喚儀式召喚過來的「現代勇者」。生活在高樓大廈林立，車水馬龍的現代勇者，本身只是普通的女高中生，不過在被召喚後獲得了加護技能。在加護技能的效果下，獲得了超人一樣的身體能力以及學習力，只要學習就能嫻熟的使用各種魔法和武器。因為不喜法斯帝國的對待他國的高壓姿態，原本不想成為勇者，不過最後還是無法坐視無辜的人民被捲入戰爭而參戰。由於來自和平的世界，最開始並不擅長戰鬥，但是在召喚勇者中是最具成長潛力的人。\n\n『本來不想用這招的…偶爾也會想這麼說。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/03/16",
    essence: UnitEssence[UnitCode.ayane],
    thumbnail: UnitEssence[UnitCode.ayane],
    selection: UnitSelection[UnitCode.ayane],
    clothes: UnitFullImage[UnitCode.ayane],
    tagList: [
        TagID.ELEMENT_LIGHT,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_EXPLOSIVENESS,
        TagID.OTHER_DAMAGE_OUTPUT,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}