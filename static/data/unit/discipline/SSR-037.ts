import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10072: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.b_baal][0],
        name: {
            [Locale.tc]: "讓人窒色的愛",
            [Locale.sc]: "让人窒色的爱",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.b_baal][1],
        name: {
            [Locale.tc]: "純白的侍奉",
            [Locale.sc]: "纯白的侍奉",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.b_baal][2],
        name: {
            [Locale.tc]: "只是喜歡被粗暴對待",
            [Locale.sc]: "只是喜欢被粗暴对待",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]
