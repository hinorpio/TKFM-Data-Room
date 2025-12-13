import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10191: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.fifth_nana][0],
        name: {
            [Locale.tc]: `重啟的感情`,
            [Locale.sc]: `重启的感情`,
            [Locale.en]: `Restarted Emotions`,
            [Locale.jp]: `蘇った心`,
            [Locale.kr]: `되살아난 감정`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fifth_nana][1],
        name: {
            [Locale.tc]: `和另一個自己`,
            [Locale.sc]: `和另一个自己`,
            [Locale.en]: `With Another Self`,
            [Locale.jp]: `もう一人の自分と`,
            [Locale.kr]: `또 다른 나`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fifth_nana][2],
        name: {
            [Locale.tc]: `最後的溫存`,
            [Locale.sc]: `最后的温存`,
            [Locale.en]: `Final Tenderness`,
            [Locale.jp]: `最後の優しさ`,
            [Locale.kr]: `마지막 따스함`
        },
    },
]
