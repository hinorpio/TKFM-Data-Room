import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10011: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.fiora][0],
        name: {
            [Locale.tc]: "新神的使者",
            [Locale.sc]: "新神的使者",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fiora][1],
        name: {
            [Locale.tc]: "性的傳教",
            [Locale.sc]: "性的传教",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fiora][2],
        name: {
            [Locale.tc]: "性愛之神官",
            [Locale.sc]: "性爱之神官",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
