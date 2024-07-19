import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10004: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.salucia][0],
        name: {
            [Locale.tc]: "恥辱會議",
            [Locale.sc]: "耻辱会议",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.salucia][1],
        name: {
            [Locale.tc]: "曝露的事",
            [Locale.sc]: "曝露的事",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.salucia][2],
        name: {
            [Locale.tc]: "普通的女人",
            [Locale.sc]: "普通的女人",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
