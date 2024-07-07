import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10037: Unit = {
    ID: "10037",
    metaCode: "mesmiia",
    prefix: {
        [Locale.tc]: "蛇女之后",
        [Locale.sc]: null,
        [Locale.en]: "Snake Queen",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "梅絲米奈雅",
        [Locale.sc]: null,
        [Locale.en]: "Mesmiia",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "蛇后", "蛇", "智慧毛毛蟲" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "梅絲米奈雅是蛇女族的梅杜莎種。傳說中可以將人石化，但實際上只是視力不好瞪人造成的誤解，但世人沒有誤解的是，梅杜莎的確有著一頭蛇髮。而即將繼任成下位當家的梅絲米奈雅卻有著和一般梅杜莎不同的煩惱，梅絲米奈雅的左髮常常不自覺的透漏了她的心聲，讓她的虛張聲勢化為烏有。為了向其他人證明她確實有資格成為下位當家，她決定挑戰現在聲勢如日中天的魔王凱薩，以藉此證明自己的實力。\n\n『看看我這完美的體態，平滑且勻稱的身軀，你也被迷上了嗎？』\n『不同於其他擁腫蛇女，滑溜的身材才是蛇女一族的完美體態。』\n『嗚嗚嗚，我也想要跟大家一樣的大胸部。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2021/03/10",
    essence: UnitEssence[UnitCode.mesmiia],
    thumbnail: UnitEssence[UnitCode.mesmiia],
    selection: UnitSelection[UnitCode.mesmiia],
    clothes: UnitFullImage[UnitCode.mesmiia],
    tagList: [ 1, 9, 12, 16, 21, 28 ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}