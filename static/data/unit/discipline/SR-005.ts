import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10013: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.minayomi][0],
        name: {
            [Locale.tc]: `窒息絕頂`,
            [Locale.sc]: `窒息绝顶`,
            [Locale.en]: `Asphyxiation Fixation`,
            [Locale.jp]: `窒息オーガズム`,
            [Locale.kr]: `질식의 정점`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.minayomi][1],
        name: {
            [Locale.tc]: `臣服的鬼人`,
            [Locale.sc]: `臣服的鬼人`,
            [Locale.en]: `Ghastly Servant`,
            [Locale.jp]: `服従した鬼人`,
            [Locale.kr]: `굴복한 귀인(鬼人)`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.minayomi][2],
        name: {
            [Locale.tc]: `肉抱枕神無雪`,
            [Locale.sc]: `肉抱枕神无雪`,
            [Locale.en]: `Meat Pillow Minayomi`,
            [Locale.jp]: `肉抱き枕神無雪`,
            [Locale.kr]: `육체 베게 미나요미`
        },
    },
]
