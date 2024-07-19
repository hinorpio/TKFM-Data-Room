import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10095: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.h_leona][0],
        name: {
            [Locale.tc]: "給小聖騎士的懲罰",
            [Locale.sc]: "给小圣骑士的惩罚",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_leona][1],
        name: {
            [Locale.tc]: "自瀆的練習",
            [Locale.sc]: "自渎的练习",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_leona][2],
        name: {
            [Locale.tc]: "令人沉迷的懲罰",
            [Locale.sc]: "令人沉迷的惩罚",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
