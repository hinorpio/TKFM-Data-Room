import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10095: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.h_leona][0],
        name: {
            [Locale.tc]: `給小聖騎士的懲罰`,
            [Locale.sc]: `给小圣骑士的惩罚`,
            [Locale.en]: `Holy Punishment`,
            [Locale.jp]: `聖騎士への懲罰`,
            [Locale.kr]: `성기사의 징계`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_leona][1],
        name: {
            [Locale.tc]: `自瀆的練習`,
            [Locale.sc]: `自渎的练习`,
            [Locale.en]: `Touching Practice`,
            [Locale.jp]: `自慰の練習`,
            [Locale.kr]: `자위 훈련`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_leona][2],
        name: {
            [Locale.tc]: `令人沉迷的懲罰`,
            [Locale.sc]: `令人沉迷的惩罚`,
            [Locale.en]: `Devine Discipline`,
            [Locale.jp]: `夢中になる懲罰`,
            [Locale.kr]: `체벌에 심취하다`
        },
    },
]
