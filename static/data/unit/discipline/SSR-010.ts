import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10008: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.ks8][0],
        name: {
            [Locale.tc]: "執行侍寢任務",
            [Locale.sc]: "执行侍寝任务",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ks8][1],
        name: {
            [Locale.tc]: "情感模組",
            [Locale.sc]: "情感模组",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ks8][2],
        name: {
            [Locale.tc]: "人偶之心",
            [Locale.sc]: "人偶之心",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
