import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10115: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.m_britney][0],
        name: {
            [Locale.tc]: `魔力暴走`,
            [Locale.sc]: `魔力暴走`,
            [Locale.en]: `Magical Burst`,
            [Locale.jp]: `魔力暴走`,
            [Locale.kr]: `마력 폭주`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.m_britney][1],
        name: {
            [Locale.tc]: `科學『怪人」的實驗品`,
            [Locale.sc]: `科学『怪人」的实验品`,
            [Locale.en]: `Frankenstein's Experiment`,
            [Locale.jp]: `フランケンシュタインの実験体`,
            [Locale.kr]: `과학 『괴인』의 실험품`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.m_britney][2],
        name: {
            [Locale.tc]: `禮尚往來`,
            [Locale.sc]: `礼尚往来`,
            [Locale.en]: `Reciprocity`,
            [Locale.jp]: `礼には礼を`,
            [Locale.kr]: `자업자득`
        },
    },
]
