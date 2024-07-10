import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10081: Unit = {
    ID: "10081",
    metaCode: "b_iblis",
    prefix: {
        [Locale.tc]: "花嫁",
        [Locale.sc]: null,
        [Locale.en]: "Bride",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "伊布力斯",
        [Locale.sc]: null,
        [Locale.en]: "Iblis",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "花伊" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "作為身分高貴的魔王，就應該要使用與其地位相襯的事物。衣服、鞋履、首飾和化妝品自然就不用說了。婚紗，也一定要穿上最好，最能襯托高貴氣質的那件才行。因為只有這樣，才能夠滿足伊布力斯的少女心對於婚姻的美好憧憬。雖然她愛的那個人總是隨心所欲、既不成熟也不浪漫，有時甚至還讓人忍不住氣得跺腳。但每一次，只要一聽見那個人的稱讚，以及他對自己毫不掩飾的強烈索求，伊布力斯便會難以止住心中不斷湧出的甜蜜。\n\n『唯有身分高貴、英明睿智的我，才能勝任凱薩正室的位置。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/02/16",
    essence: UnitEssence[UnitCode.b_iblis],
    thumbnail: UnitEssence[UnitCode.b_iblis],
    selection: UnitSelection[UnitCode.b_iblis],
    clothes: UnitFullImage[UnitCode.b_iblis],
    tagList: [],
    otherVersion: [ UnitCode.iblis, UnitCode.i_iblis, UnitCode.s_iblis, UnitCode.v_iblis ],
    puzzle: [],
    skillSet: []
}