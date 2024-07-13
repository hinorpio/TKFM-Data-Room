import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10907: Unit = {
    ID: "10907",
    metaCode: "ola",
    prefix: {
        [Locale.tc]: "精靈射手",
        [Locale.sc]: null,
        [Locale.en]: "Elven Archer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "奧菈",
        [Locale.sc]: null,
        [Locale.en]: "Ola",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "奧菈" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "奧菈是一位非常年輕的精靈射手，但與同族不同的是，奧菈不喜歡森林裡的無聊生活，反而對外面的花花世界充滿好奇。她對於日復一日守護森林的任務感到厭煩，經常幻想自己離開森林並成為偉大冒險者的模樣。\n\n『總有一天我會成為偉大的冒險者！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.N,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.ola],
    thumbnail: UnitEssence[UnitCode.ola],
    selection: UnitSelection[UnitCode.ola],
    clothes: UnitFullImage[UnitCode.ola],
    tagList: [ 
        TagID.ELEMENT_WIND, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_OLA ],
    skillSet: []
}