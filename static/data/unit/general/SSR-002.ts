import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10002: Unit = {
    ID: "10002",
    metaCode: "satan",
    prefix: {
        [Locale.tc]: "魔王",
        [Locale.sc]: null,
        [Locale.en]: "Archdemon",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "撒旦",
        [Locale.sc]: null,
        [Locale.en]: "Satan",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "撒旦", "普撒", "魔撒", "解撒", "撒" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "撒旦是魔界成名已久的魔王，性格殘暴、喜愛殺戮，在魔界稱霸一方。撒旦認為只有擁有深厚慾望的魔族才是正統，因此她嗜殺，沉溺於情慾且毫不掩飾。當凱薩繼位時，撒旦曾一度出現在繼位大典上，並且與凱薩展開了長達數天數夜的廝殺，戰後兩人重傷各自退去，並且對當時的戰鬥結果閉口不言，從此兩人再未見面。但是不管是撒旦還是凱薩都知道，兩人在未來必有一戰。\n\n『呵呵呵，世界上只有兩種人，支配者與被支配者，凱薩你又是哪一種呢？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: false,
    releaseDate: "2020-12-14",
    essence: UnitEssence[UnitCode.satan],
    thumbnail: UnitEssence[UnitCode.satan],
    selection: UnitSelection[UnitCode.satan],
    clothes: UnitFullImage[UnitCode.satan],
    tagList: [ 5, 7, 12, 15, 18, 21, 24, 30, 33 ],
    otherVersion: [],
    puzzle: [ PuzzleCode.EVENT_2021_XMAS_2, PuzzleCode.EVENT_2023_CNY_1 ],
    skillSet: []
}