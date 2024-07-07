import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10005: Unit = {
    ID: "10005",
    metaCode: "lana",
    prefix: {
        [Locale.tc]: "矮人王",
        [Locale.sc]: null,
        [Locale.en]: "Dwarf Queen",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "蘭兒",
        [Locale.sc]: null,
        [Locale.en]: "Lana",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "矮人", "普矮", "解矮", "矮", "腫瘤" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "石龍一族是矮人國度世代傳承的王，蘭兒‧石龍繼承了矮人王的血統，力大無窮，手持利斧的她即使是最堅固的黑曜石都能輕鬆劈開。蘭兒是矮人族中的最強者，個性開朗且直率，她對自己的實力充滿自信，比起傳說中邪惡的魔族，蘭兒更討厭總是藉故收取苛刻稅收，壓榨矮人的法斯帝國。當族軍隊兵臨城下，決定親自帶軍出征的蘭兒與凱薩在戰場上遭遇，而兩人單挑的結果是……\n\n『比力氣的話我是不會輸給任何人的！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.lana],
    thumbnail: UnitEssence[UnitCode.lana],
    selection: UnitSelection[UnitCode.lana],
    clothes: UnitFullImage[UnitCode.lana],
    tagList: [ 2, 6, 13, 14, 16, 22, 29, 31 ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}