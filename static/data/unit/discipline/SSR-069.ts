import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10021: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.shiro][0],
        name: {
            [Locale.tc]: "因材施教",
            [Locale.sc]: "因材施教",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.shiro][1],
        name: {
            [Locale.tc]: "賢者的課外援業",
            [Locale.sc]: "贤者的课外援业",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.shiro][2],
        name: {
            [Locale.tc]: "被喚醒的本能",
            [Locale.sc]: "被唤醒的本能",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
