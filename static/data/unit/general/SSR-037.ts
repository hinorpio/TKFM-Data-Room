import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10072: Unit = {
    ID: "10072",
    metaCode: "b_baal",
    prefix: {
        [Locale.tc]: "花嫁",
        [Locale.sc]: null,
        [Locale.en]: "Bride",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "巴爾",
        [Locale.sc]: null,
        [Locale.en]: "Ba'al",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "花巴" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "在情人節的這一天，換上了純白的禮服，即便如此還是無法掩蓋其與生俱來的古靈精怪。一開始巴爾只是嗅到了可以賺大錢的機會才會來參加活動。卻沒想到在換上了婚紗之後，心裡竟然湧現出一股奇妙的雀躍感。她實在無法分辨，這股令人心神蕩漾的歡喜究竟是來自於又找到了賺錢的好點子。還是因為隱藏在內心最深處，那個一直被掩蓋的心意，悄悄的冒了出來。\n\n『要先吃飯~先洗澡~還是......嘿嘿嘿，先付帳呢？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2022/02/16",
    essence: UnitEssence[UnitCode.b_baal],
    thumbnail: UnitEssence[UnitCode.b_baal],
    selection: UnitSelection[UnitCode.b_baal],
    clothes: UnitFullImage[UnitCode.b_baal],
    tagList: [],
    otherVersion: [ UnitCode.baal, UnitCode.f_baal ],
    puzzle: [],
    skillSet: []
}