import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10168: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.eunice][0],
        name: {
            [Locale.tc]: `克服緊張的訓練`,
            [Locale.sc]: `克服紧张的训练`,
            [Locale.en]: `Nervousness Training`,
            [Locale.jp]: `緊張の克服訓練`,
            [Locale.kr]: `긴장감 극복 훈련`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.eunice][1],
        name: {
            [Locale.tc]: `訓練的代價`,
            [Locale.sc]: `训练的代价`,
            [Locale.en]: `Price of Training`,
            [Locale.jp]: `訓練の代償`,
            [Locale.kr]: `훈련의 대가`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.eunice][2],
        name: {
            [Locale.tc]: `應援前的放鬆活動`,
            [Locale.sc]: `应援前的放松活动`,
            [Locale.en]: `Pre-Cheer Relaxation`,
            [Locale.jp]: `応援前のリラックス`,
            [Locale.kr]: `응원 전 워밍업`
        },
    },
]
