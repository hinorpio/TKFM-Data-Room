import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10074: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.ichika][0],
        name: {
            [Locale.tc]: `口嫌體正直`,
            [Locale.sc]: `口嫌体正直`,
            [Locale.en]: `Body Language`,
            [Locale.jp]: `口では嫌がっても体は正直`,
            [Locale.kr]: `몸은 정직하다`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ichika][1],
        name: {
            [Locale.tc]: `無法再繼續忍受`,
            [Locale.sc]: `无法再继续忍受`,
            [Locale.en]: `Can't Take It`,
            [Locale.jp]: `我慢の限界`,
            [Locale.kr]: `참을 수 없는 쾌락`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ichika][2],
        name: {
            [Locale.tc]: `融化的雪姬`,
            [Locale.sc]: `融化的雪姬`,
            [Locale.en]: `Melting Snow`,
            [Locale.jp]: `溶けた雪姫`,
            [Locale.kr]: `녹아버린 이치카`
        },
    },
]
