import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10002: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.satan][0],
        name: {
            [Locale.tc]: "狂野之人",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.satan][1],
        name: {
            [Locale.tc]: "不受控的雌犬",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.satan][2],
        name: {
            [Locale.tc]: "強精之計",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
    },
]
