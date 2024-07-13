import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10807: Unit = {
    ID: "10807",
    metaCode: "yoi",
    prefix: {
        [Locale.tc]: "流浪魔法師",
        [Locale.sc]: null,
        [Locale.en]: "Wandering Witch",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "尤依",
        [Locale.sc]: null,
        [Locale.en]: "Yoi",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "尤依" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "尤依是在世界流浪的魔法師，她有著旺盛的求知慾，因此總是不斷的在旅行，探索失落的遺跡，並對未有人涉足過的未知領域進行研究。她對世界的戰亂漠不關心，只管沉浸在自己的世界裡。為了找出魔王強大的真相，選擇加入了魔王軍，只要能得到研究用的素材，即使需要對凱薩獻身也毫不在意。只是在研究的過程中，一直以來被尤依忽略的情慾也在凱薩的調教下逐漸覺醒……\n\n『下一次要去哪一個神殿好呢……』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.R,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.yoi],
    thumbnail: UnitEssence[UnitCode.yoi],
    selection: UnitSelection[UnitCode.yoi],
    clothes: UnitFullImage[UnitCode.yoi],
    tagList: [ 
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_SMALL_SIZED, 
        TagID.BREAST_GIANT_TITS, 
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_MORE_POWER,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}