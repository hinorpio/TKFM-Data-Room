import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10175: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.x_ichika][0],
        name: {
            [Locale.tc]: `散步前的運動`,
            [Locale.sc]: `散步前的运动`,
            [Locale.en]: `Pre-Walk Exercise`,
            [Locale.jp]: `散歩前の運動`,
            [Locale.kr]: `산책 전 운동`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.x_ichika][1],
        name: {
            [Locale.tc]: `雪人降溫法`,
            [Locale.sc]: `雪人降温法`,
            [Locale.en]: `Snowman Cooling`,
            [Locale.jp]: `雪だるまの熱取り`,
            [Locale.kr]: `눈사람 냉각법`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.x_ichika][2],
        name: {
            [Locale.tc]: `雪女的惡作劇`,
            [Locale.sc]: `雪女的恶作剧`,
            [Locale.en]: `Yuki-onna's prank`,
            [Locale.jp]: `雪女のイタズラ`,
            [Locale.kr]: `설녀의 장난`
        },
    },
]
