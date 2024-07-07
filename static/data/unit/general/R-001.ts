import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10802: Unit = {
    ID: "10802",
    metaCode: "nana",
    prefix: {
        [Locale.tc]: "貓妖",
        [Locale.sc]: null,
        [Locale.en]: "Bakeneko",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "娜娜",
        [Locale.sc]: null,
        [Locale.en]: "Nana",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "娜娜", "普娜", "普貓", "過勞貓" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "在凱薩還不是魔王之前，娜娜就是凱薩認識多年的好友。儘管外表可愛，但我行我素的性格讓娜娜面對成為魔王的凱薩也毫無尊敬之情，總是用辛辣的毒舌與他說話。作為一名常識人兼魔王下屬，娜娜經常因為凱薩毫無常識且破天荒的命令而疲於奔命，並且擔任著「吐槽」的重責大任。即使是娜娜本人也無法分辨自己對凱薩本人的感情究竟是友情還是愛情，不過娜娜無庸置疑是凱薩最為倚賴的左右手。\n\n『笨蛋凱薩，快點工作喵！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.R,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.nana],
    thumbnail: UnitEssence[UnitCode.nana],
    selection: UnitSelection[UnitCode.nana],
    clothes: UnitFullImage[UnitCode.nana],
    tagList: [ 3, 6, 12, 14, 16, 22 ],
    otherVersion: [ UnitCode.s_nana ],
    puzzle: [ PuzzleCode.EVENT_2021_XMAS_2, PuzzleCode.EVENT_2022_XMAS_1 ],
    skillSet: []
}