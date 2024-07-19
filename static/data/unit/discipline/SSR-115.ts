import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10145: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_satan][0],
        name: {
            [Locale.tc]: "強行插隊",
            [Locale.sc]: "强行插队",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_satan][1],
        name: {
            [Locale.tc]: "解決產生問題的人",
            [Locale.sc]: "解决产生问题的人",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_satan][2],
        name: {
            [Locale.tc]: "沒有休息的休息時間",
            [Locale.sc]: "没有休息的休息时间",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
