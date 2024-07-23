import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10097: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.xx_aiko][0],
        name: {
            [Locale.tc]: `對無禮女僕的懲罰`,
            [Locale.sc]: `对无礼女仆的惩罚`,
            [Locale.en]: `Maid Punishment`,
            [Locale.jp]: `無礼なメイドへの罰`,
            [Locale.kr]: `무례한 메이드 처벌`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.xx_aiko][1],
        name: {
            [Locale.tc]: `女僕特訓？`,
            [Locale.sc]: `女仆特训？`,
            [Locale.en]: `Maid Training?`,
            [Locale.jp]: `メイドの特訓？`,
            [Locale.kr]: `메이드 특훈?`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.xx_aiko][2],
        name: {
            [Locale.tc]: `訣別之時`,
            [Locale.sc]: `诀别之时`,
            [Locale.en]: `Bid Farewell`,
            [Locale.jp]: `訣別の時`,
            [Locale.kr]: `작별의 시간`
        },
    },
]
