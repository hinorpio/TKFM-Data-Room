import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10167: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.c_noel][0],
        name: {
            [Locale.tc]: `腰力特訓`,
            [Locale.sc]: `腰力特训`,
            [Locale.en]: `Waist Strength Training`,
            [Locale.jp]: `腰の力の訓練`,
            [Locale.kr]: `허리 힘 특훈`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.c_noel][1],
        name: {
            [Locale.tc]: `教練的身體檢查`,
            [Locale.sc]: `教练的身体检查`,
            [Locale.en]: `Coach's Physical Checkup`,
            [Locale.jp]: `コーチの身体検査`,
            [Locale.kr]: `코치의 신체 검사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.c_noel][2],
        name: {
            [Locale.tc]: `應援考驗`,
            [Locale.sc]: `应援考验`,
            [Locale.en]: `Cheerleading Test`,
            [Locale.jp]: `応援のテスト`,
            [Locale.kr]: `응원 테스트`
        },
    },
]
