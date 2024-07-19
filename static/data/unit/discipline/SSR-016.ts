import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10030: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_lulu][0],
        name: {
            [Locale.tc]: "公主逃走中",
            [Locale.sc]: "公主逃走中",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_lulu][1],
        name: {
            [Locale.tc]: "單蠢公主不會夢到魔王",
            [Locale.sc]: "单蠢公主不会梦到魔王",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_lulu][2],
        name: {
            [Locale.tc]: "坦率的勇氣",
            [Locale.sc]: "坦率的勇气",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
