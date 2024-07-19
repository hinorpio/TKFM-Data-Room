import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10088: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.q_asida][0],
        name: {
            [Locale.tc]: "偷懶被抓到了！",
            [Locale.sc]: "偷懒被抓到了！",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.q_asida][1],
        name: {
            [Locale.tc]: "明明是人家先來的",
            [Locale.sc]: "明明是人家先来的",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.q_asida][2],
        name: {
            [Locale.tc]: "這次只有人家喔",
            [Locale.sc]: "这次只有人家喔",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
