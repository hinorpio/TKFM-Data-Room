import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10808: Unit = {
    ID: "10808",
    metaCode: "shiraka",
    prefix: {
        [Locale.tc]: "暗黑精靈",
        [Locale.sc]: null,
        [Locale.en]: "Dark Elf",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "索拉卡",
        [Locale.sc]: null,
        [Locale.en]: "Shiraka",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "暗精" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "索拉卡年幼時就曾經受過人類迫害，差點被奪去了處女。對人類的不信任以及暗黑精靈的種族因素，索拉卡不僅討厭人類，對其他族群的精靈或矮人等種族也異常排斥，最後她甚至產生了所有人都想要染指自己的錯覺。索拉卡有著姣好的外貌，但從未想要利用自己的美色爭取利益，然而對男性無比排斥的她最後卻反常的加入魔王軍，選擇為傳聞中最好色的魔王凱薩效力……\n\n『你、你也和其他人一樣，在覬覦我的身體對吧……！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.R,
    element: Element.DARK,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.shiraka],
    thumbnail: UnitEssence[UnitCode.shiraka],
    selection: UnitSelection[UnitCode.shiraka],
    clothes: UnitFullImage[UnitCode.shiraka],
    tagList: [ 
        TagID.ELEMENT_DARK, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.OTHER_WEAKEN,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}