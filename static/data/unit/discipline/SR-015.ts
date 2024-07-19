import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10041: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.yingying][0],
        name: {
            [Locale.tc]: "公會營業之前",
            [Locale.sc]: "公会营业之前",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.yingying][1],
        name: {
            [Locale.tc]: "魔王接待員",
            [Locale.sc]: "魔王接待员",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.yingying][2],
        name: {
            [Locale.tc]: "專屬接待",
            [Locale.sc]: "专属接待",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
