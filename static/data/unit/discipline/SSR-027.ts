import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10045: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.ibuki][0],
        name: {
            [Locale.tc]: `鬼的招待`,
            [Locale.sc]: `鬼的招待`,
            [Locale.en]: `Oni's Hospitality`,
            [Locale.jp]: `鬼の接待`,
            [Locale.kr]: `오니의 접대`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ibuki][1],
        name: {
            [Locale.tc]: `沉溺當下`,
            [Locale.sc]: `沉溺当下`,
            [Locale.en]: `Indulge in the Present`,
            [Locale.jp]: `今に溺れる`,
            [Locale.kr]: `흠뻑 빠져버리다`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ibuki][2],
        name: {
            [Locale.tc]: `淫慾之宴`,
            [Locale.sc]: `淫欲之宴`,
            [Locale.en]: `Lustful Banquet`,
            [Locale.jp]: `淫乱の宴`,
            [Locale.kr]: `음욕의 연회`
        },
    },
]
