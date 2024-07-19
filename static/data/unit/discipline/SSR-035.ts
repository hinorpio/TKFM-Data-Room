import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10067: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.tm_minayomi][0],
        name: {
            [Locale.tc]: "教育奴隸",
            [Locale.sc]: "教育奴隶",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.tm_minayomi][1],
        name: {
            [Locale.tc]: "讓女人墮落的辦法",
            [Locale.sc]: "让女人堕落的办法",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.tm_minayomi][2],
        name: {
            [Locale.tc]: "喚醒本能",
            [Locale.sc]: "唤醒本能",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
