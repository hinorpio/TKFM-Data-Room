import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10048: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.momo][0],
        name: {
            [Locale.tc]: "交朋友的秘訣",
            [Locale.sc]: "交朋友的秘诀",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.momo][1],
        name: {
            [Locale.tc]: "藥物迷姦",
            [Locale.sc]: "药物迷奸",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.momo][2],
        name: {
            [Locale.tc]: "永遠的陪伴",
            [Locale.sc]: "永远的陪伴",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
