import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10018: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.uruta][0],
        name: {
            [Locale.tc]: "勇者的鍛鍊",
            [Locale.sc]: "",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.uruta][1],
        name: {
            [Locale.tc]: "詛咒裝備",
            [Locale.sc]: "",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.uruta][2],
        name: {
            [Locale.tc]: "這樣也不壞",
            [Locale.sc]: "",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
