import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10002: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.satan][0],
        name: {
            [Locale.tc]: "狂野之人",
            [Locale.sc]: "狂野之人",
            [Locale.en]: "Wild One",
            [Locale.jp]: "ワイルドな人",
            [Locale.kr]: "와일드한 사람"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.satan][1],
        name: {
            [Locale.tc]: "不受控的雌犬",
            [Locale.sc]: "不受控的雌犬",
            [Locale.en]: "Unleashed Beast",
            [Locale.jp]: "抑えの利かない雌犬",
            [Locale.kr]: "통제불능의 암캐"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.satan][2],
        name: {
            [Locale.tc]: "強精之計",
            [Locale.sc]: "强精之计",
            [Locale.en]: "Strong Swimmers",
            [Locale.jp]: "精力増強の計",
            [Locale.kr]: "정력 강화의 계획"
        },
    },
]
