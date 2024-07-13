import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10055: Unit = {
    ID: "10055",
    metaCode: "tanocia",
    prefix: {
        [Locale.tc]: "精靈舞者",
        [Locale.sc]: null,
        [Locale.en]: "Elven Dancer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "塔諾西雅",
        [Locale.sc]: null,
        [Locale.en]: "Tanocia",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "舞者" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "為舞蹈而生的塔諾西雅。任何的舞蹈技巧，她都能以不可思議的速度掌握，並且將特色融入其他的舞步中。塔諾西雅的才能被族人相中，擔任起祭神舞孃，在大大小小的祭祀活動中，為神祉獻上感謝之舞。祭神之舞，莊嚴且不容許任何差錯，塔諾西雅總能不負眾望圓滿達成任務，但她始終無法從中獲得滿足。塔諾西雅心中渴望的是自由、不受拘束，讓所有人都能觀賞並樂在其中的舞蹈。某天夜晚，塔諾西雅收拾了行囊，毅然離開家鄉，尋找能夠自由舞蹈的場所。\n\n『舞蹈並不是那麼嚴謹的東西，當你覺得開心、歡喜的時候，就來一起擺動你的身體吧。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/05/11",
    essence: UnitEssence[UnitCode.tanocia],
    thumbnail: UnitEssence[UnitCode.tanocia],
    selection: UnitSelection[UnitCode.tanocia],
    clothes: UnitFullImage[UnitCode.tanocia],
    tagList: [
        TagID.ELEMENT_LIGHT,
        TagID.POSITION_SUPPORTER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BREAST_HOT_TITS,
        TagID.CLASS_ELITE,
        TagID.OTHER_RECOVERY,
    ], 
    otherVersion: [],
    puzzle: [],
    skillSet: []
}