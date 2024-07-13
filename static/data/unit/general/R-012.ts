import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10809: Unit = {
    ID: "10809",
    metaCode: "mia",
    prefix: {
        [Locale.tc]: "怪盜",
        [Locale.sc]: null,
        [Locale.en]: "Phantom Thief",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "米雅",
        [Locale.sc]: null,
        [Locale.en]: "Mia",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "米雅" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "米雅是一位來無影去無蹤的神秘怪盜。她並不看重錢財，喜歡的只是在竊取珍寶時的緊張刺激，以及成功逃脫追捕，戲弄了所有人的成就感。除此之外，她還非常喜歡出風頭，認為寄送預告信是一種很重要的儀式。只不過，因為她有多次睡過頭，導致沒有在預告時間出現的前科，再加上腦袋不好，信函的謎題總是莫名其妙。所以她最近對於寄出的怪盜信總是不被重視而感到深深的煩惱。\n\n『下次的預告函該怎麼寫才好呢～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.R,
    element: Element.WIND,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: true,
    releaseDate: "2022/07/13",
    essence: UnitEssence[UnitCode.mia],
    thumbnail: UnitEssence[UnitCode.mia],
    selection: UnitSelection[UnitCode.mia],
    clothes: UnitFullImage[UnitCode.mia],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}