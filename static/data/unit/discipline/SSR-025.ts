import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10060: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.hm_fiora][0],
        name: {
            [Locale.tc]: "祭典前的準備",
            [Locale.sc]: "祭典前的准备",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.hm_fiora][1],
        name: {
            [Locale.tc]: "性神的祭司",
            [Locale.sc]: "性神的祭司",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.hm_fiora][2],
        name: {
            [Locale.tc]: "願性神護佑你",
            [Locale.sc]: "愿性神护佑你",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
