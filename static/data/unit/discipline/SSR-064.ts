import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10096: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.h_lotiya][0],
        name: {
            [Locale.tc]: "吸血鬼公開處刑",
            [Locale.sc]: "吸血鬼公开处刑",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_lotiya][1],
        name: {
            [Locale.tc]: "夜襲聖騎士",
            [Locale.sc]: "夜袭圣骑士",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_lotiya][2],
        name: {
            [Locale.tc]: "公共玩具吸血鬼",
            [Locale.sc]: "公共玩具吸血鬼",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
