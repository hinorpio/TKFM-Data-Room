import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10021: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.shiro][0],
        name: {
            [Locale.tc]: `因材施教`,
            [Locale.sc]: `因材施教`,
            [Locale.en]: `Student Tailored`,
            [Locale.jp]: `人を見て法を説く`,
            [Locale.kr]: `맞춤 훈련`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.shiro][1],
        name: {
            [Locale.tc]: `賢者的課外援業`,
            [Locale.sc]: `贤者的课外援业`,
            [Locale.en]: `Extracurricular`,
            [Locale.jp]: `賢者の課外授業`,
            [Locale.kr]: `현자의 과외 수업`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.shiro][2],
        name: {
            [Locale.tc]: `被喚醒的本能`,
            [Locale.sc]: `被唤醒的本能`,
            [Locale.en]: `Awakened Abilities`,
            [Locale.jp]: `呼び覚まされる本能`,
            [Locale.kr]: `깨어난 본능`
        },
    },
]
