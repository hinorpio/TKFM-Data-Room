import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10057: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.daphne][0],
        name: {
            [Locale.tc]: `幽冥契約`,
            [Locale.sc]: `幽冥契约`,
            [Locale.en]: `Dark Contract`,
            [Locale.jp]: `地獄の契約`,
            [Locale.kr]: `지옥의 계약`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.daphne][1],
        name: {
            [Locale.tc]: `傳送事故`,
            [Locale.sc]: `传送事故`,
            [Locale.en]: `Special Delivery`,
            [Locale.jp]: `伝送アクシデント`,
            [Locale.kr]: `텔레포트 사고`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.daphne][2],
        name: {
            [Locale.tc]: `打回原形`,
            [Locale.sc]: `打回原形`,
            [Locale.en]: `True Form`,
            [Locale.jp]: `原形へ返る`,
            [Locale.kr]: `원상복구`
        },
    },
]
