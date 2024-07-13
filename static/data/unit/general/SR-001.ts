import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10009: Unit = {
    ID: "10009",
    metaCode: "aiko",
    prefix: {
        [Locale.tc]: "魔管家",
        [Locale.sc]: null,
        [Locale.en]: "Demon Servant",
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
        [Locale.tc]: [ "艾可", "普艾", "艾" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "隨侍於魔王凱薩身邊的魔族侍女，同時也是備受凱薩信賴的內務總管，一直以來代替不擅經營的凱薩將領地內務打理的井井有序，足以證明艾可優秀的管理能力。艾可溫柔婉約，對凱薩忠心耿耿，將侍奉凱薩視為自己生命中最崇高的使命。對艾可來說只要凱薩能夠開心，其他一切都不重要，因此也被同為凱薩左右手的娜娜戲稱是「凱薩教」的狂信徒。對此艾可表示如果真有這個教派，請務必讓她擔任神官長一職。\n\n『凱薩大人…只要是為了您，我甚麼都願意的。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SR,
    element: Element.DARK,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.aiko],
    thumbnail: UnitEssence[UnitCode.aiko],
    selection: UnitSelection[UnitCode.aiko],
    clothes: UnitFullImage[UnitCode.aiko],
    tagList: [
        TagID.ELEMENT_DARK, 
        TagID.POSITION_SUPPORTER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_SUPPORT,
    ], 
    otherVersion: [ UnitCode.x_aiko, UnitCode.xx_aiko, UnitCode.s_aiko ],
    puzzle: [ PuzzleCode.EVENT_2023_XMAS_2 ],
    skillSet: []
}