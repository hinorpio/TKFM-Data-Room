import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10170: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.w_tsubaki][0],
        name: {
            [Locale.tc]: `精液採購`,
            [Locale.sc]: `精液采购`,
            [Locale.en]: `Procuring Semen`,
            [Locale.jp]: `ザーメン屋`,
            [Locale.kr]: `정액 구매`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.w_tsubaki][1],
        name: {
            [Locale.tc]: `夜晚的拜訪`,
            [Locale.sc]: `夜晚的拜访`,
            [Locale.en]: `Nighttime Visit`,
            [Locale.jp]: `夜の訪問`,
            [Locale.kr]: `야밤의 방문`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.w_tsubaki][2],
        name: {
            [Locale.tc]: `街邊的突襲交合`,
            [Locale.sc]: `街边的突袭交合`,
            [Locale.en]: `Street-Side Surprise`,
            [Locale.jp]: `街中セックス`,
            [Locale.kr]: `길거리 기습 섹스`
        },
    },
]
