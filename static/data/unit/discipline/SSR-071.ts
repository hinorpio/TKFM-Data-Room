import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10107: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.ny_lana][0],
        name: {
            [Locale.tc]: `新裝上陣`,
            [Locale.sc]: `新装上阵`,
            [Locale.en]: `New Formation`,
            [Locale.jp]: `新衣装`,
            [Locale.kr]: `신상 옷 등장`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ny_lana][1],
        name: {
            [Locale.tc]: `龍遊淺穴`,
            [Locale.sc]: `龙游浅穴`,
            [Locale.en]: `Dragon Cave`,
            [Locale.jp]: `龍のツボ`,
            [Locale.kr]: `용유천혈`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ny_lana][2],
        name: {
            [Locale.tc]: `互傾愛意`,
            [Locale.sc]: `互倾爱意`,
            [Locale.en]: `Mutual Love`,
            [Locale.jp]: `両想い`,
            [Locale.kr]: `서로의 애정`
        },
    },
]
