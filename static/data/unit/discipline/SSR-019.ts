import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10007: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.milae][0],
        name: {
            [Locale.tc]: "天使折翼",
            [Locale.sc]: "",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.milae][1],
        name: {
            [Locale.tc]: "信仰污染",
            [Locale.sc]: "",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.milae][2],
        name: {
            [Locale.tc]: "墮落天使",
            [Locale.sc]: "",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
