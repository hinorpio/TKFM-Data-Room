import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10183: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.g_britney][0],
        name: {
            [Locale.tc]: `實境訓練`,
            [Locale.sc]: `实境训练`,
            [Locale.en]: `Real-life Training`,
            [Locale.jp]: `実地訓練`,
            [Locale.kr]: `실전 훈련`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.g_britney][1],
        name: {
            [Locale.tc]: `愉快的交易`,
            [Locale.sc]: `愉快的交易`,
            [Locale.en]: `A Happy Transaction`,
            [Locale.jp]: `愉快な取引`,
            [Locale.kr]: `유쾌한 거래`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.g_britney][2],
        name: {
            [Locale.tc]: `當心魔王`,
            [Locale.sc]: `当心魔王`,
            [Locale.en]: `Beware of Caesar`,
            [Locale.jp]: `魔王に用心`,
            [Locale.kr]: `마왕 주의`
        },
    },
]
