import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10113: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.n_caesar][0],
        name: {
            [Locale.tc]: `肉棒診療室`,
            [Locale.sc]: `肉棒诊疗室`,
            [Locale.en]: `Dick Clinic`,
            [Locale.jp]: `肉棒診療所`,
            [Locale.kr]: `육봉 진료실`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.n_caesar][1],
        name: {
            [Locale.tc]: `小護士的榨精服務`,
            [Locale.sc]: `小护士的榨精服务`,
            [Locale.en]: `Nurse's Juice Extraction Service`,
            [Locale.jp]: `看護師の精液採取`,
            [Locale.kr]: `간호사의 정액 착취 서비스`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.n_caesar][2],
        name: {
            [Locale.tc]: `大笨蛋♡`,
            [Locale.sc]: `大笨蛋♡`,
            [Locale.en]: `You idiot♡`,
            [Locale.jp]: `大バカ者♡`,
            [Locale.kr]: `왕멍청이♡`
        },
    },
]
