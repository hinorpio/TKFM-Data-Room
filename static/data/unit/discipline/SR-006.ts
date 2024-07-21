import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10014: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.shizuka][0],
        name: {
            [Locale.tc]: "狐娘的初夜",
            [Locale.sc]: "狐娘的初夜",
            [Locale.en]: "A Fox's First",
            [Locale.jp]: "狐っ娘の初夜",
            [Locale.kr]: "여우녀의 첫날 밤"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.shizuka][1],
        name: {
            [Locale.tc]: "大人的遊戲喏",
            [Locale.sc]: "大人的游戏喏",
            [Locale.en]: "Grown-Up Game",
            [Locale.jp]: "大人の遊びだよん",
            [Locale.kr]: "어른들의 게임"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.shizuka][2],
        name: {
            [Locale.tc]: "懷胎願望",
            [Locale.sc]: "怀胎愿望",
            [Locale.en]: "Pregnant Desire",
            [Locale.jp]: "妊娠願望",
            [Locale.kr]: "임신 소원"
        },
    },
]
