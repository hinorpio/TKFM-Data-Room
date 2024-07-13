import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10806: Unit = {
    ID: "10806",
    metaCode: "marlene",
    prefix: {
        [Locale.tc]: "美人魚",
        [Locale.sc]: null,
        [Locale.en]: "Mermaid",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "瑪蓮",
        [Locale.sc]: null,
        [Locale.en]: "Marlene",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "人魚", "魚" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "美人魚瑪蓮是優秀的歌姬，美妙的歌聲甚至能令聽眾迷失自我。瑪蓮喜愛著人類，對於人類的一切都極為憧憬，也有了收集人類物品的習慣，涉世未深的她將人類的童話故事當作了真實發生的事情，對故事中描述的愛情充滿了嚮往。為了談一場浪漫的戀愛，瑪蓮選擇離開了她熟悉的海域，克服萬難前往人類世界，瑪蓮內心深深相信，總有一天她也能像童話中的人魚公主，遇到王子並且與他一同墜入愛河。\n\n『瑪蓮的王子大人究竟在哪裡呢？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.R,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.marlene],
    thumbnail: UnitEssence[UnitCode.marlene],
    selection: UnitSelection[UnitCode.marlene],
    clothes: UnitFullImage[UnitCode.marlene],
    tagList: [ 
        TagID.ELEMENT_WATER, 
        TagID.POSITION_HEALER, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.OTHER_RECOVERY,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}