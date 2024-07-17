import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10128: Unit = {
    ID: "10128",
    metaCode: "x_iblis",
    prefix: {
        [Locale.tc]: "性誕戀歌",
        [Locale.sc]: null,
        [Locale.en]: "Snowy Fantasy",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "伊布力斯",
        [Locale.sc]: null,
        [Locale.en]: "Aridya",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "誕伊", "王妃" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "性誕節，與戀人共結連理、享受性愛歡愉的美好節日。雖然這個節日的習俗聽起來都非常奇怪，但為了和自己心愛的那個他來場完美的性誕約會。伊布力斯選擇邀請作為性誕節馴鹿的希依，來幫助她學習性誕節的文化。沒想到，卻因此意外被捲入了聖誕與性誕的對抗中。魔王的權威不容質疑，為了擺平聖誕反抗軍，順利推動自己的約會計畫，伊布力斯決定親自出手，和希依合作，一起為了性誕而戰！\n\n『這下誰都別想打擾本小姐的性誕節計畫。』",
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
    releaseDate: "2023/12/13",
    essence: UnitEssence[UnitCode.x_iblis],
    thumbnail: UnitEssence[UnitCode.x_iblis],
    selection: UnitSelection[UnitCode.x_iblis],
    clothes: UnitFullImage[UnitCode.x_iblis],
    tagList: [],
    otherVersion: [ UnitCode.iblis, UnitCode.i_iblis, UnitCode.b_iblis, UnitCode.s_iblis, UnitCode.v_iblis ],
    puzzle: [ PuzzleCode.EVENT_2023_XMAS_2 ],
    skillSet: []
}