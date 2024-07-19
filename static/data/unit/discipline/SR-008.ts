import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10016: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.britney][0],
        name: {
            [Locale.tc]: "天才軍師贏不了",
            [Locale.sc]: "天才军师赢不了",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.britney][1],
        name: {
            [Locale.tc]: "天才軍師的妙計",
            [Locale.sc]: "天才军师的妙计",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.britney][2],
        name: {
            [Locale.tc]: "贏不了就加入",
            [Locale.sc]: "赢不了就加入",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
