import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10069: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.lillane][0],
        name: {
            [Locale.tc]: `過度壓抑的情慾`,
            [Locale.sc]: `过度压抑的情欲`,
            [Locale.en]: `Excessive Suppression of Lust`,
            [Locale.jp]: `抑えに抑えた情欲`,
            [Locale.kr]: `과도하게 억압된 욕정`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lillane][1],
        name: {
            [Locale.tc]: `控制不住的情慾`,
            [Locale.sc]: `控制不住的情欲`,
            [Locale.en]: `Uncontrollable Lust`,
            [Locale.jp]: `抑えられない情欲`,
            [Locale.kr]: `주체할 수 없는 욕정`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lillane][2],
        name: {
            [Locale.tc]: `被解放的情慾`,
            [Locale.sc]: `被解放的情欲`,
            [Locale.en]: `Freed Lust`,
            [Locale.jp]: `解放された情欲`,
            [Locale.kr]: `해방된 욕정`
        },
    },
]
