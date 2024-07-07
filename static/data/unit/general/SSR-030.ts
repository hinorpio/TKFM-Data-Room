import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10059: Unit = {
    ID: "10059",
    metaCode: "inori",
    prefix: {
        [Locale.tc]: "音速魅影",
        [Locale.sc]: null,
        [Locale.en]: "Supersonic Phantom",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "祈",
        [Locale.sc]: null,
        [Locale.en]: "Inori",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "馬娘", "祈" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "二足人馬是近代歷史中才從半人馬演化而來的新興種族。雖然同為人馬，但是二足人馬外型酷似人類，純論敏捷及力量都遜於人馬，因此一直以來都被半人馬族所歧視。在困苦環境下成長的祈雖然溫文有禮，但心中卻深埋著對半人馬的不滿。為了反抗半人馬族對二足人馬的苛待，祈戴上面具，化身為怪盜專門竊取剝削二足人馬的惡德半人馬，並用盜來的寶物換錢接濟他人。祈平時喜歡編織綺麗服飾給自己，作為二足人馬的她夢想有一日能穿上神聖的儀裝，參與半人馬族4年一度的賽跑祭祀。\n\n『不管是作為祈還是怪盜，又或者是二足人馬，我都會不斷的奔跑下去。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/11/17",
    essence: UnitEssence[UnitCode.inori],
    thumbnail: UnitEssence[UnitCode.inori],
    selection: UnitSelection[UnitCode.inori],
    clothes: UnitFullImage[UnitCode.inori],
    tagList: [ 3, 6, 13, 15, 21, 22 ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}