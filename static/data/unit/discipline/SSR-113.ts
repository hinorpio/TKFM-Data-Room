import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10143: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_salucia][0],
        name: {
            [Locale.tc]: `最美的風景`,
            [Locale.sc]: `最美的风景`,
            [Locale.en]: `Unbeatable Coastal View`,
            [Locale.jp]: `美しい風景`,
            [Locale.kr]: `가장 아름다운 풍경`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_salucia][1],
        name: {
            [Locale.tc]: `海岸突襲`,
            [Locale.sc]: `海岸突袭`,
            [Locale.en]: `Coastal Sneak Strike`,
            [Locale.jp]: `海岸突撃`,
            [Locale.kr]: `해안 기습`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_salucia][2],
        name: {
            [Locale.tc]: `白紗的意義`,
            [Locale.sc]: `白纱的意义`,
            [Locale.en]: `Wedding Gowns`,
            [Locale.jp]: `ベールの意義`,
            [Locale.kr]: `베일의 의미`
        },
    },
]
