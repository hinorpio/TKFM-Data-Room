import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10033: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.aridya][0],
        name: {
            [Locale.tc]: `睡夢中的調教`,
            [Locale.sc]: `睡梦中的调教`,
            [Locale.en]: `Dreamy Discipline`,
            [Locale.jp]: `夢の中の調教`,
            [Locale.kr]: `꿈속에서의 조련`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.aridya][1],
        name: {
            [Locale.tc]: `睡眼惺忪中的侍奉`,
            [Locale.sc]: `睡眼惺忪中的侍奉`,
            [Locale.en]: `Sleepy Service`,
            [Locale.jp]: `目覚めのご奉仕`,
            [Locale.kr]: `잠결의 봉사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.aridya][2],
        name: {
            [Locale.tc]: `眠姦進行式？`,
            [Locale.sc]: `眠奸进行式？`,
            [Locale.en]: `I Dream of Weenie`,
            [Locale.jp]: `睡姦ing？`,
            [Locale.kr]: `수면X간 진행 중`
        },
    },
]
