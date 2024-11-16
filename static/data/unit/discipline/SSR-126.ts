import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10155: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.m_ks8][0],
        name: {
            [Locale.tc]: `女僕技巧考驗`,
            [Locale.sc]: `女仆技巧考验`,
            [Locale.en]: `Maid Proficiency Test`,
            [Locale.jp]: `メイドテクのテスト`,
            [Locale.kr]: `메이드 스킬 테스트`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.m_ks8][1],
        name: {
            [Locale.tc]: `特製套餐`,
            [Locale.sc]: `特制套餐`,
            [Locale.en]: `Exclusive Set`,
            [Locale.jp]: `特製セット`,
            [Locale.kr]: `특제 세트`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.m_ks8][2],
        name: {
            [Locale.tc]: `性愛的秘訣`,
            [Locale.sc]: `性爱的秘诀`,
            [Locale.en]: `The Secret to Sex`,
            [Locale.jp]: `セックスの秘訣`,
            [Locale.kr]: `섹스의 비결`
        },
    },
]
