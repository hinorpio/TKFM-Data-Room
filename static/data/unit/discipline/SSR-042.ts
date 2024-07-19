import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10019: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.ayane][0],
        name: {
            [Locale.tc]: "性處理委員",
            [Locale.sc]: "性处理委员",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ayane][1],
        name: {
            [Locale.tc]: "健康教育時間",
            [Locale.sc]: "健康教育时间",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ayane][2],
        name: {
            [Locale.tc]: "食物的怨念",
            [Locale.sc]: "食物的怨念",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
