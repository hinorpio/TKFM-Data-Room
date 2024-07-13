import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10010: Unit = {
    ID: "10010",
    metaCode: "leona",
    prefix: {
        [Locale.tc]: "聖騎士長",
        [Locale.sc]: null,
        [Locale.en]: "Holy Knight Capt.",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "雷歐娜",
        [Locale.sc]: null,
        [Locale.en]: "Leona",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "聖騎" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "聖光騎士團是直屬人類最大宗教—主神教團的精銳部隊，雷歐娜本人就是這精銳部隊的騎士團長。雷歐娜勇猛果敢，從不畏懼任何邪惡勢力，多次率領聖光騎士團遠征魔界並取得豐厚戰果，多年來戰無不勝，被譽為人類的英雄。在一次例行的魔界遠征中，雷歐娜率領著麾下騎士攻入了巴爾的領地，本以為這次遠征也會一如往常的順利，然而等著她的未來卻是……\n\n『魔王凱薩，賭上你的榮譽與信仰與我堂堂正正的一戰！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SR,
    element: Element.WATER,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.leona],
    thumbnail: UnitEssence[UnitCode.leona],
    selection: UnitSelection[UnitCode.leona],
    clothes: UnitFullImage[UnitCode.leona],
    tagList: [
        TagID.ELEMENT_WATER, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_SURVIVABILLITY,
    ], 
    otherVersion: [ UnitCode.h_leona ],
    puzzle: [ PuzzleCode.HUMAN_MARTINA ],
    skillSet: []
}