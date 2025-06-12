import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10173: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_noma][0],
        name: {
            [Locale.tc]: `協同訓練`,
            [Locale.sc]: `协同训练`,
            [Locale.en]: `Joint Training`,
            [Locale.jp]: `共同訓練`,
            [Locale.kr]: `협동 훈련`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_noma][1],
        name: {
            [Locale.tc]: `副官的背叛`,
            [Locale.sc]: `副官的背叛`,
            [Locale.en]: `Lieutenant's Betrayal`,
            [Locale.jp]: `副官の裏切り`,
            [Locale.kr]: `부관의 배신`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_noma][2],
        name: {
            [Locale.tc]: `海灘的狂犬`,
            [Locale.sc]: `海滩的狂犬`,
            [Locale.en]: `Beach Crazed Dog`,
            [Locale.jp]: `ビーチの狂犬`,
            [Locale.kr]: `해변의 광견`
        },
    },
]
