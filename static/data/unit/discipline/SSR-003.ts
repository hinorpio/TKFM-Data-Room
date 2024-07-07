import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10003: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.iblis][0],
        name: {
            [Locale.tc]: "後庭開發",
            [Locale.sc]: "",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.iblis][1],
        name: {
            [Locale.tc]: "伊布力斯的侍寢",
            [Locale.sc]: "",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.iblis][2],
        name: {
            [Locale.tc]: "菊穴奴隸伊布力斯",
            [Locale.sc]: "",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
