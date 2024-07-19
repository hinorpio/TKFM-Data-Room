import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10113: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.n_caesar][0],
        name: {
            [Locale.tc]: "肉棒診療室",
            [Locale.sc]: "肉棒诊疗室",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.n_caesar][1],
        name: {
            [Locale.tc]: "小護士的榨精服務",
            [Locale.sc]: "小护士的榨精服务",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.n_caesar][2],
        name: {
            [Locale.tc]: "大笨蛋♡",
            [Locale.sc]: "大笨蛋♡",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
